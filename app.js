/* ===== W - Watch PWA App ===== */

const movies = [
  { id: 0, title: 'المستحيل: سقوط النظام', genre: 'action', rating: 9.2, year: 2024, duration: '2س 43د', match: 98, emoji: '🎬', mature: 'PG-13', desc: 'إيثان هانت يواجه أخطر تهديد في مسيرته. يجب عليه وفريقه منع سلاح نووي من الوقوع في أيدي تنظيم سرّي يهدد استقرار العالم بأسره.', tags: ['أكشن','مغامرة','إثارة'], cast: 'توم كروز، هايلي أتويل، فانيسا كيربي', top: true },
  { id: 1, title: 'أوبنهايمر', genre: 'drama', rating: 9.0, year: 2023, duration: '3س 00د', match: 95, emoji: '☢️', mature: 'R', desc: 'قصة ج. روبرت أوبنهايمر، الفيزيائي الذي قاد مشروع مانهاتن لتطوير القنبلة الذرية خلال الحرب العالمية الثانية.', tags: ['دراما','تاريخي','سيرة ذاتية'], cast: 'كيليان مورفي، إميلي بلنت، روبرت داوني جونيور', top: true },
  { id: 2, title: 'باربي', genre: 'comedy', rating: 8.5, year: 2023, duration: '1س 54د', match: 88, emoji: '👱‍♀️', mature: 'PG-13', desc: 'تنتقل باربي من عالمها المثالي إلى العالم الحقيقي لتكتشف معنى الحياة الحقيقية والتحديات التي تواجهها.', tags: ['كوميديا','موسيقى','عائلي'], cast: 'مارغوت روبي، ريان غوسلينغ', top: true },
  { id: 3, title: 'كونغ ضد غودزيلا', genre: 'action', rating: 7.8, year: 2024, duration: '1س 55د', match: 85, emoji: '🦍', mature: 'PG-13', desc: 'مواجهة ملحمية بين الملك كونغ والملك غودزيلا في معركة تهدد وجود البشرية.', tags: ['أكشن','خيال علمي','مغامرة'], cast: 'ريبيكا هول، بريان تيري هنري', top: true },
  { id: 4, title: 'الفيل الأزرق 2', genre: 'drama', rating: 8.3, year: 2019, duration: '2س 10د', match: 92, emoji: '🐘', mature: 'R', desc: 'يحيى يعود إلى عيادته النفسية لمواجهة ماضيه المظلم وعلاقته المعقدة مع شيرين في إطار نفسي مثير.', tags: ['دراما','إثارة','نفسي'], cast: 'كريم عبد العزيز، كندة علوش، إياد نصار', top: true },
  { id: 5, title: 'إنترستيلار', genre: 'scifi', rating: 9.3, year: 2014, duration: '2س 49د', match: 97, emoji: '🚀', mature: 'PG-13', desc: 'فريق من رواد الفضاء يسافر عبر ثقب دودي بحثاً عن كوكب صالح للحياة لإنقاذ البشرية من المجاعة.', tags: ['خيال علمي','مغامرة','دراما'], cast: 'ماثيو ماكونهي، آن هاثاوي، جيسيكا تشاستاين', top: true },
  { id: 6, title: 'ذا نون 2', genre: 'horror', rating: 7.2, year: 2023, duration: '1س 50د', match: 78, emoji: '👻', mature: 'R', desc: 'الراهبة إيرين تواجه شيطاناً قديماً في دير منعزل في رومانيا في رحلة رعب ملحمية.', tags: ['رعب','غموض','إثارة'], cast: 'تايسا فارميغا، ستورم ريد', top: false },
  { id: 7, title: 'سبايدرمان: عبر الأكوان', genre: 'action', rating: 9.1, year: 2023, duration: '2س 20د', match: 96, emoji: '🕷️', mature: 'PG', desc: 'مايلز موراليس يسافر عبر الأكوان الموازية ويلتقي بعنكبوتات من عوالم مختلفة في مغامرة رسوم متحركة مذهلة.', tags: ['أكشن','رسوم متحركة','مغامرة'], cast: 'شاميك مور، هايلي ستاينفيلد', top: false },
  { id: 8, title: 'الممر', genre: 'drama', rating: 8.7, year: 2019, duration: '2س 30د', match: 94, emoji: '⚔️', mature: 'R', desc: 'قصة حقيقية عن بطولات الجيش المصري في حرب الاستنزاف على جبهة قناة السويس.', tags: ['دراما','حرب','تاريخي'], cast: 'أحمد عز، أحمد فلوكس، هند صبري', top: false },
  { id: 9, title: 'دنيا سمارة', genre: 'comedy', rating: 7.5, year: 2023, duration: '1س 45د', match: 82, emoji: '🎭', mature: 'PG', desc: 'رحلة كوميدية مليئة بالمفاجآت والمواقف الطريفة في إطار اجتماعي مصري.', tags: ['كوميديا','اجتماعي'], cast: 'محمد هنيدي، دينا الشربيني', top: false },
  { id: 10, title: 'الكونتاجيون', genre: 'scifi', rating: 8.1, year: 2011, duration: '1س 46د', match: 89, emoji: '🦠', mature: 'PG-13', desc: 'انتشار فيروس قاتل حول العالم ومحاولات العلماء إيجاد لقاح قبل فوات الأوان.', tags: ['خيال علمي','إثارة','كوارث'], cast: 'ماريون كوتيار، مات ديمون', top: false },
  { id: 11, title: 'الجزيرة 2', genre: 'action', rating: 8.0, year: 2014, duration: '2س 05د', match: 87, emoji: '🏝️', mature: 'R', desc: 'استكمال للأحداث المثيرة في جزيرة الغموض والمؤامرات.', tags: ['أكشن','إثارة','مغامرة'], cast: 'أحمد السقا، هند صبري، خالد صالح', top: false },
  { id: 12, title: 'ذا باتمان', genre: 'action', rating: 8.8, year: 2022, duration: '2س 56د', match: 93, emoji: '🦇', mature: 'PG-13', desc: 'بروس واين في بداياته كبطل خارق يواجه القاتل الملقب بالمهرج في مدينة غوثام المظلمة.', tags: ['أكشن','جريمة','غموض'], cast: 'روبرت باتينسون، زوي كرافيتز', top: false },
  { id: 13, title: '1917', genre: 'drama', rating: 8.4, year: 2019, duration: '1س 59د', match: 91, emoji: '🎖️', mature: 'R', desc: 'جنديان بريطانيان يتلقيان مهمة مستحيلة لعبور خطوط العدو وإيصال رسالة تنقذ 1600 جندي.', tags: ['دراما','حرب','تاريخي'], cast: 'جورج ماكاي، دين تشارلز تشابمان', top: false },
  { id: 14, title: 'دونكيرك', genre: 'drama', rating: 8.5, year: 2017, duration: '1س 46د', match: 90, emoji: '⚓', mature: 'PG-13', desc: 'إجلاء آلاف الجنود المحاصرين على شواطئ دونكيرك خلال الحرب العالمية الثانية.', tags: ['دراما','حرب','تاريخي'], cast: 'فيون وايتهيد، توم هاردي', top: false },
  { id: 15, title: 'بليد رانر 2049', genre: 'scifi', rating: 8.5, year: 2017, duration: '2س 44د', match: 89, emoji: '🤖', mature: 'R', desc: 'ضابط شرطة يكتشف سراً مدفوناً يهدد بإحداث فوضى في المجتمع ويؤدي إلى حرب بين البشر والمستنسخين.', tags: ['خيال علمي','إثارة','غموض'], cast: 'ريان غوسلينغ، هاريسون فورد', top: false },
];

let myList = JSON.parse(localStorage.getItem('w_mylist') || '[]');
let currentMovie = null;
let deferredPrompt = null;

/* ===== RENDER FUNCTIONS ===== */
function getTopMovies() {
  return movies.filter(m => m.top).sort((a, b) => b.rating - a.rating);
}

function getByGenre(g) {
  return movies.filter(m => m.genre === g);
}

function renderTopCarousel() {
  const container = document.getElementById('topCarousel');
  const top = getTopMovies();
  container.innerHTML = top.map((m, i) => `
    <div class="top-card" onclick="openModal(${m.id})">
      <div class="top-number">${i + 1}</div>
      <div class="top-poster">${m.emoji}</div>
    </div>
  `).join('');
}

function renderCarousel(id, list) {
  const container = document.getElementById(id);
  if (list.length === 0) {
    container.innerHTML = '<div class="no-results">لا يوجد محتوى في هذا القسم</div>';
    return;
  }
  container.innerHTML = list.map(m => `
    <div class="movie-card" onclick="openModal(${m.id})">
      <div class="card-poster">
        ${m.emoji}
        ${m.match >= 95 ? '<span class="card-badge top">TOP</span>' : ''}
        ${m.year >= 2024 ? '<span class="card-badge">جديد</span>' : ''}
        <div class="card-actions">
          <button class="card-btn play" onclick="event.stopPropagation(); openPlayer(${m.id})" aria-label="تشغيل">▶</button>
          <button class="card-btn" onclick="event.stopPropagation(); addToList(${m.id})" aria-label="إضافة للقائمة">+</button>
          <button class="card-btn" onclick="event.stopPropagation(); openModal(${m.id})" aria-label="تفاصيل">ℹ</button>
        </div>
      </div>
      <div class="card-info">
        <div class="card-title">${m.title}</div>
        <div class="card-meta">
          <span class="star">⭐</span>
          <span>${m.rating}</span>
          <span>•</span>
          <span>${m.year}</span>
          <span>•</span>
          <span>${m.duration}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function scrollCarousel(id, dir) {
  const el = document.getElementById(id);
  el.scrollBy({ left: dir * 500, behavior: 'smooth' });
}

/* ===== MODAL ===== */
function openModal(id) {
  currentMovie = movies.find(m => m.id === id);
  if (!currentMovie) return;

  document.getElementById('modalTitle').textContent = currentMovie.title;
  document.getElementById('modalHero').innerHTML = `
    <div style="font-size:100px">${currentMovie.emoji}</div>
    <div class="modal-play-btn" onclick="playFromModal()" role="button" aria-label="تشغيل">▶</div>
  `;
  document.getElementById('modalMeta').innerHTML = `
    <span class="match">${currentMovie.match}% تطابق</span>
    <span class="year">${currentMovie.year}</span>
    <span class="mature">${currentMovie.mature}</span>
    <span class="duration">${currentMovie.duration}</span>
    <span class="rating">⭐ ${currentMovie.rating}</span>
  `;
  document.getElementById('modalTags').innerHTML = currentMovie.tags
    .map(t => `<span class="modal-tag">${t}</span>`).join('');
  document.getElementById('modalDesc').textContent = currentMovie.desc;
  document.getElementById('modalCast').textContent = currentMovie.cast;

  const inList = myList.includes(id);
  document.getElementById('listBtn').innerHTML =
    `<span>${inList ? '✓' : '+'}</span> ${inList ? 'في قائمتي' : 'أضف للقائمة'}`;

  document.getElementById('movieModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('movieModal').classList.remove('active');
  document.body.style.overflow = '';
}

function playFromModal() {
  if (currentMovie) openPlayer(currentMovie.id);
}

/* ===== PLAYER ===== */
function openPlayer(id) {
  const m = movies.find(m => m.id === id);
  if (!m) return;
  document.getElementById('playerTitle').textContent = m.title;
  document.getElementById('playerOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePlayer() {
  document.getElementById('playerOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

/* ===== LIST ===== */
function toggleList() {
  if (!currentMovie) return;
  const idx = myList.indexOf(currentMovie.id);
  if (idx > -1) {
    myList.splice(idx, 1);
    document.getElementById('listBtn').innerHTML = '<span>+</span> أضف للقائمة';
  } else {
    myList.push(currentMovie.id);
    document.getElementById('listBtn').innerHTML = '<span>✓</span> في قائمتي';
  }
  localStorage.setItem('w_mylist', JSON.stringify(myList));
}

function addToList(id) {
  const idx = myList.indexOf(id);
  if (idx === -1) {
    myList.push(id);
    localStorage.setItem('w_mylist', JSON.stringify(myList));
    showToast('✅ أُضيف إلى قائمتك!');
  } else {
    myList.splice(idx, 1);
    localStorage.setItem('w_mylist', JSON.stringify(myList));
    showToast('🗑️ أُزيل من قائمتك');
  }
}

/* ===== SEARCH ===== */
function toggleSearch() {
  const overlay = document.getElementById('searchOverlay');
  overlay.classList.toggle('active');
  if (overlay.classList.contains('active')) {
    setTimeout(() => document.getElementById('searchInput').focus(), 100);
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
  }
}

function doSearch() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  const results = document.getElementById('searchResults');
  if (!q) { results.innerHTML = ''; return; }

  const found = movies.filter(m => m.title.toLowerCase().includes(q));
  results.innerHTML = found.map(m => `
    <div class="movie-card" style="width:100%" onclick="toggleSearch(); openModal(${m.id})">
      <div class="card-poster" style="height:200px;font-size:48px">
        ${m.emoji}
      </div>
      <div class="card-info">
        <div class="card-title">${m.title}</div>
        <div class="card-meta">
          <span class="star">⭐</span><span>${m.rating}</span>
          <span>•</span><span>${m.year}</span>
        </div>
      </div>
    </div>
  `).join('');

  if (found.length === 0) {
    results.innerHTML = '<div class="no-results">لا توجد نتائج</div>';
  }
}

/* ===== NAVIGATION ===== */
function setPage(page) {
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  event.target.classList.add('active');

  const hero = document.getElementById('heroSection');
  const sections = document.querySelectorAll('.carousel-container');
  const sectionTitles = document.querySelectorAll('.section-header');

  if (page === 'list') {
    const listMovies = movies.filter(m => myList.includes(m.id));
    hero.style.display = 'none';
    sections.forEach((s, i) => s.style.display = i === 1 ? 'block' : 'none');
    sectionTitles.forEach((t, i) => {
      if (i === 1) t.querySelector('.section-title').innerHTML = '<span class="icon">📋</span> قائمتي';
      t.style.display = i === 1 ? 'flex' : 'none';
    });
    renderCarousel('trendCarousel', listMovies);
  } else if (page === 'series') {
    hero.style.display = 'none';
    sections.forEach((s, i) => s.style.display = i === 1 ? 'block' : 'none');
    sectionTitles.forEach((t, i) => {
      if (i === 1) t.querySelector('.section-title').innerHTML = '<span class="icon">📺</span> المسلسلات (قريباً)';
      t.style.display = i === 1 ? 'flex' : 'none';
    });
    renderCarousel('trendCarousel', []);
  } else if (page === 'new') {
    hero.style.display = 'none';
    sections.forEach((s, i) => s.style.display = i === 1 ? 'block' : 'none');
    sectionTitles.forEach((t, i) => {
      if (i === 1) t.querySelector('.section-title').innerHTML = '<span class="icon">🆕</span> أحدث الإضافات';
      t.style.display = i === 1 ? 'flex' : 'none';
    });
    renderCarousel('trendCarousel', movies.filter(m => m.year >= 2023).sort((a, b) => b.year - a.year));
  } else if (page === 'movies') {
    hero.style.display = 'none';
    sections.forEach((s, i) => s.style.display = i === 1 ? 'block' : 'none');
    sectionTitles.forEach((t, i) => {
      if (i === 1) t.querySelector('.section-title').innerHTML = '<span class="icon">🎬</span> جميع الأفلام';
      t.style.display = i === 1 ? 'flex' : 'none';
    });
    renderCarousel('trendCarousel', movies.sort((a, b) => b.rating - a.rating));
  } else {
    hero.style.display = 'flex';
    sections.forEach(s => s.style.display = 'block');
    sectionTitles.forEach(t => t.style.display = 'flex');
    sectionTitles[1].querySelector('.section-title').innerHTML = '<span class="icon">🔥</span> trending الآن';
    initCarousels();
  }
}

/* ===== INIT ===== */
function initCarousels() {
  renderTopCarousel();
  renderCarousel('trendCarousel', movies.sort((a, b) => b.rating - a.rating));
  renderCarousel('actionCarousel', getByGenre('action'));
  renderCarousel('dramaCarousel', getByGenre('drama'));
  renderCarousel('scifiCarousel', getByGenre('scifi'));
}

/* ===== TOAST ===== */
function showToast(msg) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed; bottom: 100px; left: 50%; transform: translateX(-50%);
    background: var(--bg-card); color: var(--text-primary); padding: 14px 28px;
    border-radius: 12px; border: 1px solid var(--border); z-index: 5000;
    font-size: 14px; font-weight: 600; animation: fadeInUp 0.3s ease;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.5s'; }, 2000);
  setTimeout(() => toast.remove(), 2500);
}

/* ===== PWA INSTALL ===== */
function installPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choice => {
      if (choice.outcome === 'accepted') {
        showToast('🎉 تم تثبيت W بنجاح!');
      }
      deferredPrompt = null;
      dismissInstall();
    });
  }
}

function dismissInstall() {
  document.getElementById('installBanner').classList.remove('show');
  localStorage.setItem('w_install_dismissed', Date.now().toString());
}

function showInstallBanner() {
  if (localStorage.getItem('w_install_dismissed')) return;
  if (window.matchMedia('(display-mode: standalone)').matches) return;
  setTimeout(() => {
    document.getElementById('installBanner').classList.add('show');
  }, 3000);
}

/* ===== EVENT LISTENERS ===== */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal(); closePlayer();
    const s = document.getElementById('searchOverlay');
    if (s.classList.contains('active')) toggleSearch();
  }
});

document.getElementById('movieModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallBanner();
});

/* ===== SERVICE WORKER ===== */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('SW registered:', reg.scope))
      .catch(err => console.log('SW error:', err));
  });
}

/* ===== INIT APP ===== */
document.addEventListener('DOMContentLoaded', () => {
  initCarousels();
});
