/**
 * خلفيتي AI - Dedicated AI Background Removal Web Worker
 * Uses Transformers.js with briaai/RMBG-1.4 model
 * WebGPU acceleration with seamless WebAssembly (WASM) fallback
 */

import { pipeline, env, RawImage } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.3.3';

// Force Transformers.js to load remote models directly from Hugging Face hub
env.allowLocalModels = false;

// Singleton pipeline instance
let segmenter = null;
let currentDevice = 'wasm';

/**
 * Initializes or retrieves the RMBG-1.4 segmentation pipeline
 */
async function getSegmenter(preferredDevice = 'webgpu', onProgress) {
  if (segmenter) return segmenter;

  const hasWebGPU = typeof navigator !== 'undefined' && 'gpu' in navigator && !!navigator.gpu;
  const targetDevice = (preferredDevice === 'webgpu' && hasWebGPU) ? 'webgpu' : 'wasm';

  try {
    self.postMessage({
      type: 'status',
      status: 'init',
      device: targetDevice,
      message: `Initializing AI Engine with ${targetDevice.toUpperCase()}...`
    });

    segmenter = await pipeline('image-segmentation', 'briaai/RMBG-1.4', {
      device: targetDevice,
      progress_callback: (progressData) => {
        self.postMessage({
          type: 'progress',
          data: progressData
        });
      }
    });

    currentDevice = targetDevice;
    self.postMessage({
      type: 'status',
      status: 'ready',
      device: currentDevice,
      message: 'AI Model ready for inference!'
    });

    return segmenter;
  } catch (error) {
    if (targetDevice === 'webgpu') {
      console.warn('WebGPU pipeline allocation failed, falling back to WebAssembly (WASM)...', error);
      self.postMessage({
        type: 'status',
        status: 'fallback',
        device: 'wasm',
        message: 'WebGPU unavailable, switching to WebAssembly (CPU)...'
      });

      segmenter = await pipeline('image-segmentation', 'briaai/RMBG-1.4', {
        device: 'wasm',
        progress_callback: (progressData) => {
          self.postMessage({
            type: 'progress',
            data: progressData
          });
        }
      });

      currentDevice = 'wasm';
      self.postMessage({
        type: 'status',
        status: 'ready',
        device: currentDevice,
        message: 'AI Model ready (WASM)!'
      });

      return segmenter;
    }
    throw error;
  }
}

/**
 * Processes a single image blob to remove background
 */
async function processImage(id, blob, device = 'webgpu') {
  try {
    const pipelineInstance = await getSegmenter(device);

    self.postMessage({
      type: 'status',
      id,
      status: 'inferring',
      message: 'Extracting alpha segmentation mask...'
    });

    // 1. Read input image blob into Transformers.js RawImage
    const rawImage = await RawImage.read(blob);

    // 2. Run segmentation pipeline
    const output = await pipelineInstance(rawImage);

    // 3. Extract mask object
    let mask = null;
    if (Array.isArray(output) && output.length > 0) {
      mask = output[0].mask || output[0];
    } else if (output && output.mask) {
      mask = output.mask;
    } else {
      mask = output;
    }

    if (!mask) {
      throw new Error('Could not extract segmentation mask from model output.');
    }

    // 4. Ensure mask dimensions precisely match original image
    if (mask.width !== rawImage.width || mask.height !== rawImage.height) {
      await mask.resize(rawImage.width, rawImage.height);
    }

    const maskData = mask.data;
    const isFloat = maskData instanceof Float32Array;

    // Send mask array buffer back via zero-copy transfer
    self.postMessage({
      type: 'result',
      id,
      width: rawImage.width,
      height: rawImage.height,
      channels: mask.channels || 1,
      isFloat,
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
      await getSegmenter(device || 'webgpu');
    } catch (err) {
      self.postMessage({ type: 'error', error: err.message });
    }
  } else if (type === 'process') {
    await processImage(id, blob, device || 'webgpu');
  }
};
