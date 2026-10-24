/**
 * خلفيتي AI - Dedicated AI Background Removal Web Worker
 * Uses Transformers.js with briaai/RMBG-1.4 via AutoModel & AutoProcessor
 * WebGPU acceleration with seamless WebAssembly (WASM) fallback
 */

import { AutoModel, AutoProcessor, RawImage, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.3.3';

// Force Transformers.js to load remote models directly from Hugging Face hub
env.allowLocalModels = false;

// Singleton model & processor instances
let model = null;
let processor = null;
let currentDevice = 'wasm';

/**
 * Initializes or retrieves the RMBG-1.4 AutoModel & AutoProcessor
 */
async function getModelAndProcessor(preferredDevice = 'webgpu') {
  if (model && processor) return { model, processor };

  const hasWebGPU = typeof navigator !== 'undefined' && 'gpu' in navigator && !!navigator.gpu;
  const targetDevice = (preferredDevice === 'webgpu' && hasWebGPU) ? 'webgpu' : 'wasm';

  try {
    self.postMessage({
      type: 'status',
      status: 'init',
      device: targetDevice,
      message: `Initializing AI Engine with ${targetDevice.toUpperCase()}...`
    });

    // 1. Load Preprocessor
    processor = await AutoProcessor.from_pretrained('briaai/RMBG-1.4', {
      progress_callback: (progressData) => {
        self.postMessage({ type: 'progress', data: progressData });
      }
    });

    // 2. Load Model with custom model_type config
    model = await AutoModel.from_pretrained('briaai/RMBG-1.4', {
      device: targetDevice,
      config: { model_type: 'custom' },
      progress_callback: (progressData) => {
        self.postMessage({ type: 'progress', data: progressData });
      }
    });

    currentDevice = targetDevice;
    self.postMessage({
      type: 'status',
      status: 'ready',
      device: currentDevice,
      message: 'AI Model ready for inference!'
    });

    return { model, processor };
  } catch (error) {
    if (targetDevice === 'webgpu') {
      console.warn('WebGPU allocation failed, falling back to WebAssembly (WASM)...', error);
      self.postMessage({
        type: 'status',
        status: 'fallback',
        device: 'wasm',
        message: 'WebGPU unavailable, switching to WebAssembly (CPU)...'
      });

      processor = await AutoProcessor.from_pretrained('briaai/RMBG-1.4', {
        progress_callback: (progressData) => {
          self.postMessage({ type: 'progress', data: progressData });
        }
      });

      model = await AutoModel.from_pretrained('briaai/RMBG-1.4', {
        device: 'wasm',
        config: { model_type: 'custom' },
        progress_callback: (progressData) => {
          self.postMessage({ type: 'progress', data: progressData });
        }
      });

      currentDevice = 'wasm';
      self.postMessage({
        type: 'status',
        status: 'ready',
        device: currentDevice,
        message: 'AI Model ready (WASM)!'
      });

      return { model, processor };
    }
    throw error;
  }
}

/**
 * Processes a single image blob to remove background
 */
async function processImage(id, blob, device = 'webgpu') {
  try {
    const { model: modelInstance, processor: procInstance } = await getModelAndProcessor(device);

    self.postMessage({
      type: 'status',
      id,
      status: 'inferring',
      message: 'Extracting alpha segmentation mask...'
    });

    // 1. Read input image blob into Transformers.js RawImage
    const rawImage = await RawImage.read(blob);

    // 2. Preprocess image into model input tensors
    const { pixel_values } = await procInstance(rawImage);

    // 3. Run model inference
    const { output } = await modelInstance({ input: pixel_values });

    // 4. Extract output probability tensor (1 x 1 x 1024 x 1024)
    const tensorData = output.data;
    const maskData = new Uint8ClampedArray(1024 * 1024);
    for (let i = 0; i < tensorData.length; i++) {
      // Clamp between 0 and 1, then scale to 0-255
      maskData[i] = Math.round(Math.max(0, Math.min(1, tensorData[i])) * 255);
    }

    // 5. Send 1024x1024 mask buffer and original dimensions back via zero-copy transfer
    self.postMessage({
      type: 'result',
      id,
      maskWidth: 1024,
      maskHeight: 1024,
      originalWidth: rawImage.width,
      originalHeight: rawImage.height,
      maskData: maskData.buffer,
      device: currentDevice
    }, [maskData.buffer]);

  } catch (err) {
    console.error('Worker processing error:', err);
    self.postMessage({
      type: 'error',
      id,
      error: err.message || 'Error occurred during AI inference'
    });
  }
}

// Handle incoming messages from Main UI Thread
self.onmessage = async (e) => {
  const { type, id, blob, device } = e.data;

  if (type === 'init') {
    try {
      await getModelAndProcessor(device || 'webgpu');
    } catch (err) {
      self.postMessage({ type: 'error', error: err.message });
    }
  } else if (type === 'process') {
    await processImage(id, blob, device || 'webgpu');
  }
};
