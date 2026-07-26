# 🎬 W - Watch

> تطبيق ويب تقدمي (PWA) لمشاهدة الأفلام والمسلسلات - يعمل بدون إنترنت!

[![PWA](https://img.shields.io/badge/PWA-Ready-success?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue?style=flat-square)](https://pages.github.com)

---

## 📁 هيكل المشروع

```
w/
├── index.html          # الصفحة الرئيسية
├── style.css           # التنسيقات
├── app.js              # المنطق البرمجي
├── manifest.json       # إعدادات PWA
├── sw.js               # Service Worker (العمل بدون إنترنت)
├── icon-192.png        # أيقونة التطبيق (192x192)
├── icon-512.png        # أيقونة التطبيق (512x512)
└── README.md           # هذا الملف
```

---

## 🚀 خطوات الرفع على GitHub Pages

### 1. إنشاء المستودع (Repository)

```bash
# على جهازك، أنشئ مجلد المشروع
mkdir w

# انسخ جميع الملفات إلى المجلد
# (index.html, style.css, app.js, manifest.json, sw.js, icons...)

# تهيئة Git
cd w
git init

# إضافة الملفات
git add .

# أول commit
git commit -m "Initial commit - W Watch PWA"
```

### 2. رفع المستودع على GitHub

```bash
# أنشئ مستودعاً فارغاً على GitHub باسم "w"
# ثم اربطه:
git remote add origin https://github.com/YOUR_USERNAME/w.git
git branch -M main
git push -u origin main
```

### 3. تفعيل GitHub Pages

1. افتح المستودع على GitHub
2. اذهب إلى **Settings** → **Pages**
3. في قسم **Source** اختر **Deploy from a branch**
4. اختر الفرع **main** والمجلد **/(root)**
5. اضغط **Save**
6. انتظر 1-2 دقيقة ثم افتح الرابط:
   ```
   https://YOUR_USERNAME.github.io/w/
   ```

---

## 🎨 الأيقونات (مهمة جداً!)

يجب إضافة أيقونات بأحجام محددة. يمكنك إنشاؤها من أي صورة عبر:

### الطريقة 1: موقع Favicon Generator
1. اذهب إلى [favicon.io](https://favicon.io/) أو [realfavicongenerator.net](https://realfavicongenerator.net/)
2. ارفع صورة شعار W
3. حمّل الملفات واستبدل `icon-*.png`

### الطريقة 2: يدوياً باستخدام Python
```python
from PIL import Image

img = Image.open('logo.png')
sizes = [72, 96, 128, 144, 152, 192, 384, 512]
for size in sizes:
    img.resize((size, size), Image.LANCZOS).save(f'icon-{size}.png')
```

**الأحجام المطلوبة:**
- `icon-72.png` - شريط الإشعارات
- `icon-96.png` - اختصارات Android
- `icon-128.png` - Chrome Web Store
- `icon-144.png` - شاشة البداية Microsoft
- `icon-152.png` - iPad
- `icon-192.png` - شاشة البداية Android
- `icon-384.png` - شاشة البداية Android
- `icon-512.png` - شاشة البداية + متجر

---

## ⚙️ تخصيص الـ manifest.json

افتح `manifest.json` وعدّل هذه القيم حسب احتياجك:

```json
{
  "name": "W - Watch",           // اسم التطبيق الكامل
  "short_name": "W",             // الاسم المختصر (للشاشة الرئيسية)
  "description": "...",          // الوصف
  "start_url": "/w/",            // المسار عند فتح التطبيق
  "scope": "/w/"                  // نطاق التطبيق
}
```

> ⚠️ **مهم:** إذا غيّرت اسم المستودع من `w` إلى اسم آخر، عدّل `start_url` و `scope` في `manifest.json` و `sw.js`.

---

## 📱 كيفية التثبيت على الجوال

### Android (Chrome):
1. افتح الموقع في Chrome
2. اضغط **القائمة ⋮** → **إضافة إلى الشاشة الرئيسية**
3. اضغط **تثبيت**

### iOS (Safari):
1. افتح الموقع في Safari
2. اضغط **زر المشاركة ⬆️**
3. اختر **إضافة إلى الشاشة الرئيسية**

### Samsung Internet:
1. افتح الموقع
2. اضغط **القائمة ☰** → **إضافة صفحة إلى** → **الشاشة الرئيسية**

---

## 🔧 تخصيصات إضافية

### تغيير اسم المستودع
إذا أردت اسم مستودع مختلف (مثل `w-watch` بدلاً من `w`):

1. غيّر اسم المستودع على GitHub
2. عدّل هذه الأسطر في الملفات:

**manifest.json:**
```json
"start_url": "/w-watch/",
"scope": "/w-watch/"
```

**sw.js:**
```javascript
const STATIC_ASSETS = [
  '/w-watch/',
  '/w-watch/index.html',
  // ...
];
```

**index.html:**
```html
<link rel="manifest" href="manifest.json">
```
(يُفضل استخدام مسارات نسبية `./` بدلاً من المطلقة)

---

## 🌐 استضافة بديلة

إذا أردت استضافة أخرى غير GitHub Pages:

| المنصة | الرابط | الميزة |
|--------|--------|--------|
| **Vercel** | [vercel.com](https://vercel.com) | سريع + HTTPS تلقائي |
| **Netlify** | [netlify.com](https://netlify.com) | سحب تلقائي من GitHub |
| **Firebase** | [firebase.google.com](https://firebase.google.com) | من Google |
| **Cloudflare Pages** | [pages.cloudflare.com](https://pages.cloudflare.com) | سريع جداً |

---

## 🛠️ الميزات الحالية

- ✅ واجهة سينمائية أنيقة (RTL)
- ✅ تصنيفات الأفلام (أكشن، دراما، كوميديا، رعب، خيال علمي)
- ✅ بحث فوري
- ✅ قائمة المفضلة (تُحفظ في المتصفح)
- ✅ مشغل فيديو توضيحي
- ✅ تفاصيل الفيلم (تقييم، سنة، مدة، بطولة)
- ✅ تصميم متجاوب (موبايل + تابلت + ديسكتوب)
- ✅ PWA كامل (تثبيت على الشاشة الرئيسية)
- ✅ Service Worker (العمل بدون إنترنت)
- ✅ دعم اللمس والسحب

---

## 📜 الترخيص

هذا المشروع مفتوح المصدر. يمكنك استخدامه وتعديله كما تشاء.

---

<div align="center">
  <h3>🎬 W - Watch</h3>
  <p>صُنع بحب ❤️</p>
</div>
