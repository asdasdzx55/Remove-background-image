/**
 * خلفيتي AI - Khalfyati AI | Main Client Application Orchestrator
 * High-performance, client-side background removal with Transformers.js & RMBG-1.4
 */

// --- 1. i18n Translation Dictionary ---
const translations = {
  ar: {
    privacyGuarantee: "خصوصية وأمان 100%",
    privacyDesc: "جميع عمليات المعالجة تتم محلياً بالكامل داخل متصفحك (Client-side AI). صورك لا تُرفع إلى أي خادم خارجي نهائياً!",
    appTitle: "خلفيتي AI",
    appSubtitle: "إزالة الخلفيات بالذكاء الاصطناعي الفائق",
    heroBadge: "مدعوم بنموذج Bria AI RMBG-1.4 فائق الحساسية",
    heroTitlePart1: "عزل خلفيات الصور بدقة خرافية",
    heroTitlePart2: "بضغطة واحدة وخلال ثوانٍ",
    heroDesc: "تقنية ذكاء اصطناعي متطورة تعزل أدق التفاصيل كخصلات الشعر وحواف الملابس فوراً داخل متصفحك. بدون اشتراكات، بدون حد أقصى، وبدون خوادم!",
    featureOriginalRes: "أبعاد وجودة أصلية 100%",
    featureHairEdges: "حفظ خصلات الشعر والتفاصيل الدقيقة",
    featureFastWebGPU: "تسريع فائق عبر WebGPU/WASM",
    featureBatchReady: "معالجة دفعات متعددة",
    dropzoneTitle: "اسحب وأفلت صورك هنا، أو انقر للاختيار",
    dropzoneSubtitle: "يدعم صيغ PNG, JPG, JPEG, WEBP حتى أعلى دقة ممكنة",
    browseBtn: "اختر صورة من جهازك",
    pasteHint: "أو الصق مباشرة من الحافظة",
    trySampleLabel: "أو جرب صورة نموذجية:",
    samplePortrait: "شخصية (شعر معقد)",
    sampleProduct: "منتج تجاري",
    sampleCar: "سيارة",
    samplePet: "حيوان أليف",
    loadingModelTitle: "جاري تحميل وتجهيز النموذج الذكي...",
    loadingModelSubtitle: "يتم تحميل النموذج لمرة واحدة وحفظه بذاكرة المتصفح للعمل الفوري لاحقاً",
    statusExtracting: "جاري عزل الحواف وتفريغ الصورة بالذكاء الاصطناعي...",
    statusComplete: "تمت إزالة الخلفية بنجاح وبدقة فائقة!",
    queueTitle: "قائمة الصور والمعالجة الجماعية",
    queueDesc: "اضغط على أي صورة لعرضها وإجراء المقارنة أو التعديل",
    downloadZipBtn: "تحميل الكل (ملف ZIP)",
    clearQueueBtn: "مسح الكل",
    viewModeLabel: "طريقة العرض:",
    viewSplit: "مقارنة منزلقة",
    viewSide: "جنباً إلى جنب",
    viewResult: "النتيجة فقط",
    viewOriginal: "الأصلية",
    zoomLabel: "التقريب:",
    badgeBefore: "قبل (الأصلية)",
    badgeAfter: "بعد (المعزولة)",
    bgSwitcherTitle: "تغيير خلفية المعاينة والتصدير:",
    bgTransparent: "شفاف",
    bgTransparentDark: "شفاف داكن",
    bgWhite: "أبيض ناصع",
    bgBlack: "أسود",
    bgPassportBlue: "أزرق رسمي",
    bgGray: "رمادي استوديو",
    bgGradientSunset: "شروق",
    bgGradientOcean: "أوشن",
    bgCustomColor: "لون مخصص",
    losslessBadge: "PNG شفاف فائق الدقة (Lossless)",
    downloadTransparent: "تحميل PNG شفاف (الدقة الأصلية)",
    downloadWithBg: "تحميل بالخلفية المحددة",
    uploadAnotherBtn: "صورة جديدة",
    feature1Title: "صفر خوادم، خصوصية مطلقة",
    feature1Desc: "لا يتم نقل أو رفع أي بكسل من صورك إلى الإنترنت. كل الحسابات تنفذ بداخل معالج رسوميات جهازك (GPU) عبر WebGPU و WebAssembly.",
    feature2Title: "نموذج RMBG-1.4 المتفوق",
    feature2Desc: "أقوى نموذج مفتوح المصدر مدرب على ملايين الصور لعزل أدق خصلات الشعر وتفاصيل الوجه والمنتجات التجارية مثل PhotoRoom.",
    feature3Title: "استضافة مجانية ثابتة",
    feature3Desc: "ملفات HTML/CSS/JS نقية تماماً بدون باكنج (Zero Backend). جاهزة للنشر بنقرة واحدة على GitHub Pages أو استضافة Hostinger مشتركة.",
    feature4Title: "تصدير جماعي ZIP",
    feature4Desc: "عالج عشرات الصور بالتسلسل واستخرج جميع النتائج بملف مضغوط موحد، مع إمكانية استبدال الخلفية بألوان أو تدرجات مخصصة.",
    toastModelLoaded: "تم تجهيز نموذج الذكاء الاصطناعي بنجاح!",
    toastCopiedPasted: "تم التقاط الصورة من الحافظة بنجاح!",
    toastZipReady: "تم إنشاء ملف ZIP وتنزيله بنجاح!",
    toastError: "حدث خطأ أثناء معالجة الصورة"
  },
  en: {
    privacyGuarantee: "100% Private & Secure",
    privacyDesc: "All AI processing is performed entirely client-side inside your browser. Your images are NEVER uploaded to any server!",
    appTitle: "Khalfyati AI",
    appSubtitle: "AI Background Removal in Your Browser",
    heroBadge: "Powered by SOTA Bria AI RMBG-1.4 Model",
    heroTitlePart1: "Crisp AI Background Removal",
    heroTitlePart2: "One Click, Instant & Private",
    heroDesc: "Cutting-edge client-side AI accurately extracts fine hair strands, portrait details, and commercial products. No subscriptions, no limits, zero backend!",
    featureOriginalRes: "100% Original Resolution & Quality",
    featureHairEdges: "Preserves Fine Hair & Soft Edges",
    featureFastWebGPU: "WebGPU & WASM Accelerated",
    featureBatchReady: "Batch Processing Ready",
    dropzoneTitle: "Drag & drop images here, or click to browse",
    dropzoneSubtitle: "Supports PNG, JPG, JPEG, WEBP at maximum native resolution",
    browseBtn: "Browse from Device",
    pasteHint: "or paste from clipboard directly",
    trySampleLabel: "Or try a sample photo:",
    samplePortrait: "Portrait (Hair)",
    sampleProduct: "Product",
    sampleCar: "Car",
    samplePet: "Pet / Animal",
    loadingModelTitle: "Downloading & initializing AI model in browser...",
    loadingModelSubtitle: "Downloaded once and securely cached in your browser storage for instant reuse",
    statusExtracting: "Extracting alpha mask and refining edges...",
    statusComplete: "Background removed successfully with lossless precision!",
    queueTitle: "Batch Queue & Multi-Image Gallery",
    queueDesc: "Click any image below to preview, compare, or customize",
    downloadZipBtn: "Download All (ZIP Archive)",
    clearQueueBtn: "Clear All",
    viewModeLabel: "View Mode:",
    viewSplit: "Split Slider",
    viewSide: "Side by Side",
    viewResult: "Result Only",
    viewOriginal: "Original Only",
    zoomLabel: "Zoom:",
    badgeBefore: "Before (Original)",
    badgeAfter: "After (Removed)",
    bgSwitcherTitle: "Preview & Export Background:",
    bgTransparent: "Transparent",
    bgTransparentDark: "Dark Grid",
    bgWhite: "Pure White",
    bgBlack: "Deep Black",
    bgPassportBlue: "Passport Blue",
    bgGray: "Studio Gray",
    bgGradientSunset: "Sunset",
    bgGradientOcean: "Ocean",
    bgCustomColor: "Custom Color",
    losslessBadge: "Lossless Transparent PNG",
    downloadTransparent: "Download Transparent PNG (Original Res)",
    downloadWithBg: "Download with Selected Background",
    uploadAnotherBtn: "New Image",
    feature1Title: "Zero Server, 100% Privacy",
    feature1Desc: "No pixels ever leave your device. All tensor computations execute on your GPU/CPU via WebGPU and WebAssembly.",
    feature2Title: "SOTA RMBG-1.4 Model",
    feature2Desc: "Open-source state-of-the-art background removal model trained on millions of images, matching PhotoRoom and Rembg quality.",
    feature3Title: "Zero Backend Hosting",
    feature3Desc: "Pure static HTML/CSS/JS. Deployable anywhere: GitHub Pages, Hostinger public_html, Vercel, or Netlify with zero server fees.",
    feature4Title: "Batch ZIP Export",
    feature4Desc: "Queue dozens of images sequentially and download all clean transparent cutouts packaged in a single ZIP file.",
    toastModelLoaded: "AI Model loaded and ready!",
    toastCopiedPasted: "Image loaded from clipboard!",
    toastZipReady: "ZIP archive created and downloaded!",
    toastError: "An error occurred while processing the image"
  }
};

// --- 2. Application State ---
const state = {
  lang: localStorage.getItem('khalfyati_lang') || 'ar',
  theme: localStorage.getItem('khalfyati_theme') || 'dark',
  hasWebGPU: false,
  device: 'wasm',
  worker: null,
  isProcessing: false,
  queue: [],
  activeItemId: null,
  splitPosition: 50,
  currentView: 'split',
  zoomLevel: 100,
  currentBgType: 'checker',
  currentColor: '#ffffff',
  currentGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  mainThreadModel: null,
  mainThreadProcessor: null
};

// --- 3. DOM Elements Cache ---
const elements = {
  html: document.documentElement,
  langToggleBtn: document.getElementById('langToggleBtn'),
  langFlag: document.getElementById('langFlag'),
  langCode: document.getElementById('langCode'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  hardwarePill: document.getElementById('hardwarePill'),
  hardwareLabel: document.getElementById('hardwareLabel'),
  dropzone: document.getElementById('dropzone'),
  fileInput: document.getElementById('fileInput'),
  browseBtn: document.getElementById('browseBtn'),
  sampleButtons: document.querySelectorAll('.sample-btn'),
  progressSection: document.getElementById('progressSection'),
  progressTitle: document.getElementById('progressTitle'),
  progressSubtitle: document.getElementById('progressSubtitle'),
  progressPercentage: document.getElementById('progressPercentage'),
  progressBytes: document.getElementById('progressBytes'),
  progressFill: document.getElementById('progressFill'),
  progressSpinner: document.getElementById('progressSpinner'),
  queueSection: document.getElementById('queueSection'),
  queueCountBadge: document.getElementById('queueCountBadge'),
  queueList: document.getElementById('queueList'),
  downloadAllZipBtn: document.getElementById('downloadAllZipBtn'),
  clearQueueBtn: document.getElementById('clearQueueBtn'),
  workspaceSection: document.getElementById('workspaceSection'),
  viewModeGroup: document.getElementById('viewModeGroup'),
  zoomOutBtn: document.getElementById('zoomOutBtn'),
  zoomInBtn: document.getElementById('zoomInBtn'),
  zoomResetBtn: document.getElementById('zoomResetBtn'),
  zoomLevelText: document.getElementById('zoomLevelText'),
  comparisonContainer: document.getElementById('comparisonContainer'),
  splitStageWrap: document.getElementById('splitStageWrap'),
  dualStageWrap: document.getElementById('dualStageWrap'),
  singleStageWrap: document.getElementById('singleStageWrap'),
  beforeImg: document.getElementById('beforeImg'),
  afterImg: document.getElementById('afterImg'),
  afterLayer: document.getElementById('afterLayer'),
  sliderHandle: document.getElementById('sliderHandle'),
  customBgSurface: document.getElementById('customBgSurface'),
  dualBeforeImg: document.getElementById('dualBeforeImg'),
  dualAfterImg: document.getElementById('dualAfterImg'),
  dualBgSurface: document.getElementById('dualBgSurface'),
  singleImg: document.getElementById('singleImg'),
  singleBgSurface: document.getElementById('singleBgSurface'),
  bgChips: document.querySelectorAll('.bg-chip'),
  customColorInput: document.getElementById('customColorInput'),
  metaDimensions: document.getElementById('metaDimensions'),
  metaFileSize: document.getElementById('metaFileSize'),
  downloadTransparentBtn: document.getElementById('downloadTransparentBtn'),
  downloadWithBgBtn: document.getElementById('downloadWithBgBtn'),
  newImageBtn: document.getElementById('newImageBtn'),
  toastContainer: document.getElementById('toastContainer'),
  offscreenCanvas: document.getElementById('offscreenCanvas')
};

// --- 4. Localization Management ---
function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('khalfyati_lang', lang);

  const dict = translations[lang];
  elements.html.setAttribute('lang', lang);
  elements.html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  if (lang === 'ar') {
    elements.langFlag.textContent = '🇺🇸';
    elements.langCode.textContent = 'EN';
  } else {
    elements.langFlag.textContent = '🇸🇦';
    elements.langCode.textContent = 'العربية';
  }

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  updateSplitSlider(state.splitPosition);
}

// --- 5. Theme Management ---
function setTheme(theme) {
  state.theme = theme;
  localStorage.setItem('khalfyati_theme', theme);
  elements.html.setAttribute('data-theme', theme);
}

// --- 6. Toast System ---
function showToast(message, type = 'info', duration = 4000) {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// --- 7. Hardware Detection & Web Worker Setup ---
async function initHardwareAndWorker() {
  state.hasWebGPU = typeof navigator !== 'undefined' && 'gpu' in navigator && !!navigator.gpu;
  if (state.hasWebGPU) {
    try {
      const adapter = await navigator.gpu.requestAdapter();
      if (adapter) {
        state.device = 'webgpu';
        elements.hardwareLabel.textContent = 'WebGPU ⚡ (Ultra Fast)';
        elements.hardwarePill.classList.add('badge-success');
      } else {
        state.device = 'wasm';
        elements.hardwareLabel.textContent = 'WASM (CPU)';
      }
    } catch {
      state.device = 'wasm';
      elements.hardwareLabel.textContent = 'WASM (CPU)';
    }
  } else {
    state.device = 'wasm';
    elements.hardwareLabel.textContent = 'WASM (CPU)';
  }

  try {
    const workerUrl = new URL('./worker.js', import.meta.url);
    state.worker = new Worker(workerUrl, { type: 'module' });

    state.worker.onmessage = handleWorkerMessage;
    state.worker.onerror = (err) => {
      console.warn('Web Worker error, falling back to main thread...', err);
      state.worker = null;
    };

    // Pre-initialize RMBG-1.4 model
    state.worker.postMessage({ type: 'init', device: state.device });
  } catch (err) {
    console.warn('Web Worker could not be instantiated, using main thread fallback.', err);
    state.worker = null;
  }
}

// --- 8. Worker Message Handler ---
function handleWorkerMessage(e) {
  const { type, id, status, message, data, maskData, maskWidth, maskHeight, originalWidth, originalHeight, error, device } = e.data;

  if (device) {
    state.device = device;
    elements.hardwareLabel.textContent = device === 'webgpu' ? 'WebGPU ⚡ (Ultra Fast)' : 'WASM (CPU)';
  }

  if (type === 'progress') {
    handleProgressUpdate(data);
  } else if (type === 'status') {
    if (status === 'init' || status === 'fallback') {
      elements.progressSection.classList.remove('hidden');
      elements.progressTitle.textContent = message;
    } else if (status === 'ready') {
      elements.progressSection.classList.add('hidden');
      showToast(translations[state.lang].toastModelLoaded, 'success');
    } else if (status === 'inferring') {
      elements.progressSection.classList.remove('hidden');
      elements.progressTitle.textContent = translations[state.lang].statusExtracting;
      elements.progressSubtitle.textContent = message || '';
      elements.progressFill.style.width = '100%';
      elements.progressPercentage.textContent = '99%';
    }
  } else if (type === 'result') {
    handleInferenceComplete(id, maskData, maskWidth, maskHeight, originalWidth, originalHeight);
  } else if (type === 'error') {
    handleInferenceError(id, error);
  }
}

// --- 9. Progress Update Helper ---
function handleProgressUpdate(progressData) {
  if (!progressData) return;
  elements.progressSection.classList.remove('hidden');

  const { status, progress, loaded, total, file } = progressData;

  if (status === 'progress' && total > 0) {
    const percent = Math.min(100, Math.round(progress || (loaded / total) * 100));
    elements.progressFill.style.width = `${percent}%`;
    elements.progressPercentage.textContent = `${percent}%`;

    const loadedMB = (loaded / (1024 * 1024)).toFixed(1);
    const totalMB = (total / (1024 * 1024)).toFixed(1);
    elements.progressBytes.textContent = `${loadedMB} MB / ${totalMB} MB`;

    const fileName = file ? file.split('/').pop() : 'model_quantized.onnx';
    elements.progressTitle.textContent = translations[state.lang].loadingModelTitle;
    elements.progressSubtitle.textContent = `[${fileName}] - ${percent}%`;
  } else if (status === 'done') {
    elements.progressFill.style.width = '100%';
    elements.progressPercentage.textContent = '100%';
  }
}

// --- 10. Main Thread AI Fallback Execution ---
async function runMainThreadPipeline(item) {
  try {
    elements.progressSection.classList.remove('hidden');
    elements.progressTitle.textContent = translations[state.lang].loadingModelTitle;

    const { AutoModel, AutoProcessor, RawImage, env } = await import('https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.3.3');
    env.allowLocalModels = false;

    if (!state.mainThreadProcessor) {
      state.mainThreadProcessor = await AutoProcessor.from_pretrained('briaai/RMBG-1.4', {
        progress_callback: (prog) => handleProgressUpdate(prog)
      });
    }

    if (!state.mainThreadModel) {
      state.mainThreadModel = await AutoModel.from_pretrained('briaai/RMBG-1.4', {
        device: state.device,
        config: { model_type: 'custom' },
        progress_callback: (prog) => handleProgressUpdate(prog)
      });
    }

    elements.progressTitle.textContent = translations[state.lang].statusExtracting;
    elements.progressFill.style.width = '99%';
    elements.progressPercentage.textContent = '99%';

    const rawImage = await RawImage.read(item.file);
    const { pixel_values } = await state.mainThreadProcessor(rawImage);
    const { output } = await state.mainThreadModel({ input: pixel_values });

    const tensorData = output.data;
    const maskData = new Uint8ClampedArray(1024 * 1024);
    for (let i = 0; i < tensorData.length; i++) {
      maskData[i] = Math.round(Math.max(0, Math.min(1, tensorData[i])) * 255);
    }

    handleInferenceComplete(
      item.id,
      maskData.buffer,
      1024,
      1024,
      rawImage.width,
      rawImage.height
    );
  } catch (err) {
    console.error('Main thread inference error:', err);
    handleInferenceError(item.id, err.message);
  }
}

// --- 11. Compose Alpha Mask with Original Image Pixels ---
function composeAlphaMask(origImg, maskBuffer, maskWidth, maskHeight, originalWidth, originalHeight) {
  // 1. Create a 1024x1024 mask canvas
  const maskCanvas = document.createElement('canvas');
  maskCanvas.width = maskWidth;
  maskCanvas.height = maskHeight;
  const maskCtx = maskCanvas.getContext('2d');
  const maskImgData = maskCtx.createImageData(maskWidth, maskHeight);

  const maskArray = new Uint8ClampedArray(maskBuffer);
  const d = maskImgData.data;
  for (let i = 0; i < maskArray.length; i++) {
    const idx = i * 4;
    d[idx] = 255;
    d[idx + 1] = 255;
    d[idx + 2] = 255;
    d[idx + 3] = maskArray[i]; // Alpha channel
  }
  maskCtx.putImageData(maskImgData, 0, 0);

  // 2. Create the final output canvas at exact original image dimensions
  const finalCanvas = document.createElement('canvas');
  finalCanvas.width = originalWidth;
  finalCanvas.height = originalHeight;
  const finalCtx = finalCanvas.getContext('2d');

  // Draw original image at native 1:1 resolution
  finalCtx.drawImage(origImg, 0, 0, originalWidth, originalHeight);

  // Mask original image using hardware-accelerated smooth bilinear interpolation
  finalCtx.globalCompositeOperation = 'destination-in';
  finalCtx.imageSmoothingEnabled = true;
  finalCtx.imageSmoothingQuality = 'high';
  finalCtx.drawImage(maskCanvas, 0, 0, originalWidth, originalHeight);

  // Reset composite operation
  finalCtx.globalCompositeOperation = 'source-over';

  return finalCanvas;
}

// --- 12. Inference Completion Handler ---
async function handleInferenceComplete(id, maskData, maskWidth, maskHeight, originalWidth, originalHeight) {
  elements.progressSection.classList.add('hidden');
  state.isProcessing = false;

  const item = state.queue.find((q) => q.id === id);
  if (!item) return;

  try {
    const origImg = new Image();
    origImg.src = item.origUrl;
    await new Promise((resolve, reject) => {
      origImg.onload = resolve;
      origImg.onerror = reject;
    });

    const composedCanvas = composeAlphaMask(
      origImg,
      maskData,
      maskWidth,
      maskHeight,
      originalWidth,
      originalHeight
    );

    composedCanvas.toBlob((blob) => {
      if (!blob) throw new Error('Could not generate PNG blob');

      item.resultBlob = blob;
      item.resultUrl = URL.createObjectURL(blob);
      item.width = originalWidth;
      item.height = originalHeight;
      item.status = 'completed';

      updateQueueUI();

      if (state.activeItemId === id) {
        displayActiveItem(item);
      }

      showToast(translations[state.lang].statusComplete, 'success');
      processNextQueueItem();
    }, 'image/png');
  } catch (err) {
    handleInferenceError(id, err.message);
  }
}

function handleInferenceError(id, error) {
  elements.progressSection.classList.add('hidden');
  state.isProcessing = false;

  const item = state.queue.find((q) => q.id === id);
  if (item) {
    item.status = 'error';
    updateQueueUI();
  }

  showToast(`${translations[state.lang].toastError}: ${error}`, 'error');
  processNextQueueItem();
}

// --- 13. Queue & Batch Processing Logic ---
function addFilesToQueue(files) {
  if (!files || files.length === 0) return;

  const newItems = Array.from(files).filter(f => f.type.startsWith('image/')).map((file) => ({
    id: `img_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
    file,
    name: file.name,
    size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
    origUrl: URL.createObjectURL(file),
    resultBlob: null,
    resultUrl: null,
    width: 0,
    height: 0,
    status: 'pending'
  }));

  if (newItems.length === 0) return;

  state.queue.push(...newItems);
  if (!state.activeItemId) {
    state.activeItemId = newItems[0].id;
  }

  elements.queueSection.classList.remove('hidden');
  updateQueueUI();

  if (!state.isProcessing) {
    processNextQueueItem();
  }
}

function processNextQueueItem() {
  if (state.isProcessing) return;

  const nextItem = state.queue.find((q) => q.status === 'pending');
  if (!nextItem) {
    const hasCompleted = state.queue.some((q) => q.status === 'completed');
    elements.downloadAllZipBtn.disabled = !hasCompleted;
    return;
  }

  state.isProcessing = true;
  nextItem.status = 'processing';
  updateQueueUI();

  if (state.worker) {
    state.worker.postMessage({
      type: 'process',
      id: nextItem.id,
      blob: nextItem.file,
      device: state.device
    });
  } else {
    runMainThreadPipeline(nextItem);
  }
}

function updateQueueUI() {
  elements.queueCountBadge.textContent = state.queue.length;
  elements.queueList.innerHTML = '';

  state.queue.forEach((item) => {
    const queueCard = document.createElement('div');
    queueCard.className = `queue-item ${item.id === state.activeItemId ? 'active' : ''}`;

    let statusBadge = '';
    if (item.status === 'processing') {
      statusBadge = '<div class="queue-item-status-overlay">⚙️ جاري...</div>';
    } else if (item.status === 'completed') {
      statusBadge = '<div class="queue-item-status-overlay" style="background: rgba(16,185,129,0.7);">✓ تم</div>';
    } else if (item.status === 'error') {
      statusBadge = '<div class="queue-item-status-overlay" style="background: rgba(239,68,68,0.7);">✗ خطأ</div>';
    }

    queueCard.innerHTML = `
      <div class="queue-item-thumb-box">
        <img class="queue-item-thumb" src="${item.resultUrl || item.origUrl}" alt="${item.name}">
        ${statusBadge}
      </div>
      <div class="queue-item-info">
        <div class="queue-item-name" title="${item.name}">${item.name}</div>
        <div class="queue-item-footer">
          <span>${item.size}</span>
          <button type="button" class="queue-remove-btn" data-id="${item.id}" title="حذف">✕</button>
        </div>
      </div>
    `;

    queueCard.addEventListener('click', (e) => {
      if (e.target.classList.contains('queue-remove-btn')) {
        e.stopPropagation();
        removeQueueItem(item.id);
        return;
      }
      state.activeItemId = item.id;
      updateQueueUI();
      displayActiveItem(item);
    });

    elements.queueList.appendChild(queueCard);
  });

  const hasCompleted = state.queue.some((q) => q.status === 'completed');
  elements.downloadAllZipBtn.disabled = !hasCompleted;
}

function removeQueueItem(id) {
  const index = state.queue.findIndex((q) => q.id === id);
  if (index !== -1) {
    const item = state.queue[index];
    if (item.origUrl) URL.revokeObjectURL(item.origUrl);
    if (item.resultUrl) URL.revokeObjectURL(item.resultUrl);
    state.queue.splice(index, 1);
  }

  if (state.activeItemId === id) {
    state.activeItemId = state.queue.length > 0 ? state.queue[0].id : null;
  }

  if (state.queue.length === 0) {
    elements.queueSection.classList.add('hidden');
    elements.workspaceSection.classList.add('hidden');
  } else {
    updateQueueUI();
    const active = state.queue.find((q) => q.id === state.activeItemId);
    if (active) displayActiveItem(active);
  }
}

// --- 14. Workspace Display & Interactive Preview ---
function displayActiveItem(item) {
  elements.workspaceSection.classList.remove('hidden');

  elements.beforeImg.src = item.origUrl;
  elements.dualBeforeImg.src = item.origUrl;

  if (item.resultUrl) {
    elements.afterImg.src = item.resultUrl;
    elements.dualAfterImg.src = item.resultUrl;
    elements.singleImg.src = item.resultUrl;
    elements.downloadTransparentBtn.disabled = false;
    elements.downloadWithBgBtn.disabled = false;
  } else {
    elements.afterImg.src = item.origUrl;
    elements.dualAfterImg.src = item.origUrl;
    elements.singleImg.src = item.origUrl;
    elements.downloadTransparentBtn.disabled = true;
    elements.downloadWithBgBtn.disabled = true;
  }

  if (item.width && item.height) {
    elements.metaDimensions.textContent = `${item.width} × ${item.height} px`;
  } else {
    elements.metaDimensions.textContent = `جاري القياس...`;
  }
  elements.metaFileSize.textContent = item.size;

  setZoom(100);
  applyBackgroundPreset(state.currentBgType, state.currentColor, state.currentGradient);
  updateSplitSlider(state.splitPosition);
}

// --- 15. Interactive Split Slider Engine ---
function updateSplitSlider(posPercentage) {
  state.splitPosition = Math.max(0, Math.min(100, posPercentage));
  const pos = `${state.splitPosition}%`;

  elements.comparisonContainer.style.setProperty('--split-pos', pos);
  elements.sliderHandle.style.left = pos;
  elements.afterLayer.style.clipPath = `inset(0 0 0 ${pos})`;
}

let isDragging = false;

function handleSliderMove(clientX) {
  const rect = elements.comparisonContainer.getBoundingClientRect();
  if (rect.width === 0) return;

  let x = clientX - rect.left;
  let percent = (x / rect.width) * 100;
  updateSplitSlider(percent);
}

function initSliderEvents() {
  const container = elements.comparisonContainer;

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    handleSliderMove(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    handleSliderMove(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  container.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      isDragging = true;
      handleSliderMove(e.touches[0].clientX);
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length === 0) return;
    handleSliderMove(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

// --- 16. View Switcher ---
function setViewMode(view) {
  state.currentView = view;

  document.querySelectorAll('.segment-btn').forEach((b) => {
    b.classList.toggle('active', b.getAttribute('data-view') === view);
  });

  elements.splitStageWrap.classList.add('hidden');
  elements.dualStageWrap.classList.add('hidden');
  elements.singleStageWrap.classList.add('hidden');

  const activeItem = state.queue.find((q) => q.id === state.activeItemId);

  if (view === 'split') {
    elements.splitStageWrap.classList.remove('hidden');
  } else if (view === 'sideBySide') {
    elements.dualStageWrap.classList.remove('hidden');
  } else if (view === 'resultOnly') {
    elements.singleStageWrap.classList.remove('hidden');
    elements.singleImg.src = activeItem && activeItem.resultUrl ? activeItem.resultUrl : (activeItem ? activeItem.origUrl : '');
  } else if (view === 'originalOnly') {
    elements.singleStageWrap.classList.remove('hidden');
    elements.singleImg.src = activeItem ? activeItem.origUrl : '';
  }
}

// --- 17. Zoom Controls ---
function setZoom(level) {
  state.zoomLevel = Math.max(50, Math.min(400, level));
  elements.zoomLevelText.textContent = `${state.zoomLevel}%`;

  const scale = state.zoomLevel / 100;
  elements.beforeImg.style.transform = `scale(${scale})`;
  elements.afterImg.style.transform = `scale(${scale})`;
  elements.dualBeforeImg.style.transform = `scale(${scale})`;
  elements.dualAfterImg.style.transform = `scale(${scale})`;
  elements.singleImg.style.transform = `scale(${scale})`;
}

// --- 18. Background Switcher & Canvas Composition ---
function applyBackgroundPreset(type, color, gradient) {
  state.currentBgType = type;
  if (color) state.currentColor = color;
  if (gradient) state.currentGradient = gradient;

  const surfaces = [elements.customBgSurface, elements.dualBgSurface, elements.singleBgSurface];

  surfaces.forEach((surf) => {
    if (!surf) return;
    surf.className = 'custom-bg-surface';
    surf.style.backgroundColor = '';
    surf.style.background = '';

    if (type === 'checker') {
      surf.classList.add('bg-checker');
    } else if (type === 'checker-dark') {
      surf.classList.add('bg-checker-dark');
    } else if (type === 'color') {
      surf.style.backgroundColor = state.currentColor;
    } else if (type === 'gradient') {
      surf.style.background = state.currentGradient;
    }
  });

  elements.bgChips.forEach((chip) => {
    const chipType = chip.getAttribute('data-bg-type');
    const chipColor = chip.getAttribute('data-color');
    const chipGrad = chip.getAttribute('data-gradient');

    let isActive = false;
    if (chipType === 'color' && type === 'color' && chipColor === state.currentColor) {
      isActive = true;
    } else if (chipType === 'gradient' && type === 'gradient' && chipGrad === state.currentGradient) {
      isActive = true;
    } else if (chipType === type && type.startsWith('checker')) {
      isActive = true;
    }

    chip.classList.toggle('active', isActive);
  });
}

// --- 19. Download & Export Functions ---
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function handleDownloadTransparent() {
  const item = state.queue.find((q) => q.id === state.activeItemId);
  if (!item || !item.resultBlob) return;

  const originalBase = item.name.substring(0, item.name.lastIndexOf('.')) || item.name;
  downloadBlob(item.resultBlob, `${originalBase}_khalfyati_nobg.png`);
}

async function handleDownloadWithBg() {
  const item = state.queue.find((q) => q.id === state.activeItemId);
  if (!item || !item.resultUrl) return;

  const canvas = elements.offscreenCanvas;
  canvas.width = item.width;
  canvas.height = item.height;
  const ctx = canvas.getContext('2d');

  if (state.currentBgType === 'color') {
    ctx.fillStyle = state.currentColor;
    ctx.fillRect(0, 0, item.width, item.height);
  } else if (state.currentBgType === 'gradient') {
    const grad = ctx.createLinearGradient(0, 0, item.width, item.height);
    grad.addColorStop(0, '#f093fb');
    grad.addColorStop(1, '#f5576c');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, item.width, item.height);
  } else {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, item.width, item.height);
  }

  const resImg = new Image();
  resImg.src = item.resultUrl;
  await new Promise((resolve) => { resImg.onload = resolve; });
  ctx.drawImage(resImg, 0, 0, item.width, item.height);

  canvas.toBlob((blob) => {
    const originalBase = item.name.substring(0, item.name.lastIndexOf('.')) || item.name;
    downloadBlob(blob, `${originalBase}_with_background.png`);
  }, 'image/png');
}

// Batch ZIP Download using JSZip
async function handleBatchZipDownload() {
  if (typeof JSZip === 'undefined') {
    showToast('JSZip library not available', 'error');
    return;
  }

  const completedItems = state.queue.filter((q) => q.status === 'completed' && q.resultBlob);
  if (completedItems.length === 0) return;

  showToast('جاري تجميع الملفات في أرشيف ZIP...', 'info');

  const zip = new JSZip();
  completedItems.forEach((item) => {
    const originalBase = item.name.substring(0, item.name.lastIndexOf('.')) || item.name;
    zip.file(`${originalBase}_nobg.png`, item.resultBlob);
  });

  const zipBlob = await zip.generateAsync({ type: 'blob' });
  downloadBlob(zipBlob, `khalfyati_cutouts_${Date.now()}.zip`);
  showToast(translations[state.lang].toastZipReady, 'success');
}

// --- 20. Sample Images Provider ---
async function loadSampleImage(sampleType) {
  const sampleUrls = {
    portrait: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    product: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    car: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    pet: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80'
  };

  const targetUrl = sampleUrls[sampleType] || sampleUrls.portrait;

  try {
    showToast('جاري جلب الصورة التجريبية...', 'info');
    const res = await fetch(targetUrl);
    const blob = await res.blob();
    const file = new File([blob], `sample_${sampleType}.jpg`, { type: 'image/jpeg' });
    addFilesToQueue([file]);
  } catch (err) {
    console.error('Sample image fetch failed:', err);
    showToast('تعذر تحميل الصورة التجريبية عبر الإنترنت، يرجى اختيار صورة من جهازك.', 'error');
  }
}

// --- 21. Event Listeners Initialization ---
function initEventListeners() {
  elements.langToggleBtn.addEventListener('click', () => {
    setLanguage(state.lang === 'ar' ? 'en' : 'ar');
  });

  elements.themeToggleBtn.addEventListener('click', () => {
    setTheme(state.theme === 'dark' ? 'light' : 'dark');
  });

  elements.browseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    elements.fileInput.click();
  });

  elements.dropzone.addEventListener('click', () => {
    elements.fileInput.click();
  });

  elements.fileInput.addEventListener('change', (e) => {
    addFilesToQueue(e.target.files);
    elements.fileInput.value = '';
  });

  ['dragenter', 'dragover'].forEach((eventName) => {
    elements.dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      elements.dropzone.classList.add('drag-active');
    });
  });

  ['dragleave', 'drop'].forEach((eventName) => {
    elements.dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      elements.dropzone.classList.remove('drag-active');
    });
  });

  elements.dropzone.addEventListener('drop', (e) => {
    if (e.dataTransfer && e.dataTransfer.files) {
      addFilesToQueue(e.dataTransfer.files);
    }
  });

  window.addEventListener('paste', (e) => {
    const items = (e.clipboardData || e.originalEvent.clipboardData).items;
    const pastedFiles = [];
    for (let item of items) {
      if (item.type.indexOf('image') !== -1) {
        const file = item.getAsFile();
        if (file) pastedFiles.push(file);
      }
    }
    if (pastedFiles.length > 0) {
      addFilesToQueue(pastedFiles);
      showToast(translations[state.lang].toastCopiedPasted, 'success');
    }
  });

  elements.sampleButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const sample = btn.getAttribute('data-sample');
      loadSampleImage(sample);
    });
  });

  elements.downloadAllZipBtn.addEventListener('click', handleBatchZipDownload);
  elements.clearQueueBtn.addEventListener('click', () => {
    state.queue.forEach((q) => {
      if (q.origUrl) URL.revokeObjectURL(q.origUrl);
      if (q.resultUrl) URL.revokeObjectURL(q.resultUrl);
    });
    state.queue = [];
    state.activeItemId = null;
    elements.queueSection.classList.add('hidden');
    elements.workspaceSection.classList.add('hidden');
  });

  elements.viewModeGroup.addEventListener('click', (e) => {
    const btn = e.target.closest('.segment-btn');
    if (!btn) return;
    const view = btn.getAttribute('data-view');
    setViewMode(view);
  });

  elements.zoomInBtn.addEventListener('click', () => setZoom(state.zoomLevel + 25));
  elements.zoomOutBtn.addEventListener('click', () => setZoom(state.zoomLevel - 25));
  elements.zoomResetBtn.addEventListener('click', () => setZoom(100));

  elements.bgChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const type = chip.getAttribute('data-bg-type');
      const color = chip.getAttribute('data-color');
      const grad = chip.getAttribute('data-gradient');
      applyBackgroundPreset(type, color, grad);
    });
  });

  elements.customColorInput.addEventListener('input', (e) => {
    applyBackgroundPreset('color', e.target.value);
  });

  elements.downloadTransparentBtn.addEventListener('click', handleDownloadTransparent);
  elements.downloadWithBgBtn.addEventListener('click', handleDownloadWithBg);
  elements.newImageBtn.addEventListener('click', () => {
    elements.fileInput.click();
  });

  initSliderEvents();
}

// --- 22. App Initialization ---
window.addEventListener('DOMContentLoaded', () => {
  setTheme(state.theme);
  setLanguage(state.lang);
  initEventListeners();
  initHardwareAndWorker();
});
