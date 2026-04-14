/* ==============================================
   Tree Species Showcase — main script
   ============================================== */

document.addEventListener('DOMContentLoaded', () => {
  initGallery();
  initCounters();
  initFactCarousel();
});

/* --------------------------------------------------
   Gallery (stub — wire to API when available)
   -------------------------------------------------- */
function initGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  // Gallery implementation lives here; kept as loading placeholder
  // until a backend API contract is provided (see FE-5).
  grid.innerHTML = '<p class="loading-msg">Species gallery coming soon.</p>';
}

/* --------------------------------------------------
   Animated Counters
   -------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll('.counter-value');
  if (!counters.length) return;

  const DURATION = 2000; // ms

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = formatNumber(current) + suffix;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = formatNumber(target) + suffix;
      }
    };

    requestAnimationFrame(tick);
  };

  // Use IntersectionObserver so counters only animate when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach((el) => observer.observe(el));
}

function formatNumber(n) {
  return n.toLocaleString('en-US');
}

/* --------------------------------------------------
   Rotating Fact Cards Carousel
   -------------------------------------------------- */
function initFactCarousel() {
  const carousel = document.getElementById('fact-carousel');
  const dotsContainer = document.getElementById('carousel-dots');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!carousel) return;

  // All cards (NodeList → Array)
  let allCards = Array.from(carousel.querySelectorAll('.fact-card'));
  let visibleCards = [...allCards]; // filtered subset
  let currentIndex = 0;
  let autoTimer = null;

  /* ---- Dot generation ---- */
  function buildDots() {
    dotsContainer.innerHTML = '';
    visibleCards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'dot' + (i === currentIndex ? ' active' : '');
      dot.setAttribute('aria-label', `Fact ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
  }

  /* ---- Show card at index ---- */
  function showCard(index) {
    // Hide all cards
    allCards.forEach((c) => {
      c.classList.remove('active', 'exit-left');
      c.style.display = 'none';
    });

    if (!visibleCards.length) return;

    currentIndex = (index + visibleCards.length) % visibleCards.length;
    const card = visibleCards[currentIndex];
    card.style.display = 'flex';
    // Force reflow to restart CSS transition
    void card.offsetWidth;
    card.classList.add('active');
    updateDots();
  }

  function goTo(index) {
    showCard(index);
    restartAuto();
  }

  function next() {
    showCard(currentIndex + 1);
  }

  function prev() {
    showCard(currentIndex - 1);
  }

  /* ---- Auto-rotation ---- */
  function startAuto() {
    autoTimer = setInterval(next, 5000);
  }

  function restartAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  /* ---- Category filter ---- */
  function applyFilter(category) {
    if (category === 'all') {
      visibleCards = [...allCards];
    } else {
      visibleCards = allCards.filter((c) => c.dataset.category === category);
    }
    currentIndex = 0;
    buildDots();
    showCard(0);
    restartAuto();
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
    });
  });

  /* ---- Button listeners ---- */
  prevBtn.addEventListener('click', () => { prev(); restartAuto(); });
  nextBtn.addEventListener('click', () => { next(); restartAuto(); });

  /* ---- Keyboard navigation ---- */
  document.addEventListener('keydown', (e) => {
    const factsSection = document.getElementById('facts');
    if (!factsSection) return;
    const rect = factsSection.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!inView) return;

    if (e.key === 'ArrowLeft') { prev(); restartAuto(); }
    if (e.key === 'ArrowRight') { next(); restartAuto(); }
  });

  /* ---- Touch / swipe support ---- */
  let touchStartX = 0;
  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 40) {
      delta < 0 ? next() : prev();
      restartAuto();
    }
  }, { passive: true });

  /* ---- Init ---- */
  buildDots();
  showCard(0);
  startAuto();
}
