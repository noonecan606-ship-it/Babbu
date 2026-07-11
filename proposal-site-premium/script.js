/* =========================================================
   ✏️ EDIT ME — personalize the whole site from right here
   ========================================================= */
const CONFIG = {
  metSince: "2025-10-10T00:00:00", // ✏️ set this to your real October 10 — the year your journey began
  gallery: [
    { emoji: "🌅", cap: "That sunrise walk" },
    { emoji: "🍕", cap: "Terrible pizza, great night" },
    { emoji: "🎡", cap: "The ferris wheel" },
    { emoji: "🏖️", cap: "Beach day" },
    { emoji: "🎬", cap: "Movie marathon" },
    { emoji: "🌧️", cap: "Caught in the rain" },
    { emoji: "🎂", cap: "That birthday" },
    { emoji: "🚗", cap: "The long drive" },
  ],
  // ✏️ Our Journey — cards start as a mystery (just an emoji). Tap to unlock each memory.
  timeline: [
    { emoji: "❤️", title: "Our First Meeting", date: "October 10",
      text: "October 10...\nThe day everything changed.\nIt wasn't just another day.\nIt became the beginning of the most beautiful chapter of my life.\nThat was the day our journey started." },
    { emoji: "😊", title: "Your Beautiful Smile", date: "October 2025",
      text: "The first time you smiled at me, I didn't realize that one smile would stay in my heart forever.\n\nSince then, your smile has become my favorite place." },
    { emoji: "💬", title: "Our First Conversation", date: "October 2025",
      text: "Our conversations started on WhatsApp and Snapchat.\n\nSlowly, one message became hundreds. Then thousands.\n\nWithout realizing it, talking to you became the best part of every single day." },
    { emoji: "📷", title: "Our First Picture", date: "November 2025", isPhoto: true,
      text: "This was one of our favorite memories.\n\nI will add our picture later." },
    { emoji: "🎁", title: "Your Beautiful Gift", date: "December 2025",
      text: "The wooden frame you gifted me wasn't just a gift.\n\nIt became one of the most precious memories of my life, because every time I see it, I remember your love." },
    { emoji: "💍", title: "Our Dream", date: "Always",
      text: "We have one dream.\n\nStudy hard. Get a good job. Build a happy life together.\n\nAnd one day... get married and grow old together." },
    { emoji: "♾️", title: "Forever Starts Here", date: "Forever",
      text: "This isn't the last chapter. It's only the beginning.\n\nThere will be more memories, more adventures, more laughter, more dreams, more love.\n\nNo matter where life takes us, my heart will always choose you. Forever." },
  ],
  wishes: [
    "You are my happiness ❤️",
    "My favorite person 💕",
    "Forever together 💖",
    "Thank you for everything 🌸",
    "I love your smile 😊",
    "Home is wherever you are 🏡",
    "You make ordinary days magic ✨",
    "Still my favorite hello 👋",
  ],
  reasons: [
    "the way you laugh at your own jokes", "your terrible taste in puns", "how you remember tiny details",
    "the way you say my name", "your ridiculous morning hair", "how you always share your fries",
    "the way you hum without noticing", "your unstoppable curiosity", "how safe I feel with you",
    "your bad singing in the car", "the way you cheer me on", "how you make even errands fun",
    "your honesty, always", "the way you hug like you mean it", "how you remember our first date",
    "your patience with me", "the way your eyes light up", "how you always know what to say",
    "your kindness to strangers", "the way you dance in the kitchen", "how you believe in me",
    "your endless playlists", "the way you say 'good morning'", "how you make me a better person",
    "your bravery in small moments", "the way you hold my hand", "how you never give up on us",
  ],
  quiz: [
    { q: "What's my favorite color?", options: ["Blue", "Pink", "Green", "Purple"], correct: 1 },
    { q: "What's my favorite food?", options: ["Pizza", "Gobi", "Sushi", "Pasta"], correct: 1 },
    { q: "Where was our first date?", options: ["The park", "A coffee shop", "The movies", "A restaurant"], correct: 1 },
    { q: "What's my dream travel destination?", options: ["Australia", "USA", "Canada", "Germany"], correct: 2 },
    { q: "What song reminds me of us?", options: ["Perfect", "Kesariya", "Nange Allava", "Sahiba"], correct: 3 },
    { q: "What do I always order at our favorite spot?", options: ["The special", "The same thing every time", "Whatever you pick", "Dessert first"], correct: 1 },
    { q: "What do you love most in me?", options: ["Love", "Care", "Simplicity", "All of these"], correct: 3 },
    { q: "What season do I love most?", options: ["Spring", "Summer", "Fall", "Winter"], correct: 2 },
    { q: "What's my biggest pet peeve?", options: ["Being late", "Loud chewing", "Messy rooms", "Slow walkers"], correct: 0 },
    { q: "What do I want most in the future?", options: ["A big house", "To travel the world", "A quiet life with you", "A dog"], correct: 2 },
  ],
  letter: "🌏 Your Chuppi Pappa\n\nMy love,\n\nIf you're reading this, it means you clicked the envelope — just like you click into every part of my life, gently and without hesitation.\n\nI wanted a quiet place to tell you something simple: being with you has made every ordinary day feel worth remembering. You are my favorite person to tell things to, my favorite person to say nothing with, and my favorite person, period.\n\nThank you for being exactly who you are.\n\nForever yours.\n\n🫶🏻 Mine Chuppi Mumma",
  // ✏️ Files expected in assets/music using these exact filenames
  tracks: [
    { title: "Perfect — Ed Sheeran", src: "assets/music/perfect.mp3" },
    { title: "Heeriye", src: "assets/music/Heeriye.mp3" },
    { title: "Neenebeku", src: "assets/music/Neenebeku.mp3" },
  ],
};

/* =========================================================
   LANDING → MAIN TRANSITION
   ========================================================= */
const bigHeart = document.getElementById('big-heart');
const landing = document.getElementById('landing');
const overlay = document.getElementById('explosion-overlay');
const site = document.getElementById('site');
const cine = document.getElementById('cinematic-overlay');

bigHeart.addEventListener('click', () => {
  if (bigHeart.classList.contains('popping')) return;
  bigHeart.classList.add('popping');
  cine.classList.add('active', 'freeze');

  // Stage 1 (0–500ms): heart pulses hard, background freezes
  // Stage 2 (500–900ms): screen slowly zooms
  setTimeout(() => landing.classList.add('leaving'), 550);

  // Stage 3 (~900ms): heart explodes into particles + butterflies + petals
  setTimeout(() => {
    burstHeartParticles();
    cine.classList.add('burst');
  }, 900);

  // Stage 4 (~1900ms): soft white flash
  setTimeout(() => overlay.classList.add('fire'), 1900);

  // Stage 5 (~2600ms): website fades in like a Disney movie
  setTimeout(() => {
    landing.remove();
    cine.remove();
    site.hidden = false;
    site.classList.add('fade-in-disney');
    document.body.style.cursor = matchMedia('(hover:hover)').matches ? 'none' : 'auto';
    initMainSite();
    tryPlayMusic();
  }, 2600);
});

/* =========================================================
   VECTOR SHAPE HELPERS (canvas) — used instead of emoji glyphs
   ========================================================= */
function drawVectorHeart(ctx, x, y, size, color) {
  const s = size / 20;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);
  ctx.beginPath();
  ctx.moveTo(0, 8);
  ctx.bezierCurveTo(-16, -6, -20, -14, -10, -18);
  ctx.bezierCurveTo(-3, -21, 0, -14, 0, -10);
  ctx.bezierCurveTo(0, -14, 3, -21, 10, -18);
  ctx.bezierCurveTo(20, -14, 16, -6, 0, 8);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}
function drawVectorSparkle(ctx, x, y, size, color) {
  const s = size / 20;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);
  ctx.beginPath();
  ctx.moveTo(0, -10);
  ctx.quadraticCurveTo(1, -1, 10, 0);
  ctx.quadraticCurveTo(1, 1, 0, 10);
  ctx.quadraticCurveTo(-1, 1, -10, 0);
  ctx.quadraticCurveTo(-1, -1, 0, -10);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}
function drawVectorPetal(ctx, x, y, size, rotationDeg, color) {
  const s = size / 20;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate((rotationDeg * Math.PI) / 180);
  ctx.scale(s, s);
  ctx.beginPath();
  ctx.moveTo(0, -12);
  ctx.bezierCurveTo(9, -6, 9, 8, 0, 14);
  ctx.bezierCurveTo(-9, 8, -9, -6, 0, -12);
  ctx.closePath();
  const grad = ctx.createLinearGradient(0, -12, 0, 14);
  grad.addColorStop(0, color[0]);
  grad.addColorStop(1, color[1]);
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.restore();
}

function burstHeartParticles() {
  const canvas = document.getElementById('particle-burst-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = innerWidth; canvas.height = innerHeight;
  const cx = innerWidth / 2, cy = innerHeight / 2;
  const colors = ['#ffd6e8', '#ff8fb8', '#ffe9b0', '#e6d9ff', '#ffffff'];
  const particles = Array.from({ length: 220 }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 7;
    const kindRoll = Math.random();
    return {
      x: cx, y: cy,
      vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
      size: 4 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      kind: kindRoll < 0.35 ? 'heart' : kindRoll < 0.55 ? 'sparkle' : 'dot',
      life: 1,
    };
  });
  let frames = 0;
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.globalAlpha = Math.max(p.life, 0);
      if (p.kind === 'heart') {
        drawVectorHeart(ctx, p.x, p.y, p.size * 1.4, p.color);
      } else if (p.kind === 'sparkle') {
        drawVectorSparkle(ctx, p.x, p.y, p.size * 1.4, p.color);
      } else {
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      p.x += p.vx; p.y += p.vy; p.vy += 0.03;
      p.life -= 0.012;
    });
    ctx.globalAlpha = 1; ctx.shadowBlur = 0;
    frames++;
    if (frames < 130) requestAnimationFrame(loop);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  loop();
}

/* =========================================================
   CURSOR TRAIL (heart + sparkle)
   ========================================================= */
(function cursorTrail() {
  if (matchMedia('(hover: none), (pointer: coarse)').matches) return; // touch devices: skip entirely, don't just hide it
  const canvas = document.getElementById('cursor-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  function resize() { canvas.width = innerWidth; canvas.height = innerHeight; }
  resize(); addEventListener('resize', resize);

  let last = 0;
  addEventListener('pointermove', (e) => {
    const now = performance.now();
    if (now - last < 40) return;
    last = now;
    const isHeart = Math.random() > 0.6;
    particles.push({ x: e.clientX, y: e.clientY, life: 1, isHeart, size: isHeart ? 13 : 9, vy: -0.4 - Math.random() * 0.4 });
    if (particles.length > 60) particles.shift();
  });

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.globalAlpha = Math.max(p.life, 0);
      ctx.shadowColor = p.isHeart ? 'rgba(255,111,165,.8)' : 'rgba(255,207,138,.8)';
      ctx.shadowBlur = 10;
      if (p.isHeart) drawVectorHeart(ctx, p.x, p.y, p.size, '#ff6fa5');
      else drawVectorSparkle(ctx, p.x, p.y, p.size, '#ffcf8a');
      ctx.shadowBlur = 0;
      p.y += p.vy;
      p.life -= 0.02;
    });
    particles = particles.filter(p => p.life > 0);
    ctx.globalAlpha = 1;
    requestAnimationFrame(loop);
  }
  loop();
})();

/* =========================================================
   AMBIENT PARTICLES — hearts, falling roses, fireflies
   ========================================================= */
(function ambient() {
  const canvas = document.getElementById('ambient-canvas');
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width = innerWidth; canvas.height = document.documentElement.scrollHeight; }
  resize();
  addEventListener('resize', resize);
  const resizeObs = new ResizeObserver(resize);
  resizeObs.observe(document.body);

  const hearts = Array.from({ length: 22 }, makeHeart);
  const petals = Array.from({ length: 14 }, makePetal);
  const flies = Array.from({ length: 18 }, makeFly);

  function makeHeart() {
    return {
      x: Math.random() * innerWidth, y: Math.random() * canvas.height,
      size: 8 + Math.random() * 16, speed: 0.15 + Math.random() * 0.3,
      drift: Math.random() * 2 - 1, opacity: 0.25 + Math.random() * 0.4,
    };
  }
  function makePetal() {
    return {
      x: Math.random() * innerWidth, y: Math.random() * -canvas.height,
      size: 10 + Math.random() * 8, speed: 0.4 + Math.random() * 0.6,
      sway: Math.random() * 2, rot: Math.random() * 360,
    };
  }
  function makeFly() {
    return {
      x: Math.random() * innerWidth, y: Math.random() * canvas.height,
      t: Math.random() * 1000, r: 20 + Math.random() * 30,
    };
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach(h => {
      ctx.globalAlpha = h.opacity;
      drawVectorHeart(ctx, h.x, h.y, h.size, '#ff85b3');
      h.y -= h.speed;
      h.x += Math.sin(h.y / 60) * 0.3 * h.drift;
      if (h.y < -20) { h.y = canvas.height + 20; h.x = Math.random() * innerWidth; }
    });

    ctx.globalAlpha = 0.85;
    petals.forEach(p => {
      drawVectorPetal(ctx, p.x, p.y, p.size, p.rot, ['#ffd6e8', '#ff9fc4']);
      p.y += p.speed;
      p.x += Math.sin(p.y / 40) * p.sway;
      p.rot += 1.2;
      if (p.y > canvas.height + 20) { p.y = -20; p.x = Math.random() * innerWidth; }
    });

    flies.forEach(f => {
      f.t += 0.02;
      const fx = f.x + Math.cos(f.t) * f.r;
      const fy = f.y + Math.sin(f.t * 1.3) * f.r;
      const glow = (Math.sin(f.t * 3) + 1) / 2;
      ctx.globalAlpha = 0.3 + glow * 0.6;
      ctx.fillStyle = '#fff3b0';
      ctx.shadowColor = '#fff3b0';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(fx, fy, 2.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(loop);
  }
  loop();
})();

/* =========================================================
   CINEMATIC SCENE ENGINE bootstrap (runs immediately, not gated
   behind the landing screen, so the first theme is ready the
   moment #site becomes visible)
   ========================================================= */
let currentBgTheme = null;
let activeBgLayer = 'a';
function applyTheme(theme) {
  if (!theme || theme === currentBgTheme) return;
  currentBgTheme = theme;
  const showId = activeBgLayer === 'a' ? 'bg-b' : 'bg-a';
  const hideId = activeBgLayer === 'a' ? 'bg-a' : 'bg-b';
  const showEl = document.getElementById(showId);
  const hideEl = document.getElementById(hideId);
  showEl.className = `bg-theme-layer theme-${theme} active`;
  hideEl.classList.remove('active');
  activeBgLayer = activeBgLayer === 'a' ? 'b' : 'a';
  if (window.SceneEngine) window.SceneEngine.setTheme(theme);
  firePortalTransition();
}
function firePortalTransition() {
  const layer = document.getElementById('transition-burst-layer');
  if (!layer) return;
  layer.classList.remove('firing');
  void layer.offsetWidth;
  layer.classList.add('firing');
  const trail = document.createElement('div');
  trail.className = 'portal-trail';
  layer.appendChild(trail);
  setTimeout(() => trail.remove(), 950);
  const site = document.getElementById('site');
  if (site) {
    site.classList.remove('portal-zoom');
    void site.offsetWidth;
    site.classList.add('portal-zoom');
  }
  setTimeout(() => { layer.classList.remove('firing'); if (site) site.classList.remove('portal-zoom'); }, 1000);
}
(function bootSceneEngine() {
  const canvas = document.getElementById('scene-canvas');
  if (canvas && window.SceneEngine) window.SceneEngine.init(canvas);
  // set the very first theme immediately (landing + chapter one are both "night-sky")
  applyTheme(document.querySelector('[data-theme]')?.dataset.theme || 'night-sky');
})();
function initThemeTransitions() {
  const themedEls = Array.from(document.querySelectorAll('[data-theme]'));
  const ratios = new Map(themedEls.map(el => [el, 0]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => ratios.set(e.target, e.intersectionRatio));
    let best = null, bestRatio = 0;
    ratios.forEach((ratio, el) => { if (ratio > bestRatio) { bestRatio = ratio; best = el; } });
    if (best && bestRatio > 0.15) applyTheme(best.dataset.theme);
  }, { threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1] });
  themedEls.forEach(el => io.observe(el));
}

/* =========================================================
   MAIN SITE INIT (runs once landing is dismissed)
   ========================================================= */
function initMainSite() {
  initCountdown();
  initTimeline();
  initGiftFrameChapter();
  initGallery();
  initWishes();
  initFavoritePerson();
  initEntireWorld();
  initReasons();
  initQuiz();
  initLetter();
  initTicTacToe();
  initProposal();
  initGift();
  initDotNav();
  ensureMusicPlayer();
  initSurpriseMoments();
  initSmoothScroll();
  initCinematicReveals();
  initMagneticButtons();
  initClickRipples();
  initThemeTransitions();
  initLightbox();
  initEndingFinale();
}

/* ---------- Countdown ---------- */
function initCountdown() {
  const start = new Date(CONFIG.metSince).getTime();
  const els = {
    d: document.getElementById('cd-days'), h: document.getElementById('cd-hours'),
    m: document.getElementById('cd-mins'), s: document.getElementById('cd-secs'),
  };
  function tick() {
    const diff = Math.max(0, Date.now() - start);
    const sec = Math.floor(diff / 1000);
    els.d.textContent = Math.floor(sec / 86400);
    els.h.textContent = Math.floor((sec % 86400) / 3600);
    els.m.textContent = Math.floor((sec % 3600) / 60);
    els.s.textContent = sec % 60;
  }
  tick();
  setInterval(tick, 1000);
}

/* ---------- Scroll reveal helper ---------- */
function revealOnScroll(selector, className = 'in') {
  const els = document.querySelectorAll(selector);
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(className); });
  }, { threshold: 0.25 });
  els.forEach(el => io.observe(el));
}
/* ---------- Our Journey: mystery memory cards ---------- */
let timelinePhotoSrc = null;
function initTimeline() {
  const track = document.getElementById('timeline');
  preloadImage('assets/images/memory1.jpg').then((src) => {
    timelinePhotoSrc = src;
    renderTimeline(track);
  });
}
function renderTimeline(track) {
  track.innerHTML = CONFIG.timeline.map((m, i) => {
    const paragraphs = m.text.split('\n\n').map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
    let photoInner;
    if (m.isPhoto && timelinePhotoSrc) {
      photoInner = `<div class="tl-photo"><img src="${timelinePhotoSrc}" alt="${m.title}" loading="lazy"></div>`;
    } else if (m.isPhoto) {
      photoInner = `<div class="tl-photo tl-photo-placeholder"><svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5.5-5.5a2 2 0 0 0-2.8 0L5 18"/></svg><span>add your picture here</span></div>`;
    } else {
      photoInner = `<div class="tl-photo" style="background:linear-gradient(135deg, hsl(${i * 48 + 20},72%,88%), hsl(${i * 48 + 70},72%,80%))"><span>${m.emoji}</span></div>`;
    }
    return `
    <div class="timeline-card" data-index="${i}" tabindex="0" role="button" aria-label="Reveal memory: ${m.title}">
      <div class="tl-shell">
        <div class="tl-closed">
          <span class="tl-emoji">${m.emoji}</span>
          <span class="tl-spark">✦</span><span class="tl-spark">✦</span><span class="tl-spark">✦</span>
          <span class="tl-tap-hint">tap to unlock</span>
        </div>
        <div class="tl-content">
          ${photoInner}
          <div class="tl-body">
            <h3>${m.title}</h3>
            ${paragraphs}
            <span class="tl-date">${m.date}</span>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');

  revealOnScroll('.timeline-card');

  const cards = track.querySelectorAll('.timeline-card');
  cards.forEach(card => {
    // gentle 3D mouse-parallax tilt
    const shell = card.querySelector('.tl-shell');
    card.addEventListener('pointermove', (e) => {
      if (card.classList.contains('revealed')) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      shell.style.setProperty('--rx', `${px * 14}deg`);
      shell.style.setProperty('--ry', `${-py * 14}deg`);
    });
    card.addEventListener('pointerleave', () => {
      shell.style.setProperty('--rx', `0deg`);
      shell.style.setProperty('--ry', `0deg`);
    });

    const open = () => openTimelineCard(card);
    card.addEventListener('click', open);
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });

    const photoEl = card.querySelector('.tl-photo');
    if (photoEl) {
      photoEl.addEventListener('click', (e) => {
        if (!card.classList.contains('revealed')) return;
        e.stopPropagation();
        Lightbox.open(buildTimelineLightboxList(), +card.dataset.index);
      });
    }
  });
}
function buildTimelineLightboxList() {
  return CONFIG.timeline.map((m, i) => ({
    mode: m.isPhoto ? (timelinePhotoSrc ? 'image' : 'missing') : 'gradient',
    src: timelinePhotoSrc,
    gradient: `linear-gradient(135deg, hsl(${i * 48 + 20},72%,88%), hsl(${i * 48 + 70},72%,80%))`,
    emoji: m.emoji,
    title: m.title,
    desc: m.text.replace(/\n+/g, ' '),
    date: m.date,
  }));
}

function openTimelineCard(card) {
  if (card.classList.contains('revealed') || card.classList.contains('opening')) return;
  const emoji = card.querySelector('.tl-emoji').textContent;
  card.classList.add('opening');

  burstEmojiParticles(card, emoji);
  spawnHeartPops(card);

  setTimeout(() => {
    card.classList.remove('opening');
    card.classList.add('revealed');
  }, 650);
}

function burstEmojiParticles(card, emoji) {
  const shell = card.querySelector('.tl-shell');
  const burst = document.createElement('div');
  burst.className = 'tl-burst';
  const glyphs = [emoji, '✦', '✨', '💫'];
  burst.innerHTML = Array.from({ length: 14 }, () => {
    const angle = Math.random() * Math.PI * 2;
    const dist = 60 + Math.random() * 90;
    const bx = Math.cos(angle) * dist, by = Math.sin(angle) * dist;
    const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
    return `<span style="--bx:${bx}px;--by:${by}px;--br:${Math.random() * 360}deg">${glyph}</span>`;
  }).join('');
  shell.appendChild(burst);
  setTimeout(() => burst.remove(), 950);
}

function spawnHeartPops(card) {
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      const h = document.createElement('span');
      h.className = 'tl-heart-pop';
      h.textContent = Math.random() > 0.5 ? '💗' : '🦋';
      h.style.left = `${20 + Math.random() * 60}%`;
      h.style.bottom = '10%';
      card.querySelector('.tl-shell').appendChild(h);
      setTimeout(() => h.remove(), 1900);
    }, i * 120);
  }
}

/* ---------- shared helper: check if an image file exists without breaking layout ---------- */
function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

/* ---------- Gallery: tap-to-reveal ---------- */
const revealedCards = new Set();
let galleryImageSrcs = [];
function initGallery() {
  const grid = document.getElementById('gallery-grid');
  const checks = CONFIG.gallery.map((g, i) => preloadImage(`assets/images/gallery${i + 1}.jpg`));
  Promise.all(checks).then((results) => {
    galleryImageSrcs = results;
    grid.innerHTML = CONFIG.gallery.map((g, i) => {
      const src = results[i];
      const photoInner = src
        ? `<img src="${src}" alt="${g.cap}" loading="lazy">`
        : g.emoji;
      const photoBg = src ? '' : ` style="background:linear-gradient(135deg, hsl(${i * 45},70%,88%), hsl(${i * 45 + 40},70%,80%))"`;
      return `
    <div class="gallery-card" data-index="${i}">
      <div class="gallery-photo"${photoBg}>${photoInner}</div>
      <div class="cap">${g.cap}</div>
      <div class="frame-face">
        <span class="frame-heart">❤️</span>
        <span class="frame-label">Tap to Reveal ❤️</span>
      </div>
      <div class="frame-crack"></div>
      <div class="sparkle-burst">
        ${Array.from({ length: 8 }).map((_, s) => {
          const angle = (s / 8) * Math.PI * 2;
          const sx = Math.round(Math.cos(angle) * 60), sy = Math.round(Math.sin(angle) * 60);
          return `<span style="--sx:${sx}px;--sy:${sy}px">✦</span>`;
        }).join('')}
      </div>
    </div>`;
    }).join('');
    grid.querySelectorAll('.gallery-card').forEach(card => {
      card.addEventListener('click', () => {
        const i = +card.dataset.index;
        if (!revealedCards.has(i)) {
          revealCard(card, i);
        } else {
          Lightbox.open(buildGalleryLightboxList(), i);
        }
      });
    });
  });
}
function revealCard(card, i) {
  revealedCards.add(i);
  card.classList.add('revealing');
  setTimeout(() => {
    card.classList.remove('revealing');
    card.classList.add('revealed');
  }, 550);
}
function buildGalleryLightboxList() {
  return CONFIG.gallery.map((g, i) => {
    const src = galleryImageSrcs[i];
    return src
      ? { mode: 'image', src, title: g.cap, desc: '', date: '' }
      : {
          mode: 'gradient',
          gradient: `linear-gradient(135deg, hsl(${i * 45},70%,88%), hsl(${i * 45 + 40},70%,80%))`,
          emoji: g.emoji, title: g.cap, desc: '', date: '',
        };
  });
}

/* ---------- Wishes ---------- */
function initWishes() {
  const grid = document.getElementById('wishes-grid');
  grid.innerHTML = CONFIG.wishes.map(w => `<div class="wish-card">${w}</div>`).join('');
  revealOnScroll('.wish-card');
}

/* ---------- Reasons ---------- */
function initReasons() {
  const list = CONFIG.reasons.map((r, i) => `<span class="reason-chip">#${i + 1} ${r}</span>`);
  const doubled = list.concat(list).join('');
  document.getElementById('reasons-scroll-1').innerHTML = doubled;
  const half = Math.ceil(CONFIG.reasons.length / 2);
  const second = CONFIG.reasons.slice(half).concat(CONFIG.reasons.slice(0, half))
    .map((r, i) => `<span class="reason-chip">💗 ${r}</span>`);
  document.getElementById('reasons-scroll-2').innerHTML = second.concat(second).join('');
}

/* ---------- Quiz ---------- */
function initQuiz() {
  const box = document.getElementById('quiz-box');
  let index = 0, score = 0;
  render();

  function render() {
    if (index >= CONFIG.quiz.length) return renderResult();
    const q = CONFIG.quiz[index];
    box.innerHTML = `
      <p class="quiz-progress">Question ${index + 1} of ${CONFIG.quiz.length}</p>
      <p class="quiz-question">${q.q}</p>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `<button class="quiz-opt" data-i="${i}">${opt}</button>`).join('')}
      </div>`;
    box.querySelectorAll('.quiz-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const chosen = +btn.dataset.i;
        box.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
        if (chosen === q.correct) { btn.classList.add('correct'); score++; }
        else {
          btn.classList.add('wrong');
          box.querySelector(`[data-i="${q.correct}"]`).classList.add('correct');
        }
        setTimeout(() => { index++; render(); }, 900);
      });
    });
  }
  function renderResult() {
    const good = score >= Math.ceil(CONFIG.quiz.length * 0.7);
    box.innerHTML = `
      <div class="quiz-result">
        <h3>${good ? 'You Know Me Perfectly ❤️' : 'You Need More Dates 😄'}</h3>
        <p>You scored ${score} out of ${CONFIG.quiz.length}.</p>
        <button class="ghost-btn" id="quiz-retry">Try Again</button>
      </div>`;
    document.getElementById('quiz-retry').addEventListener('click', () => { index = 0; score = 0; render(); });
  }
}

/* ---------- Secret letter ---------- */
function initLetter() {
  const envelope = document.getElementById('envelope');
  const paper = document.getElementById('letter-paper');
  const textEl = document.getElementById('letter-text');
  const hint = document.getElementById('envelope-hint');
  let opened = false, typing = false;

  envelope.addEventListener('click', () => {
    if (opened) return;
    opened = true;
    envelope.classList.add('open');
    hint.textContent = '';
    fadeMusic();
    setTimeout(typeLetter, 500);
  });

  function typeLetter() {
    if (typing) return;
    typing = true;
    const paragraphs = CONFIG.letter.split('\n\n');
    textEl.innerHTML = '';
    let pIndex = 0;

    function nextParagraph() {
      if (pIndex >= paragraphs.length) { typing = false; return; }
      const p = document.createElement('p');
      p.className = 'letter-para';
      textEl.appendChild(p);
      requestAnimationFrame(() => requestAnimationFrame(() => p.classList.add('show')));

      const full = paragraphs[pIndex];
      let i = 0;
      const speed = full.length > 80 ? 14 : 26;
      const id = setInterval(() => {
        p.textContent += full[i];
        i++;
        // keep the newest text in view without ever hiding earlier lines
        paper.scrollTop = paper.scrollHeight;
        if (i >= full.length) {
          clearInterval(id);
          pIndex++;
          setTimeout(nextParagraph, 260);
        }
      }, speed);
    }
    nextParagraph();
  }
}

/* ---------- Tic-tac-toe (XOXO) ---------- */
function initTicTacToe() {
  const grid = document.getElementById('tictactoe');
  const msg = document.getElementById('ttt-msg');
  const resetBtn = document.getElementById('ttt-reset');
  let board = Array(9).fill(null);
  let turn = '❤️';
  const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  render();

  function render() {
    grid.innerHTML = board.map((v, i) => `<div class="ttt-cell" data-i="${i}">${v || ''}</div>`).join('');
    grid.querySelectorAll('.ttt-cell').forEach(cell => cell.addEventListener('click', () => play(+cell.dataset.i)));
  }
  function play(i) {
    if (board[i] || checkWinner()) return;
    board[i] = turn;
    turn = turn === '❤️' ? '💕' : '❤️';
    render();
    const winner = checkWinner();
    if (winner) msg.textContent = `${winner} wins! 🎉`;
    else if (board.every(Boolean)) msg.textContent = "It's a sweet draw 💫";
  }
  function checkWinner() {
    for (const [a,b,c] of wins) if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
    return null;
  }
  resetBtn.addEventListener('click', () => { board = Array(9).fill(null); turn = '❤️'; msg.textContent = ''; render(); });
}

/* ---------- Proposal: chase button + celebration ---------- */
function initProposal() {
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');
  const msgEl = document.getElementById('no-btn-msg');
  let scale = 1;
  let attempts = 0;
  const MAX_ATTEMPTS = 9;
  let transformed = false;
  let busy = false;

  const messages = [
    "Really? 😅", "Think again ❤️", "You know the answer 😘", "No escaping love 💖",
    "Try the YES button 😄", "I'll keep running 😝", "Babbu ❤️... I already know your answer 😉",
    "Nice try 😂", "The YES button is waiting 😉",
  ];

  function showMessage(x, y, text) {
    msgEl.textContent = text || messages[Math.floor(Math.random() * messages.length)];
    const vw = window.innerWidth, vh = window.innerHeight;
    const mx = Math.min(Math.max(x, 90), vw - 90);
    const my = Math.min(Math.max(y - 50, 20), vh - 40);
    msgEl.style.setProperty('--mx', `${mx}px`);
    msgEl.style.setProperty('--my', `${my}px`);
    msgEl.classList.remove('show');
    void msgEl.offsetWidth;
    msgEl.classList.add('show');
  }

  function spawnTrail(x, y) {
    for (let i = 0; i < 6; i++) {
      const dot = document.createElement('span');
      dot.className = 'no-trail-dot';
      const isHeart = Math.random() > 0.5;
      const size = isHeart ? 8 : 4 + Math.random() * 3;
      dot.style.left = `${x + (Math.random() - 0.5) * 20}px`;
      dot.style.top = `${y + (Math.random() - 0.5) * 20}px`;
      dot.style.width = `${size}px`; dot.style.height = `${size}px`;
      dot.style.background = isHeart ? 'radial-gradient(circle, #ff9fc4, #ff6fa5)' : 'radial-gradient(circle, #fff6dd, #ffcf6e)';
      dot.style.boxShadow = isHeart ? '0 0 10px rgba(255,111,165,.8)' : '0 0 8px rgba(255,207,110,.8)';
      dot.style.animationDelay = `${i * 0.03}s`;
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 850);
    }
  }

  function rectsOverlap(x, y, w, h, rect, pad) {
    return !(x + w < rect.left - pad || x > rect.right + pad || y + h < rect.top - pad || y > rect.bottom + pad);
  }
  function randomPosition() {
    const btnW = noBtn.offsetWidth || 90, btnH = noBtn.offsetHeight || 44;
    const margin = 16;
    const vw = window.innerWidth, vh = window.innerHeight;
    const yesRect = yesBtn.getBoundingClientRect();
    let x, y, tries = 0;
    do {
      x = margin + Math.random() * (vw - btnW - margin * 2);
      y = margin + Math.random() * (vh - btnH - margin * 2);
      tries++;
    } while (tries < 12 && rectsOverlap(x, y, btnW, btnH, yesRect, 40));
    return { x, y };
  }

  function activateRoaming() {
    if (noBtn.classList.contains('roaming')) return;
    const r = noBtn.getBoundingClientRect();
    noBtn.style.left = `${r.left}px`;
    noBtn.style.top = `${r.top}px`;
    noBtn.style.margin = '0';
    noBtn.classList.add('roaming');
  }

  function evade(clientX, clientY) {
    if (busy || transformed) return;
    busy = true;
    activateRoaming();
    const startRect = noBtn.getBoundingClientRect();
    spawnTrail(startRect.left + startRect.width / 2, startRect.top + startRect.height / 2);
    attempts++;

    const target = randomPosition();
    const midX = (startRect.left + target.x) / 2 + (Math.random() - 0.5) * 160;
    const midY = (startRect.top + target.y) / 2 + (Math.random() - 0.5) * 160;
    const rot = (Math.random() - 0.5) * 50;
    const isTired = attempts >= MAX_ATTEMPTS - 3;
    const dur1 = isTired ? 0.5 : 0.28;
    const dur2 = isTired ? 0.7 : 0.4;
    if (isTired) noBtn.classList.add('tired');

    if (window.gsap) {
      gsap.killTweensOf(noBtn);
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(noBtn, { y: '+=6', duration: 0.12, yoyo: true, repeat: 1, ease: 'power1.inOut' });
          busy = false;
        }
      });
      tl.to(noBtn, { left: midX, top: midY, rotation: rot, duration: dur1, ease: 'power2.out' })
        .to(noBtn, { left: target.x, top: target.y, rotation: 0, duration: dur2, ease: 'back.out(1.6)' });
    } else {
      noBtn.style.transition = `left ${dur1 + dur2}s ease, top ${dur1 + dur2}s ease`;
      noBtn.style.left = `${target.x}px`;
      noBtn.style.top = `${target.y}px`;
      busy = false;
    }

    showMessage(target.x + (noBtn.offsetWidth || 90) / 2, target.y);

    if (attempts >= MAX_ATTEMPTS) setTimeout(finalTransform, isTired ? 750 : 500);
  }

  function finalTransform() {
    if (transformed) return;
    transformed = true;
    noBtn.classList.add('shaking');
    setTimeout(() => {
      noBtn.classList.remove('shaking', 'tired', 'roaming');
      noBtn.style.position = '';
      noBtn.style.left = '';
      noBtn.style.top = '';
      noBtn.style.transform = '';
      noBtn.classList.add('became-yes');
      noBtn.textContent = 'YES 💖';
      showMessage(window.innerWidth / 2, window.innerHeight / 2 - 30, "I knew you'd choose YES ❤️");
      noBtn.addEventListener('click', () => yesBtn.click());
    }, 550);
  }

  // Desktop — evade the moment the cursor gets close
  let lastCheck = 0;
  document.addEventListener('pointermove', (e) => {
    if (transformed || busy) return;
    const now = performance.now();
    if (now - lastCheck < 60) return;
    lastCheck = now;
    const r = noBtn.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    if (Math.hypot(e.clientX - cx, e.clientY - cy) < 100) evade(e.clientX, e.clientY);
  });
  // Mobile — evade the instant a tap begins near it
  noBtn.addEventListener('touchstart', (e) => {
    if (transformed) return;
    e.preventDefault();
    const t = e.touches[0];
    evade(t.clientX, t.clientY);
  }, { passive: false });
  noBtn.addEventListener('click', (e) => {
    if (transformed) return;
    e.preventDefault();
    evade(e.clientX, e.clientY);
  });

  yesBtn.addEventListener('click', () => {
    scale += 0.15;
    yesBtn.style.fontSize = `${1.1 * scale}rem`;
    yesBtn.style.padding = `${1 * scale}rem ${2.4 * scale}rem`;
  });

  yesBtn.addEventListener('click', function handler() {
    document.querySelector('.proposal-section').classList.add('brighten');
    document.getElementById('celebration').hidden = false;
    launchConfetti();
    launchCelebrationBurst();
    yesBtn.removeEventListener('click', handler);
  });
}

function celebrate() { /* visual growth handled inline above */ }

function launchConfetti() {
  const canvas = document.getElementById('proposal-canvas');
  canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
  const ctx = canvas.getContext('2d');
  const colors = ['#ff6fa5', '#ffd27a', '#c9a7ff', '#ffe3d0', '#9fd8ff'];
  const pieces = Array.from({ length: 160 }, () => ({
    x: Math.random() * canvas.width, y: -20 - Math.random() * canvas.height,
    size: 5 + Math.random() * 6, speed: 2 + Math.random() * 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    rot: Math.random() * 360, spin: (Math.random() - 0.5) * 10,
    isHeart: Math.random() > 0.7,
  }));
  let frames = 0;
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      if (p.isHeart) { ctx.font = `${p.size * 2}px sans-serif`; ctx.fillText('💖', 0, 0); }
      else { ctx.fillStyle = p.color; ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size); }
      ctx.restore();
      p.y += p.speed; p.rot += p.spin;
    });
    frames++;
    if (frames < 260) requestAnimationFrame(loop);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  loop();
}

/* ---------- Celebration: fireworks + heart explosion + butterflies + gold sparkles + rose rain ---------- */
function launchCelebrationBurst() {
  const canvas = document.getElementById('celebration-canvas');
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  resize(); addEventListener('resize', resize);

  const colors = ['#ff6fa5', '#ffd77a', '#c9a7ff', '#fff2b0', '#ff9fc7'];
  let fireworks = [];
  let roses = Array.from({ length: 30 }, () => ({
    x: Math.random() * canvas.width, y: -20 - Math.random() * 200,
    size: 12 + Math.random() * 10, speed: 1 + Math.random() * 1.6, sway: Math.random() * 2, rot: Math.random() * 360,
  }));

  function spawnFirework() {
    const x = Math.random() * canvas.width, y = canvas.height * (0.2 + Math.random() * 0.4);
    const isHeartBurst = Math.random() > 0.5;
    const count = 40;
    const particles = Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const speed = 2 + Math.random() * 3;
      return { x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1, color: colors[Math.floor(Math.random() * colors.length)], isHeartBurst };
    });
    fireworks.push(...particles);
  }
  const fireworkTimer = setInterval(spawnFirework, 350);
  setTimeout(() => clearInterval(fireworkTimer), 3200);

  let frames = 0;
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fireworks.forEach(p => {
      ctx.globalAlpha = Math.max(p.life, 0);
      if (p.isHeartBurst) { ctx.font = '10px sans-serif'; ctx.fillText('💛', p.x, p.y); }
      else { ctx.fillStyle = p.color; ctx.shadowColor = p.color; ctx.shadowBlur = 8; ctx.beginPath(); ctx.arc(p.x, p.y, 2.4, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0; }
      p.x += p.vx; p.y += p.vy; p.vy += 0.03; p.life -= 0.014;
    });
    fireworks = fireworks.filter(p => p.life > 0);

    ctx.globalAlpha = 0.9;
    roses.forEach(r => {
      ctx.save();
      ctx.translate(r.x, r.y);
      ctx.rotate((r.rot * Math.PI) / 180);
      ctx.font = `${r.size}px sans-serif`;
      ctx.fillText('🌹', -r.size / 2, 0);
      ctx.restore();
      r.y += r.speed; r.x += Math.sin(r.y / 50) * r.sway; r.rot += 1;
      if (r.y > canvas.height + 20) { r.y = -20; r.x = Math.random() * canvas.width; }
    });

    ctx.globalAlpha = 1;
    frames++;
    if (frames < 420) requestAnimationFrame(loop);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  loop();
}

/* ---------- Surprise gift ---------- */
function initGift() {
  const box = document.getElementById('gift-box');
  const msg = document.getElementById('gift-msg');
  box.addEventListener('click', () => {
    if (box.classList.contains('opened')) return;
    box.classList.add('opened');
    box.textContent = '💥';
    setTimeout(() => { box.textContent = '💝'; msg.hidden = false; }, 350);
  });
}

/* ---------- Dot nav active state ---------- */
function initDotNav() {
  const links = document.querySelectorAll('#dot-nav a');
  const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const link = document.querySelector(`#dot-nav a[href="#${e.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(s => s && io.observe(s));
}

/* ---------- Music player ---------- */
let currentTrack = 0;
let musicPlayerReady = false;
function ensureMusicPlayer() {
  if (musicPlayerReady) return;
  musicPlayerReady = true;
  initMusicPlayer();
}
function initMusicPlayer() {
  const player = document.getElementById('music-player');
  const audio = document.getElementById('bg-audio');
  const playBtn = document.getElementById('play-pause');
  const title = document.getElementById('track-title');
  const volume = document.getElementById('volume');
  const seek = document.getElementById('seek');
  const timeCurrent = document.getElementById('time-current');
  const timeTotal = document.getElementById('time-total');
  const loopBtn = document.getElementById('loop-track');
  const playlistToggle = document.getElementById('playlist-toggle');
  const playlistEl = document.getElementById('playlist');
  const playerToggle = document.getElementById('player-toggle');

  playlistEl.innerHTML = CONFIG.tracks.map((t, i) => `<li data-i="${i}">${t.title}</li>`).join('');
  playlistEl.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => { loadTrack(+li.dataset.i); tryPlayMusic(); });
  });

  loadTrack(0);
  audio.volume = 0.5;
  audio.loop = false;

  playerToggle.addEventListener('click', () => player.classList.remove('collapsed'));

  playBtn.addEventListener('click', () => { audio.paused ? tryPlayMusic() : audio.pause(); });
  audio.addEventListener('play', () => { playBtn.textContent = '⏸'; player.classList.add('playing'); });
  audio.addEventListener('pause', () => { playBtn.textContent = '▶'; player.classList.remove('playing'); });
  document.getElementById('next-track').addEventListener('click', () => { loadTrack((currentTrack + 1) % CONFIG.tracks.length); tryPlayMusic(); });
  document.getElementById('prev-track').addEventListener('click', () => { loadTrack((currentTrack - 1 + CONFIG.tracks.length) % CONFIG.tracks.length); tryPlayMusic(); });
  volume.addEventListener('input', () => audio.volume = +volume.value);

  loopBtn.addEventListener('click', () => {
    audio.loop = !audio.loop;
    loopBtn.classList.toggle('active', audio.loop);
  });
  playlistToggle.addEventListener('click', () => { playlistEl.hidden = !playlistEl.hidden; });

  audio.addEventListener('loadedmetadata', () => { timeTotal.textContent = formatTime(audio.duration); });
  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      seek.value = (audio.currentTime / audio.duration) * 100;
      timeCurrent.textContent = formatTime(audio.currentTime);
    }
  });
  audio.addEventListener('ended', () => {
    if (!audio.loop) { loadTrack((currentTrack + 1) % CONFIG.tracks.length); tryPlayMusic(); }
  });
  seek.addEventListener('input', () => {
    if (audio.duration) audio.currentTime = (seek.value / 100) * audio.duration;
  });

  function formatTime(s) {
    if (!isFinite(s)) return '0:00';
    const m = Math.floor(s / 60), sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  }

  function loadTrack(i) {
    currentTrack = i;
    audio.src = CONFIG.tracks[i].src;
    title.textContent = CONFIG.tracks[i].title;
    playlistEl.querySelectorAll('li').forEach((li, li_i) => li.classList.toggle('active', li_i === i));
    seek.value = 0; timeCurrent.textContent = '0:00';
  }
}
function tryPlayMusic() {
  const audio = document.getElementById('bg-audio');
  audio.play().catch(() => {
    document.getElementById('track-title').textContent = CONFIG.tracks[currentTrack].title + ' — add MP3 to assets/music 🎵';
  });
}
function fadeMusic() {
  const audio = document.getElementById('bg-audio');
  const start = audio.volume;
  let v = start;
  const id = setInterval(() => {
    v -= 0.03;
    if (v <= start * 0.3 || v <= 0) { clearInterval(id); return; }
    audio.volume = v;
  }, 80);
}

/* =========================================================
   SURPRISE MOMENTS — compliments, cursor butterfly
   (shooting stars + aurora + rainbow-toned skies are now handled
   by the cinematic SceneEngine, see scene-engine.js)
   ========================================================= */
function initSurpriseMoments() {
  const compliments = [
    "You make ordinary days feel magical", "Still my favorite person", "Every day with you is a good one",
    "You are so loved", "That smile of yours ❤️", "Lucky to have you", "You make my heart smile",
  ];

  // Floating compliments — fade in occasionally near random spots
  const complimentLayer = document.getElementById('compliment-layer');
  function spawnCompliment() {
    const el = document.createElement('div');
    el.className = 'floating-compliment';
    el.textContent = compliments[Math.floor(Math.random() * compliments.length)];
    el.style.left = `${10 + Math.random() * 70}%`;
    el.style.top = `${20 + Math.random() * 60}%`;
    complimentLayer.appendChild(el);
    setTimeout(() => el.remove(), 4600);
    scheduleCompliment();
  }
  function scheduleCompliment() { setTimeout(spawnCompliment, 12000 + Math.random() * 10000); }
  scheduleCompliment();

  // A butterfly briefly follows the cursor after moments of stillness
  const follower = document.getElementById('cursor-follower');
  let moveTimer = null;
  const followerIcons = {
    butterfly: '<svg class="icon" viewBox="0 0 100 100"><use href="#i-butterfly"/></svg>',
    heart: '<svg class="icon" viewBox="0 0 100 90"><use href="#i-heart"/></svg>',
  };
  document.addEventListener('pointermove', (e) => {
    if (matchMedia('(hover: none), (pointer: coarse)').matches) return;
    clearTimeout(moveTimer);
    moveTimer = setTimeout(() => {
      follower.style.left = `${e.clientX}px`;
      follower.style.top = `${e.clientY}px`;
      follower.innerHTML = Math.random() > 0.5 ? followerIcons.butterfly : followerIcons.heart;
      follower.classList.remove('show');
      void follower.offsetWidth; // restart animation
      follower.classList.add('show');
    }, 900);
  });

  // Hidden hearts blooming near flowers on scroll into the scene
  revealOnScroll('.wish-card');
}

/* =========================================================
   LOGIN GATE
   ✏️ Set your own name and password here. Leave blank and the
   gate will not accept any answer until you fill these in.
   ========================================================= */
const WEBSITE_NAME = "Babbu";
const WEBSITE_PASSWORD = "01112007";

(function initLoginGate() {
  const gate = document.getElementById('login-gate');
  if (!gate) return;

  const canvas = document.getElementById('gate-canvas');
  const content = document.getElementById('gate-content');
  const form = document.getElementById('gate-form');
  const nameInput = document.getElementById('gate-input-name');
  const passInput = document.getElementById('gate-input-pass');
  const nameField = document.getElementById('gate-name-field');
  const passField = document.getElementById('gate-pass-field');
  const msgEl = document.getElementById('gate-message');
  const submitBtn = document.getElementById('gate-submit');

  runGateAtmosphere(canvas);

  // magnetic hover for the unlock button — runs standalone since this gate
  // is dismissed long before the main site's magnetic-button system inits
  if (!matchMedia('(hover: none), (pointer: coarse)').matches) {
    submitBtn.addEventListener('pointermove', (e) => {
      const r = submitBtn.getBoundingClientRect();
      const mx = (e.clientX - (r.left + r.width / 2)) * 0.3;
      const my = (e.clientY - (r.top + r.height / 2)) * 0.3;
      submitBtn.style.transform = `translate(${mx}px, ${my}px)`;
    });
    submitBtn.addEventListener('pointerleave', () => { submitBtn.style.transform = ''; });
  }

  function dismissGate() {
    gate.classList.add('gate-hide');
    setTimeout(() => gate.remove(), 1300);
  }

  // NOTE: the login is intentionally NOT remembered. No localStorage,
  // sessionStorage, or cookies are read or written here — the gate must
  // appear on every single page load, every refresh, every restart.

  // staged welcome text, then reveal the form
  requestAnimationFrame(() => document.getElementById('gate-line1').classList.add('show'));
  setTimeout(() => document.getElementById('gate-name').classList.add('show'), 2200);
  setTimeout(() => document.getElementById('gate-line2').classList.add('show'), 4300);
  setTimeout(() => form.classList.add('show'), 5400);

  const wrongMessages = [
    "Oops... Only the special person can unlock this little world ❤️",
    "This little world is waiting for the right key ❤️",
    "Almost there... Try again ❤️",
  ];

  // If the site owner hasn't set WEBSITE_NAME / WEBSITE_PASSWORD yet, the
  // form can never succeed — make that obvious instead of letting it look
  // like a broken login when every attempt "fails".
  const credentialsUnset = WEBSITE_NAME === '' || WEBSITE_PASSWORD === '';
  if (credentialsUnset) {
    msgEl.textContent = 'Set WEBSITE_NAME and WEBSITE_PASSWORD near the top of script.js to enable the login ✏️';
    msgEl.classList.add('show', 'gate-setup-notice');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (credentialsUnset) { wrongDetails(true); return; }
    const enteredName = nameInput.value.trim();
    const enteredPass = passInput.value;
    const ok = enteredName === WEBSITE_NAME && enteredPass === WEBSITE_PASSWORD;
    if (ok) unlock(); else wrongDetails();
  });

  function wrongDetails(isSetupReminder) {
    [nameField, passField].forEach(f => {
      f.classList.remove('shake');
      void f.offsetWidth;
      f.classList.add('shake', 'error');
    });
    if (!isSetupReminder) {
      msgEl.classList.remove('gate-setup-notice');
      msgEl.textContent = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
      msgEl.classList.remove('show');
      void msgEl.offsetWidth;
      msgEl.classList.add('show');
    }
    setTimeout(() => { nameField.classList.remove('shake'); passField.classList.remove('shake'); }, 500);
  }

  function unlock() {
    // intentionally not persisted anywhere — the gate must reappear next load
    submitBtn.classList.add('unlocked');
    burstGateParticles();
    content.classList.add('celebrating');
    gate.classList.add('gate-unlocking');
    ensureMusicPlayer();
    tryPlayMusic();
    setTimeout(dismissGate, 1300);
  }

  function burstGateParticles() {
    const layer = document.createElement('div');
    layer.className = 'gate-burst-layer';
    const glyphs = ['✦', '✨', '💫'];
    layer.innerHTML = Array.from({ length: 40 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const dist = 90 + Math.random() * 220;
      const bx = Math.cos(angle) * dist, by = Math.sin(angle) * dist;
      return `<span class="gate-burst-particle" style="--bx:${bx}px;--by:${by}px;left:50%;top:42%"></span>`;
    }).join('');
    gate.appendChild(layer);
    setTimeout(() => layer.remove(), 1500);
  }
})();

/* Lightweight ambient canvas just for the login gate: stars, aurora
   glow, floating hearts and fireflies — independent of the main
   ambient/scene engines so the gate can render before anything
   else on the page has initialized. */
function runGateAtmosphere(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, dpr;
  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = innerWidth * dpr;
    h = canvas.height = innerHeight * dpr;
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
  }
  size();
  window.addEventListener('resize', size);

  const stars = Array.from({ length: 90 }, () => ({
    x: Math.random(), y: Math.random() * 0.7, r: 0.6 + Math.random() * 1.4, phase: Math.random() * Math.PI * 2,
  }));
  const fireflies = Array.from({ length: 14 }, () => ({
    x: Math.random(), y: 0.4 + Math.random() * 0.55, phase: Math.random() * Math.PI * 2, speed: 0.2 + Math.random() * 0.3,
  }));
  const hearts = Array.from({ length: 10 }, () => ({
    x: Math.random(), y: 1 + Math.random(), speed: 0.05 + Math.random() * 0.05, size: 5 + Math.random() * 6, sway: Math.random() * Math.PI * 2,
  }));

  let auroraShift = 0;
  function frame(t) {
    ctx.clearRect(0, 0, w, h);
    // aurora glow bands
    auroraShift = t * 0.00006;
    for (let i = 0; i < 3; i++) {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      const hue = 260 + i * 40 + Math.sin(auroraShift + i) * 20;
      grad.addColorStop(0, `hsla(${hue},80%,65%,0)`);
      grad.addColorStop(0.5, `hsla(${hue},80%,65%,.07)`);
      grad.addColorStop(1, `hsla(${hue},80%,65%,0)`);
      ctx.fillStyle = grad;
      ctx.save();
      ctx.translate(w * 0.5, h * (0.15 + i * 0.1));
      ctx.rotate(Math.sin(auroraShift + i) * 0.15);
      ctx.fillRect(-w, -h * 0.25, w * 2, h * 0.5);
      ctx.restore();
    }
    // twinkling stars
    stars.forEach(s => {
      const twinkle = 0.4 + 0.6 * Math.abs(Math.sin(t * 0.001 + s.phase));
      ctx.globalAlpha = twinkle;
      ctx.fillStyle = '#fff8e0';
      ctx.beginPath();
      ctx.arc(s.x * w, s.y * h, s.r * dpr, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    // fireflies
    fireflies.forEach(f => {
      const fx = (f.x + Math.sin(t * 0.0003 * f.speed + f.phase) * 0.03) * w;
      const fy = (f.y + Math.cos(t * 0.0002 * f.speed + f.phase) * 0.03) * h;
      const glow = 0.5 + 0.5 * Math.sin(t * 0.002 + f.phase);
      ctx.globalAlpha = glow * 0.85;
      ctx.fillStyle = '#ffe9a8';
      ctx.shadowColor = '#ffe9a8'; ctx.shadowBlur = 8 * dpr;
      ctx.beginPath();
      ctx.arc(fx, fy, 1.8 * dpr, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    });
    ctx.globalAlpha = 1;
    // floating hearts drifting upward
    hearts.forEach(hrt => {
      hrt.y -= hrt.speed * 0.0016;
      if (hrt.y < -0.05) { hrt.y = 1 + Math.random() * 0.3; hrt.x = Math.random(); }
      const hx = (hrt.x + Math.sin(t * 0.0006 + hrt.sway) * 0.02) * w;
      const hy = hrt.y * h;
      ctx.globalAlpha = 0.5;
      drawVectorHeart(ctx, hx, hy, hrt.size * dpr, '#ff9fc4');
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* =========================================================
   LOADING SCREEN
   ========================================================= */
(function initLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  const bar = document.getElementById('load-ring-bar');
  const pct = document.getElementById('load-percent');
  const heartsLayer = document.getElementById('load-hearts');
  const CIRC = 2 * Math.PI * 52; // matches r=52 in the SVG

  for (let i = 0; i < 10; i++) {
    const h = document.createElement('span');
    h.textContent = ['❤️', '💗', '✨'][i % 3];
    h.style.left = `${5 + Math.random() * 90}%`;
    h.style.animationDelay = `${Math.random() * 3.2}s`;
    h.style.fontSize = `${0.7 + Math.random() * 0.8}rem`;
    heartsLayer.appendChild(h);
  }

  let progress = 0;
  const tick = () => {
    progress = Math.min(100, progress + (100 - progress) * 0.09 + 1.2);
    bar.style.strokeDashoffset = String(CIRC * (1 - progress / 100));
    pct.textContent = `${Math.floor(progress)}%`;
    if (progress < 100) {
      requestAnimationFrame(tick);
    } else {
      setTimeout(() => screen.classList.add('hide'), 250);
      setTimeout(() => screen.remove(), 1200);
    }
  };
  bar.style.strokeDasharray = String(CIRC);
  bar.style.strokeDashoffset = String(CIRC);
  requestAnimationFrame(tick);
})();

/* =========================================================
   LENIS SMOOTH SCROLL
   ========================================================= */
function initSmoothScroll() {
  if (typeof Lenis === 'undefined') return; // offline fallback: native scroll still works
  const lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3), smoothWheel: true });
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
  if (typeof gsap !== 'undefined' && gsap.ticker) {
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  window.__lenis = lenis;
}

/* =========================================================
   CINEMATIC SCROLL REVEALS (GSAP, progressive enhancement)
   ========================================================= */
function initCinematicReveals() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll('.section').forEach((section) => {
    const eyebrow = section.querySelector('.section-eyebrow');
    const title = section.querySelector('.section-title, .proposal-question, .ending-text');
    const sub = section.querySelector('.section-sub');
    const targets = [eyebrow, title, sub].filter(Boolean);
    if (!targets.length) return;
    gsap.set(targets, { opacity: 0, y: 28 });
    ScrollTrigger.create({
      trigger: section,
      start: 'top 78%',
      once: true,
      onEnter: () => gsap.to(targets, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out' }),
    });
  });
}

/* =========================================================
   MAGNETIC BUTTONS
   ========================================================= */
function initMagneticButtons() {
  const targets = document.querySelectorAll('.yes-btn, .no-btn, .ghost-btn, #gift-box, .player-toggle');
  targets.forEach((el) => {
    el.classList.add('magnetic');
    const strength = 0.35;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const mx = (e.clientX - (r.left + r.width / 2)) * strength;
      const my = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${mx}px, ${my}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

/* =========================================================
   RIPPLE ON CLICK (anywhere)
   ========================================================= */
function initClickRipples() {
  const layer = document.getElementById('click-ripple-layer');
  document.addEventListener('pointerdown', (e) => {
    const dot = document.createElement('div');
    dot.className = 'click-ripple';
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    layer.appendChild(dot);
    setTimeout(() => dot.remove(), 750);
  });
}

/* =========================================================
   MY FAVORITE PERSON — golden particle photo reveal
   A heart is tapped -> it bursts into golden particles ->
   thousands of tiny particles sample the real photo and fly
   into place to "paint" it -> the sharp photo crossfades in
   inside a luxury glass frame -> her name handwrites in ->
   four lines reveal one by one.
   ========================================================= */
function initFavoritePerson() {
  const stage = document.getElementById('fp-stage');
  const trigger = document.getElementById('fp-trigger');
  const canvas = document.getElementById('fp-canvas');
  const frame = document.getElementById('fp-frame');
  const caption = document.getElementById('fp-caption');
  if (!stage || !trigger || !canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let rafId = null;
  let started = false;

  function sizeCanvas() {
    const rect = stage.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, rect.width * dpr);
    canvas.height = Math.max(1, rect.height * dpr);
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return rect;
  }

  function buildParticles(img, rect) {
    // draw the photo at a modest size on an offscreen canvas to sample pixels cheaply
    const maxW = Math.min(rect.width * 0.72, 320);
    const scale = maxW / img.width;
    const drawW = Math.round(img.width * scale);
    const drawH = Math.round(img.height * scale);
    const offX = (rect.width - drawW) / 2;
    const offY = (rect.height - drawH) / 2;

    const off = document.createElement('canvas');
    off.width = drawW; off.height = drawH;
    const octx = off.getContext('2d');
    octx.drawImage(img, 0, 0, drawW, drawH);
    let data;
    try { data = octx.getImageData(0, 0, drawW, drawH).data; }
    catch (err) { return false; } // e.g. file:// CORS restriction — caller falls back gracefully

    const stride = 3;
    const cx = rect.width / 2, cy = rect.height / 2;
    particles = [];
    for (let y = 0; y < drawH; y += stride) {
      for (let x = 0; x < drawW; x += stride) {
        const idx = (y * drawW + x) * 4;
        const r = data[idx], g = data[idx + 1], bl = data[idx + 2], a = data[idx + 3];
        if (a < 40) continue;
        const angle = Math.random() * Math.PI * 2;
        const dist = 140 + Math.random() * 260;
        particles.push({
          x: cx + Math.cos(angle) * dist,
          y: cy + Math.sin(angle) * dist,
          tx: offX + x, ty: offY + y,
          color: `rgb(${r},${g},${bl})`,
          size: 1 + Math.random() * 1.2,
          delay: Math.random() * 0.5,
        });
      }
    }
    return true;
  }

  function animateFormation(startTime) {
    const rect = stage.getBoundingClientRect();
    const now = performance.now();
    const elapsed = (now - startTime) / 1000;
    ctx.clearRect(0, 0, rect.width, rect.height);
    let allDone = true;
    for (const p of particles) {
      const t = Math.max(0, Math.min(1, (elapsed - p.delay) / 1.7));
      if (t < 1) allDone = false;
      const eased = 1 - Math.pow(1 - t, 3);
      const cx = p.x + (p.tx - p.x) * eased;
      const cy = p.y + (p.ty - p.y) * eased;
      ctx.globalAlpha = 0.35 + eased * 0.65;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(cx, cy, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (!allDone) {
      rafId = requestAnimationFrame(() => animateFormation(startTime));
    } else {
      onFormationComplete();
    }
  }

  function onFormationComplete() {
    frame.classList.add('show');
    setTimeout(() => { canvas.style.opacity = '0'; }, 550);
    setTimeout(() => { caption.classList.add('show'); }, 500);
  }

  function revealWithoutCanvas() {
    // graceful fallback if pixel sampling isn't available (e.g. strict local file CORS)
    frame.classList.add('show');
    setTimeout(() => { caption.classList.add('show'); }, 400);
  }

  function burstGoldenParticles() {
    const layer = document.createElement('div');
    layer.className = 'fp-burst-layer';
    for (let i = 0; i < 26; i++) {
      const s = document.createElement('span');
      s.className = 'fp-burst-particle';
      const angle = Math.random() * Math.PI * 2;
      const dist = 70 + Math.random() * 170;
      s.style.setProperty('--bx', `${Math.cos(angle) * dist}px`);
      s.style.setProperty('--by', `${Math.sin(angle) * dist}px`);
      s.style.animationDelay = `${Math.random() * 0.15}s`;
      layer.appendChild(s);
    }
    stage.appendChild(layer);
    setTimeout(() => layer.remove(), 1500);
  }

  trigger.addEventListener('click', () => {
    if (started) return;
    started = true;
    burstGoldenParticles();
    trigger.classList.add('hide');

    setTimeout(() => {
      const rect = sizeCanvas();
      const img = new Image();
      img.onload = () => {
        const ok = buildParticles(img, rect);
        if (ok && particles.length) {
          canvas.style.opacity = '1';
          animateFormation(performance.now());
        } else {
          revealWithoutCanvas();
        }
      };
      img.onerror = revealWithoutCanvas;
      img.src = document.getElementById('fp-image').getAttribute('src');
    }, 500);
  });

  window.addEventListener('resize', () => { if (canvas.style.opacity !== '0') sizeCanvas(); });

  const frameInner = stage.querySelector('.fp-frame-inner');
  if (frameInner) {
    frameInner.addEventListener('click', () => {
      if (!frame.classList.contains('show')) return;
      Lightbox.open([{
        mode: 'image', src: document.getElementById('fp-image').getAttribute('src'),
        title: 'Babbu ❤️', desc: 'My Favorite Smile · My Greatest Happiness · My Safe Place · My Forever', date: '',
      }], 0);
    });
  }
}

/* =========================================================
   A GIFT I'LL TREASURE FOREVER — box opens, particles paint
   the photo, then the message types itself in
   ========================================================= */
function typewriterLines(lines, speed = 32, lineGap = 450) {
  return new Promise((resolve) => {
    let li = 0;
    function typeLine() {
      if (li >= lines.length) { resolve(); return; }
      const el = lines[li];
      const text = el.dataset.text || '';
      el.classList.add('typing');
      let ci = 0;
      const iv = setInterval(() => {
        el.textContent = text.slice(0, ci + 1);
        ci++;
        if (ci >= text.length) {
          clearInterval(iv);
          el.classList.remove('typing');
          li++;
          setTimeout(typeLine, lineGap);
        }
      }, speed);
    }
    typeLine();
  });
}

function initGiftFrameChapter() {
  const stage = document.getElementById('gf-stage');
  const trigger = document.getElementById('gf-trigger');
  const canvas = document.getElementById('gf-canvas');
  const frame = document.getElementById('gf-frame');
  const frameInner = document.getElementById('gf-frame-inner');
  const caption = document.getElementById('gf-caption');
  if (!stage || !trigger || !canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let started = false;

  function sizeCanvas() {
    const rect = stage.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, rect.width * dpr);
    canvas.height = Math.max(1, rect.height * dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return rect;
  }

  function buildParticles(img, rect) {
    const maxW = Math.min(rect.width * 0.76, 320);
    const scale = maxW / img.width;
    const drawW = Math.round(img.width * scale);
    const drawH = Math.round(img.height * scale);
    const offX = (rect.width - drawW) / 2;
    const offY = (rect.height - drawH) / 2;
    const off = document.createElement('canvas');
    off.width = drawW; off.height = drawH;
    const octx = off.getContext('2d');
    octx.drawImage(img, 0, 0, drawW, drawH);
    let data;
    try { data = octx.getImageData(0, 0, drawW, drawH).data; }
    catch (err) { return false; }
    const stride = 3;
    const cx = rect.width / 2, cy = rect.height / 2;
    particles = [];
    for (let y = 0; y < drawH; y += stride) {
      for (let x = 0; x < drawW; x += stride) {
        const idx = (y * drawW + x) * 4;
        const r = data[idx], g = data[idx + 1], bl = data[idx + 2], a = data[idx + 3];
        if (a < 40) continue;
        const angle = Math.random() * Math.PI * 2;
        const dist = 140 + Math.random() * 260;
        particles.push({
          x: cx + Math.cos(angle) * dist, y: cy + Math.sin(angle) * dist,
          tx: offX + x, ty: offY + y, color: `rgb(${r},${g},${bl})`,
          size: 1 + Math.random() * 1.2, delay: Math.random() * 0.5,
        });
      }
    }
    return true;
  }

  function animateFormation(startTime) {
    const rect = stage.getBoundingClientRect();
    const now = performance.now();
    const elapsed = (now - startTime) / 1000;
    ctx.clearRect(0, 0, rect.width, rect.height);
    let allDone = true;
    for (const p of particles) {
      const t = Math.max(0, Math.min(1, (elapsed - p.delay) / 1.7));
      if (t < 1) allDone = false;
      const eased = 1 - Math.pow(1 - t, 3);
      const cx = p.x + (p.tx - p.x) * eased, cy = p.y + (p.ty - p.y) * eased;
      ctx.globalAlpha = 0.35 + eased * 0.65;
      ctx.fillStyle = p.color;
      ctx.beginPath(); ctx.arc(cx, cy, p.size, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (!allDone) requestAnimationFrame(() => animateFormation(startTime));
    else onFormationComplete();
  }

  function onFormationComplete() {
    frame.classList.add('show');
    setTimeout(() => { canvas.style.opacity = '0'; }, 550);
    setTimeout(startCaption, 500);
  }
  function revealWithoutCanvas() {
    // the photo loaded fine, we just couldn't sample its pixels for the
    // particle effect (e.g. a tainted canvas when opened via file://) —
    // show the real photo plainly rather than a "missing" message.
    frame.classList.add('show');
    setTimeout(startCaption, 400);
  }
  function showMissingPlaceholder() {
    // the photo genuinely failed to load
    frameInner.classList.add('gf-missing');
    frame.classList.add('show');
    setTimeout(startCaption, 400);
  }
  function startCaption() {
    caption.classList.add('show');
    typewriterLines(Array.from(caption.querySelectorAll('.gf-msg-line')));
  }

  function burstGold() {
    const layer = document.createElement('div');
    layer.className = 'gf-burst-layer';
    const flare = document.createElement('div');
    flare.className = 'gf-light-flare';
    layer.appendChild(flare);
    for (let i = 0; i < 30; i++) {
      const s = document.createElement('span');
      s.className = 'gf-burst-particle';
      const angle = Math.random() * Math.PI * 2;
      const dist = 80 + Math.random() * 190;
      s.style.left = '50%'; s.style.top = '50%';
      s.style.setProperty('--bx', `${Math.cos(angle) * dist}px`);
      s.style.setProperty('--by', `${Math.sin(angle) * dist}px`);
      s.style.animationDelay = `${Math.random() * 0.2}s`;
      layer.appendChild(s);
    }
    stage.appendChild(layer);
    setTimeout(() => layer.remove(), 1600);
  }

  trigger.addEventListener('click', () => {
    if (started) return;
    started = true;
    trigger.classList.add('opening');
    setTimeout(burstGold, 280);
    setTimeout(() => {
      trigger.classList.add('hide');
      const rect = sizeCanvas();
      const img = new Image();
      img.onload = () => {
        const ok = buildParticles(img, rect);
        if (ok && particles.length) {
          canvas.style.opacity = '1';
          animateFormation(performance.now());
        } else revealWithoutCanvas();
      };
      img.onerror = showMissingPlaceholder;
      img.src = document.getElementById('gf-image').getAttribute('src');
    }, 650);
  });

  window.addEventListener('resize', () => { if (canvas.style.opacity !== '0') sizeCanvas(); });

  frameInner.addEventListener('click', () => {
    if (!frame.classList.contains('show') || frameInner.classList.contains('gf-missing')) return;
    Lightbox.open([{
      mode: 'image', src: document.getElementById('gf-image').getAttribute('src'),
      title: "A Gift I'll Treasure Forever ❤️", desc: 'The wooden frame you gave me.', date: '',
    }], 0);
  });
}

/* =========================================================
   PREMIUM FULLSCREEN LIGHTBOX
   Shared by Gallery, Our Journey memories, Babbu's portrait,
   and the treasured gift image. Supports zoom (buttons, wheel,
   pinch, double-tap), rotate, fullscreen, drag-to-pan with
   momentum, swipe navigation, and arrow-key controls.
   ========================================================= */
const Lightbox = (function () {
  let list = [], index = 0;
  let scale = 1, rotate = 0, panX = 0, panY = 0;
  let startDist = 0, startScale = 1;
  let dragging = false, dragStartX = 0, dragStartY = 0, dragOriginX = 0, dragOriginY = 0;
  let lastMoveTime = 0, velX = 0, velY = 0, momentumRAF = null;
  let lastTapTime = 0;
  let el, wrap, imgEl, titleEl, descEl, dateEl, counterEl, frameEl, prevBtn, nextBtn;
  const pointers = new Map();

  function init() {
    el = document.getElementById('lightbox');
    if (!el) return;
    wrap = document.getElementById('lb-image-wrap');
    imgEl = document.getElementById('lb-image');
    titleEl = document.getElementById('lb-title');
    descEl = document.getElementById('lb-desc');
    dateEl = document.getElementById('lb-date');
    counterEl = document.getElementById('lb-counter');
    frameEl = document.getElementById('lb-frame');
    prevBtn = document.getElementById('lb-prev');
    nextBtn = document.getElementById('lb-next');

    document.getElementById('lb-close').addEventListener('click', close);
    prevBtn.addEventListener('click', () => go(-1));
    nextBtn.addEventListener('click', () => go(1));
    document.getElementById('lb-zoom-in').addEventListener('click', () => setScale(scale + 0.5, true));
    document.getElementById('lb-zoom-out').addEventListener('click', () => setScale(scale - 0.5, true));
    document.getElementById('lb-rotate').addEventListener('click', () => { rotate += 90; apply(true); });
    document.getElementById('lb-fullscreen').addEventListener('click', toggleFullscreen);

    document.addEventListener('keydown', (e) => {
      if (el.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === '+' || e.key === '=') setScale(scale + 0.3, true);
      else if (e.key === '-' || e.key === '_') setScale(scale - 0.3, true);
    });

    frameEl.addEventListener('wheel', (e) => {
      e.preventDefault();
      setScale(scale - e.deltaY * 0.0016, false);
    }, { passive: false });

    frameEl.addEventListener('dblclick', () => toggleZoom());

    frameEl.addEventListener('pointerdown', (e) => {
      try { frameEl.setPointerCapture(e.pointerId); } catch (err) {}
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 1) {
        dragging = true;
        dragStartX = e.clientX; dragStartY = e.clientY;
        dragOriginX = panX; dragOriginY = panY;
        velX = 0; velY = 0; lastMoveTime = performance.now();
        cancelMomentum();
      }
    });
    frameEl.addEventListener('pointermove', (e) => {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 2) {
        const pts = Array.from(pointers.values());
        const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        if (!startDist) { startDist = dist; startScale = scale; }
        setScale(startScale * (dist / startDist), false);
      } else if (pointers.size === 1 && dragging) {
        const now = performance.now();
        const dt = Math.max(1, now - lastMoveTime);
        const nx = dragOriginX + (e.clientX - dragStartX);
        const ny = dragOriginY + (e.clientY - dragStartY);
        velX = (nx - panX) / dt; velY = (ny - panY) / dt;
        panX = nx; panY = ny;
        lastMoveTime = now;
        apply(false);
      }
    });
    function endPointer(e) {
      pointers.delete(e.pointerId);
      if (pointers.size < 2) startDist = 0;
      if (pointers.size === 0 && dragging) {
        dragging = false;
        const swipeDX = panX - dragOriginX;
        if (scale <= 1.05 && Math.abs(swipeDX) > 70) {
          panX = 0; panY = 0; apply(true);
          go(swipeDX < 0 ? 1 : -1);
        } else {
          applyMomentum();
        }
      }
    }
    frameEl.addEventListener('pointerup', endPointer);
    frameEl.addEventListener('pointercancel', endPointer);

    // double-tap fallback for touch devices
    frameEl.addEventListener('touchend', (e) => {
      const now = Date.now();
      if (now - lastTapTime < 300 && e.changedTouches.length === 1) toggleZoom();
      lastTapTime = now;
    });
  }

  function toggleZoom() {
    if (scale > 1.05) { scale = 1; panX = 0; panY = 0; apply(true); }
    else { setScale(2.4, true); }
  }
  function applyMomentum() {
    function step() {
      velX *= 0.92; velY *= 0.92;
      panX += velX * 16; panY += velY * 16;
      clampPan();
      apply(false);
      if (Math.abs(velX) > 0.02 || Math.abs(velY) > 0.02) momentumRAF = requestAnimationFrame(step);
    }
    momentumRAF = requestAnimationFrame(step);
  }
  function cancelMomentum() { if (momentumRAF) cancelAnimationFrame(momentumRAF); momentumRAF = null; }
  function clampPan() {
    const maxPan = 90 * scale;
    panX = Math.max(-maxPan, Math.min(maxPan, panX));
    panY = Math.max(-maxPan, Math.min(maxPan, panY));
  }
  function setScale(v, snap) {
    scale = Math.max(1, Math.min(4, v));
    if (scale <= 1.001) { panX = 0; panY = 0; }
    clampPan();
    apply(snap);
  }
  function apply(snap) {
    wrap.classList.toggle('snap', !!snap);
    wrap.style.transform = `translate(${panX}px, ${panY}px) scale(${scale}) rotate(${rotate}deg)`;
  }

  function render() {
    const item = list[index];
    scale = 1; rotate = 0; panX = 0; panY = 0;
    apply(true);
    if (item.mode === 'image') {
      imgEl.style.background = 'none';
      imgEl.innerHTML = `<img src="${item.src}" alt="${item.title || ''}" draggable="false">`;
    } else if (item.mode === 'missing') {
      imgEl.style.background = 'linear-gradient(135deg,#e9e2f5,#f7dfe8)';
      imgEl.innerHTML = `<span style="font-size:.85rem;opacity:.65;font-family:var(--font-cute);padding:0 1.5rem;text-align:center;">add your photo here</span>`;
    } else {
      imgEl.style.background = item.gradient || '#eee';
      imgEl.innerHTML = `<span>${item.emoji || ''}</span>`;
    }
    titleEl.textContent = item.title || '';
    descEl.textContent = item.desc || '';
    dateEl.textContent = item.date || '';
    const multi = list.length > 1;
    counterEl.textContent = multi ? `${index + 1} / ${list.length}` : '';
    prevBtn.style.display = multi ? '' : 'none';
    nextBtn.style.display = multi ? '' : 'none';
  }
  function go(dir) {
    if (!list.length) return;
    index = (index + dir + list.length) % list.length;
    render();
  }
  function open(newList, startIndex) {
    list = newList || [];
    index = startIndex || 0;
    if (!list.length) return;
    el.hidden = false;
    document.body.style.overflow = 'hidden';
    render();
  }
  function close() {
    el.hidden = true;
    document.body.style.overflow = '';
    cancelMomentum();
    if (document.fullscreenElement) { try { document.exitFullscreen(); } catch (e) {} }
  }
  function toggleFullscreen() {
    if (!document.fullscreenElement) { try { el.requestFullscreen(); } catch (e) {} }
    else { try { document.exitFullscreen(); } catch (e) {} }
  }

  return { init, open, close };
})();

function initLightbox() { Lightbox.init(); }

/* =========================================================
   FINAL CHAPTER — stars form "Babbu ❤️", a message fades in,
   a handwritten signature, then a glowing heart that unleashes
   one last celebration before the site fades to black.
   ========================================================= */
function initEndingFinale() {
  const section = document.getElementById('ending');
  const scene = section?.querySelector('.moon-scene');
  const starCanvas = document.getElementById('ending-star-canvas');
  const message = document.getElementById('ending-message');
  const signature = document.getElementById('ending-signature');
  const heartBtn = document.getElementById('ending-heart-btn');
  const finaleCanvas = document.getElementById('ending-finale-canvas');
  const overlay = document.getElementById('ending-finale-overlay');
  if (!section || !scene || !starCanvas) return;

  signature.textContent = `${signature.dataset.line1}\n${signature.dataset.line2}`;

  let started = false;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && e.intersectionRatio > 0.4 && !started) {
        started = true;
        runStarText();
      }
    });
  }, { threshold: 0.4 });
  io.observe(section);

  function runStarText() {
    const rect = scene.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    starCanvas.width = rect.width * dpr;
    starCanvas.height = rect.height * dpr;
    const ctx = starCanvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // render target text to an offscreen canvas to sample star positions from
    const off = document.createElement('canvas');
    off.width = rect.width; off.height = rect.height;
    const octx = off.getContext('2d');
    octx.fillStyle = '#fff';
    const fontSize = Math.max(22, Math.min(46, rect.width * 0.09));
    octx.font = `700 ${fontSize}px 'Playfair Display', serif`;
    octx.textAlign = 'center';
    octx.textBaseline = 'middle';
    octx.fillText('Babbu ❤️', rect.width / 2, rect.height / 2);
    const data = octx.getImageData(0, 0, rect.width, rect.height).data;

    const targets = [];
    const stride = 3;
    for (let y = 0; y < rect.height; y += stride) {
      for (let x = 0; x < rect.width; x += stride) {
        if (data[(y * rect.width + x) * 4 + 3] > 120) targets.push({ x, y });
      }
    }
    // shuffle so the formation doesn't paint left-to-right in an obvious grid sweep
    for (let i = targets.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [targets[i], targets[j]] = [targets[j], targets[i]];
    }

    const stars = targets.map(t => ({
      x: Math.random() * rect.width, y: Math.random() * rect.height,
      tx: t.x, ty: t.y, delay: Math.random() * 0.6, size: 0.8 + Math.random() * 1.4,
      twinkle: Math.random() * Math.PI * 2,
    }));

    const start = performance.now();
    function frame(now) {
      const elapsed = (now - start) / 1000;
      ctx.clearRect(0, 0, rect.width, rect.height);
      let allDone = true;
      for (const s of stars) {
        const t = Math.max(0, Math.min(1, (elapsed - s.delay) / 1.6));
        if (t < 1) allDone = false;
        const eased = 1 - Math.pow(1 - t, 3);
        const cx = s.x + (s.tx - s.x) * eased;
        const cy = s.y + (s.ty - s.y) * eased;
        const twinkle = 0.7 + 0.3 * Math.sin(elapsed * 3 + s.twinkle);
        ctx.globalAlpha = (0.3 + eased * 0.7) * twinkle;
        ctx.fillStyle = '#fff8e0';
        ctx.shadowColor = '#ffe9b0'; ctx.shadowBlur = 4;
        ctx.beginPath(); ctx.arc(cx, cy, s.size, 0, Math.PI * 2); ctx.fill();
      }
      ctx.shadowBlur = 0; ctx.globalAlpha = 1;
      if (!allDone) requestAnimationFrame(frame);
      else onStarsFormed();
    }
    requestAnimationFrame(frame);
  }

  function onStarsFormed() {
    setTimeout(() => message.classList.add('show'), 500);
    setTimeout(() => heartBtn.classList.add('show'), 4200);
  }

  heartBtn.addEventListener('click', () => {
    heartBtn.classList.add('hide');
    finaleCanvas.classList.add('show');
    runFinaleCelebration();
    setTimeout(() => overlay.classList.add('show'), 2600);
  });

  function runFinaleCelebration() {
    finaleCanvas.width = window.innerWidth;
    finaleCanvas.height = window.innerHeight;
    const ctx = finaleCanvas.getContext('2d');
    const colors = ['#ffd77a', '#ff9fc7', '#c9a7ff', '#fff2b0', '#ff6fa5'];
    let particles = [];

    function spawnBurst() {
      const x = Math.random() * finaleCanvas.width;
      const y = finaleCanvas.height * (0.15 + Math.random() * 0.4);
      const isHeart = Math.random() > 0.55;
      const count = 46;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const speed = 2 + Math.random() * 3.4;
        particles.push({
          x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1,
          color: colors[Math.floor(Math.random() * colors.length)], isHeart,
        });
      }
    }
    const spawnTimer = setInterval(spawnBurst, 320);
    setTimeout(() => clearInterval(spawnTimer), 3000);

    // a few floating lanterns drifting upward through the whole finale
    const lanterns = Array.from({ length: 6 }, () => ({
      x: Math.random() * finaleCanvas.width, y: finaleCanvas.height + Math.random() * 200,
      speed: 0.4 + Math.random() * 0.5, sway: Math.random() * 2,
    }));

    let frames = 0;
    function loop() {
      ctx.clearRect(0, 0, finaleCanvas.width, finaleCanvas.height);
      particles.forEach(p => {
        ctx.globalAlpha = Math.max(p.life, 0);
        if (p.isHeart) drawVectorHeart(ctx, p.x, p.y, 6, p.color);
        else { ctx.fillStyle = p.color; ctx.shadowColor = p.color; ctx.shadowBlur = 10; ctx.beginPath(); ctx.arc(p.x, p.y, 2.6, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0; }
        p.x += p.vx; p.y += p.vy; p.vy += 0.035; p.life -= 0.012;
      });
      particles = particles.filter(p => p.life > 0);

      ctx.globalAlpha = 0.9;
      lanterns.forEach(l => {
        ctx.save();
        ctx.translate(l.x, l.y);
        const grad = ctx.createRadialGradient(0, 0, 1, 0, 0, 14);
        grad.addColorStop(0, 'rgba(255,225,150,.95)'); grad.addColorStop(1, 'rgba(255,150,80,0)');
        ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(0, 0, 14, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#ffedb0'; ctx.fillRect(-5, -6, 10, 12);
        ctx.restore();
        l.y -= l.speed; l.x += Math.sin(l.y / 60) * l.sway;
        if (l.y < -30) { l.y = finaleCanvas.height + 30; l.x = Math.random() * finaleCanvas.width; }
      });

      ctx.globalAlpha = 1;
      frames++;
      if (frames < 460) requestAnimationFrame(loop);
    }
    loop();
  }
}

/* =========================================================
   MY ENTIRE WORLD — underwater cinematic portrait chapter
   Full-bleed portrait + Canvas2D underwater light rays, bubbles,
   caustics and drifting dust, a slow scroll-scrubbed zoom, a
   paced text reveal (handwritten name + typed poem), and a
   white-flash hand-off into the proposal.
   ========================================================= */
function initEntireWorld() {
  const section = document.getElementById('entire-world');
  if (!section) return;
  const wrap = document.getElementById('ew-portrait-wrap');
  const img = document.getElementById('ew-portrait');
  const canvas = document.getElementById('ew-canvas');
  const line1 = document.getElementById('ew-line1');
  const nameEl = document.getElementById('ew-name');
  const poemLines = Array.from(section.querySelectorAll('.ew-poem-line'));
  const closing = document.getElementById('ew-closing');
  const whiteFade = document.getElementById('ew-white-fade');

  function markMissing() { wrap.classList.add('ew-missing'); }
  let revealed = false;
  function revealPortrait() {
    if (revealed) return;
    revealed = true;
    img.classList.add('reveal');
    wrap.classList.add('ew-revealed');
  }
  if (img.complete && img.naturalWidth === 0) markMissing();
  else img.addEventListener('error', markMissing);

  // gentle mouse parallax — a few pixels of drift, applied as CSS custom
  // properties consumed by the wrap's floating-motion keyframe (see CSS),
  // so it never fights with the Ken Burns zoom or the float animation.
  if (!matchMedia('(hover: none), (pointer: coarse)').matches) {
    section.addEventListener('pointermove', (e) => {
      const r = section.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      wrap.style.setProperty('--par-x', `${px * -14}px`);
      wrap.style.setProperty('--par-y', `${py * -10}px`);
    });
  }

  /* ---------- underwater Canvas2D atmosphere ---------- */
  const ctx = canvas.getContext('2d');
  let running = false, rafId = null;
  let rays = [], bubbles = [], dust = [];

  function sizeCanvas() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = section.clientWidth * dpr;
    canvas.height = section.clientHeight * dpr;
    canvas.style.width = section.clientWidth + 'px';
    canvas.style.height = section.clientHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function seedParticles() {
    const w = section.clientWidth, h = section.clientHeight;
    const dense = !(matchMedia('(pointer: coarse)').matches && (navigator.hardwareConcurrency || 8) <= 4);
    rays = Array.from({ length: dense ? 5 : 3 }, (_, i) => ({
      x: (w / 6) * (i + 1) + (Math.random() - 0.5) * 60,
      width: 60 + Math.random() * 70, sway: Math.random() * 2, phase: Math.random() * Math.PI * 2,
    }));
    bubbles = Array.from({ length: dense ? 34 : 18 }, () => ({
      x: Math.random() * w, y: h + Math.random() * h,
      r: 1.5 + Math.random() * 4, speed: 0.3 + Math.random() * 0.7, wob: Math.random() * Math.PI * 2,
    }));
    dust = Array.from({ length: dense ? 46 : 24 }, () => ({
      x: Math.random() * w, y: Math.random() * h, r: 0.6 + Math.random() * 1.2,
      vx: (Math.random() - 0.5) * 0.12, vy: (Math.random() - 0.5) * 0.1, tw: Math.random() * Math.PI * 2,
    }));
  }

  function frame(t) {
    const w = section.clientWidth, h = section.clientHeight;
    ctx.clearRect(0, 0, w, h);

    // light rays swaying gently
    rays.forEach(r => {
      const sway = Math.sin(t * 0.00012 + r.phase) * 22 * r.sway;
      const grad = ctx.createLinearGradient(r.x + sway, 0, r.x + sway + r.width * 0.3, h);
      grad.addColorStop(0, 'rgba(180,225,255,.22)');
      grad.addColorStop(0.6, 'rgba(140,200,240,.08)');
      grad.addColorStop(1, 'rgba(140,200,240,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(r.x + sway - r.width / 2, 0);
      ctx.lineTo(r.x + sway + r.width / 2, 0);
      ctx.lineTo(r.x + sway + r.width * 1.4, h);
      ctx.lineTo(r.x + sway - r.width * 0.6, h);
      ctx.closePath(); ctx.fill();
    });

    // caustic shimmer (soft moving light patches)
    ctx.globalAlpha = 0.5;
    for (let i = 0; i < 4; i++) {
      const cx = (w * (0.2 + i * 0.22)) + Math.sin(t * 0.00015 + i) * 40;
      const cy = (h * 0.3) + Math.cos(t * 0.0002 + i * 2) * 60;
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 90);
      g.addColorStop(0, 'rgba(200,235,255,.16)'); g.addColorStop(1, 'rgba(200,235,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(cx, cy, 90, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;

    // rising bubbles
    bubbles.forEach(b => {
      b.y -= b.speed;
      b.wob += 0.02;
      const bx = b.x + Math.sin(b.wob) * 6;
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(220,245,255,.5)';
      ctx.lineWidth = 0.8;
      ctx.arc(bx, b.y, b.r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,.08)';
      ctx.fill();
      if (b.y < -10) { b.y = h + 10; b.x = Math.random() * w; }
    });

    // drifting glow dust
    dust.forEach(d => {
      d.x += d.vx; d.y += d.vy; d.tw += 0.03;
      const alpha = 0.25 + 0.25 * Math.sin(d.tw);
      ctx.fillStyle = `rgba(255,244,220,${alpha})`;
      ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2); ctx.fill();
      if (d.x < 0) d.x = w; if (d.x > w) d.x = 0;
      if (d.y < 0) d.y = h; if (d.y > h) d.y = 0;
    });

    if (running) rafId = requestAnimationFrame(frame);
  }

  function start() {
    if (running) return;
    running = true;
    sizeCanvas();
    seedParticles();
    rafId = requestAnimationFrame(frame);
  }
  function stop() { running = false; if (rafId) cancelAnimationFrame(rafId); }

  const visIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { start(); revealPortrait(); }
      else { stop(); }
    });
  }, { threshold: 0.05 });
  visIO.observe(section);
  window.addEventListener('resize', () => { if (running) sizeCanvas(); });

  /* ---------- paced text reveal ---------- */
  let sequenceStarted = false;
  const textIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && e.intersectionRatio > 0.45 && !sequenceStarted) {
        sequenceStarted = true;
        runTextSequence();
      }
    });
  }, { threshold: 0.45 });
  textIO.observe(section);

  function runTextSequence() {
    line1.classList.add('show');
    setTimeout(() => {
      nameEl.classList.add('show');
      setTimeout(() => {
        typewriterLines(poemLines, 34, 480).then(() => {
          setTimeout(() => closing.classList.add('show'), 700);
        });
      }, 2200);
    }, 2000);
  }

  /* ---------- slow scroll-scrubbed dive toward her face ---------- */
  if (window.gsap && window.ScrollTrigger) {
    gsap.timeline({ scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: 0.6 } })
      .to(wrap, { scale: 1.22, ease: 'none' }, 0);
  }

  /* ---------- white-flash hand-off into the proposal ---------- */
  const proposalSection = document.getElementById('proposal');
  if (proposalSection) {
    let fired = false;
    const flashIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !fired) {
          fired = true;
          whiteFade.classList.add('show');
          setTimeout(() => whiteFade.classList.remove('show'), 1500);
        }
      });
    }, { threshold: 0.02 });
    flashIO.observe(proposalSection);
  }
}
