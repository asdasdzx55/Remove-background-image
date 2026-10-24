# 🌟 خلفيتي AI | Khalfyati AI - Client-Side AI Background Remover

<p align="center">
  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80" alt="Khalfyati AI Preview" width="450" style="border-radius: 12px;"/>
</p>

<p align="center">
  <strong>تطبيق ويب متكامل واحترافي يعمل بالكامل داخل المتصفح (Client-Side AI) لإزالة وتفريغ خلفيات الصور بدقة فائقة دون الحاجة لأي سيرفر أو واجهة برمجة تطبيقات مدفوعة.</strong><br>
  <em>Production-ready, zero-backend, client-side AI image background removal powered by Transformers.js & RMBG-1.4 with WebGPU/WASM acceleration.</em>
</p>

---

## ⚡ المميزات الرئيسية (Key Features)

- **🔒 خصوصية مطلقة 100% (Zero Server / No Backend):**
  - لا يتم رفع أي صورة أو بكسل إلى أي خادم خارجي نهائياً.
  - جميع الحسابات الرياضية لنماذج الذكاء الاصطناعي تنفذ محلياً داخل جهاز المستخدم.
- **🧠 أحدث نموذج ذكاء اصطناعي مفتوح المصدر (`briaai/RMBG-1.4`):**
  - متفوق على Rembg و PhotoRoom في عزل خصلات الشعر الدقيقة، تفاصيل الوجوه، وانعكاسات المنتجات.
  - يستخدم أوزان ONNX المكممة (Quantized ~42MB) التي يتم تنزيلها لمرة واحدة وتخزينها في كاش المتصفح.
- **⚡ تسريع عتادي فائق (WebGPU ⚡ مع بديل تلقائي WASM CPU):**
  - دعم مباشر لـ WebGPU في Chrome و Edge و Safari، مع الانتقال السلس إلى WebAssembly في حال عدم توفر كرت الشاشة.
- **🎨 تجربة مستخدم عصرية وفاخرة (UI/UX):**
  - دعم كامل للغة العربية (RTL) واللغة الإنجليزية (LTR) مع تبديل فوري.
  - مظهر داكن (Dark Mode) ومظهر فاتح (Light Mode).
  - مساحة سحب وإفلات (Drag & Drop) مع دعم اللصق المباشر من الحافظة (`Ctrl + V`).
  - شريط تقدم تفاعلي يوضح نسبة التنزيل وحجم الملفات ونسبة العزل.
- **🎚️ معاينة تفاعلية متطورة (Interactive Split Slider):**
  - شريط مقارنة منزلق (Before / After) لمشاهدة الفرق المباشر.
  - أوضاع عرض متعددة: منزلق، جنباً إلى جنب، النتيجة فقط، الأصلية فقط.
  - إمكانية التكبير والتصغير (Zoom In / Out 50% - 400%).
- **🌈 خيارات خلفيات متعددة:**
  - شبكة شفافة قياسية (Checkered Pattern) وداكنة.
  - ألوان استوديو جاهزة (أبيض ناصع للمتاجر الإلكترونية، أسود فاحم، أزرق جوازات السفر، رمادي).
  - منتقي ألوان مخصص (Custom Hex Color Picker) وتدرجات لونية عصرية.
- **📦 معالجة دفعات الصور وتصدير ZIP (Batch Processing):**
  - إضافة عدة صور في نفس الوقت ومعالجتها بالتسلسل تلقائياً.
  - زر تنزيل جماعي مجمع في ملف مضغوط (`.zip`) باستخدام مكتبة JSZip المدمجة.
- **💾 تصدير فائق الدقة (Lossless PNG):**
  - الحفاظ التام على الأبعاد الأصلية والدقة الكاملة (Original Resolution).

---

## 📁 هيكلية المشروع (Project Structure)

```text
quirky-tesla/
├── index.html                   # واجهة المستخدم الرئيسية (HTML5 الدلالية، ثنائية اللغة)
├── style.css                    # نظام التصميم والمتغيرات وواجهة المقارنة المنزلقة
├── app.js                       # متحكم التطبيق الرئيسي والمنطق ومعالجة الصور
├── worker.js                    # Web Worker المعزول لتشغيل الذكاء الاصطناعي دون تجميد الواجهة
├── .nojekyll                    # تخطي معالجة Jekyll في استضافة GitHub Pages
├── .github/
│   └── workflows/
│       └── deploy.yml           # مسار عمل GitHub Actions للنشر الآلي على GitHub Pages
└── README.md                    # دليل التثبيت والنشر والتوثيق الشامل
```

---

## 🚀 دليل النشر على GitHub Pages (Step-by-Step GitHub Pages)

التطبيق مجهز بملف سير عمل أوتوماتيكي (`.github/workflows/deploy.yml`) بحيث يتم بناء ونشر الموقع فور رفع الكود إلى GitHub:

### الخطوة 1: تهيئة المستودع والرفع إلى حسابك
افتح موجه الأوامر (Terminal أو PowerShell) في مجلد المشروع ونفذ:

```bash
# 1. تهيئة مستودع Git والتأكد من الفرع الرئيسي
git checkout -B main

# 2. إضافة جميع الملفات
git add .

# 3. حفظ التغييرات (Commit)
git commit -m "feat: complete client-side AI background remover (RMBG-1.4)"

# 4. ربط المستودع بحسابك على GitHub (استبدل USERNAME و REPO_NAME ببياناتك)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# 5. رفع الكود
git push -u origin main
```

### الخطوة 2: تفعيل GitHub Pages
1. ادخل إلى صفحة مستودعك على GitHub.
2. اذهب إلى **Settings** ⚙️ ثم اختر **Pages** من القائمة الجانبية.
3. تحت قسم **Build and deployment**:
   - في خانة **Source** اختر: **GitHub Actions**.
4. انتظر حوالي 30 ثانية؛ سيقوم مسار العمل بنشر التطبيق وإعطائك رابطاً حياً مجانياً:
   `https://<USERNAME>.github.io/<REPO_NAME>/`

---

## 🌐 دليل الرفع على استضافة Hostinger (Shared Hosting / cPanel)

التطبيق عبارة عن ملفات ثابتة نقية (Static Web Files) بدون Node.js أو باكنج، لذا فهو متوافق 100% مع أرخص وأبسط خطط استضافة هوستنجر المشتركة.

### الطريقة الأولى: عبر مدير الملفات (File Manager)
1. سجل دخولك إلى لوحة تحكم هوستنجر (**hPanel**).
2. اختر موقعك ثم افتح **File Manager** (مدير الملفات).
3. ادخل إلى المجلد الرئيسي: `public_html` (أو مجلد نطاق فرعي مثل `subdomain/public_html`).
4. اضغط على أيقونة **Upload** (رفع) وارفع الملفات التالية:
   - `index.html`
   - `style.css`
   - `app.js`
   - `worker.js`
   - `.nojekyll` (اختياري)
5. توجه إلى اسم نطاقك في المتصفح (مثال: `https://yourdomain.com`) وستجد التطبيق يعمل مباشرة!

### الطريقة الثانية: عبر Git Deployment التلقائي في Hostinger
1. في لوحة **hPanel**، توجه إلى قسم **Advanced** -> **Git**.
2. في خانة **Repository**: أدخل رابط مستودعك على GitHub (مثل `https://github.com/USERNAME/REPO_NAME.git`).
3. في خانة **Branch**: اكتب `main`.
4. في خانة **Install Directory**: اختر `public_html`.
5. اضغط **Create** ثم **Deploy**.
6. في أي وقت تقوم فيه بـ `git push` لمستودعك، يمكنك الضغط على **Auto Deployment** في هوستنجر للتحديث التلقائي!

---

## 💻 التشغيل والمعاينة المحلية (Local Testing)

نظراً لأن التطبيق يستخدم تقنيات متقدمة مثل **Web Workers** و **ES Modules**، تتطلب المتصفحات تشغيله عبر بروتوكول `http://` أو `https://` بدلاً من فتح الملف كـ `file://` محلي.

يمكنك تشغيل خادم محلي خفيف بإحدى الطرق البسيطة التالية:

### باستخدام Python (متوفر عادة بشكل افتراضي):
```bash
python -m http.server 8000
```
ثم افتح: `http://localhost:8000`

### باستخدام Node.js:
```bash
npx serve .
```
أو عبر إضافة **Live Server** في محرر VS Code.

---

## 🛠️ تفاصيل المحرك التقني (Technical Engine)

| المكون | التقنية المستخدمة |
| :--- | :--- |
| **Model** | `briaai/RMBG-1.4` (State-of-the-Art open-source background removal) |
| **Runtime** | `@huggingface/transformers` (Transformers.js v3) |
| **Acceleration** | WebGPU (Primary) / ONNX Runtime WebAssembly (WASM fallback) |
| **Quantization** | 8-bit Quantized ONNX weights (~42MB total download) |
| **Storage** | IndexedDB / Browser Cache API (zero download on repeated visits) |
| **Language** | Vanilla ES6+ JavaScript, Native Canvas API, CSS3 Variables |
| **Batch Export** | JSZip (Client-side ZIP compression) |

---

## 📄 الترخيص (License)
هذا المشروع مفتوح المصدر ومتاح للاستخدام الشخصي والتجاري. نموذج RMBG-1.4 مقدم من شركة BRIA AI للأبحاث والاستخدام المفتوح.
