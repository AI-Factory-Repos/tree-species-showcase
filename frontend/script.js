/* ============================================================
   Tree Species Showcase — script.js
   Populates species cards + interactive lightbox gallery
   ============================================================ */

// --------------- Data ---------------

const SPECIES = [
  {
    name: 'Coast Redwood',
    latin: 'Sequoia sempervirens',
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80',
    desc: 'The tallest living trees on Earth, native to the coastal fog belt of California and Oregon.'
  },
  {
    name: 'Japanese Maple',
    latin: 'Acer palmatum',
    img: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&q=80',
    desc: 'Prized for its delicate, star-shaped leaves that blaze brilliant red and orange each autumn.'
  },
  {
    name: 'Weeping Willow',
    latin: 'Salix babylonica',
    img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
    desc: 'Iconic for its graceful, pendulous branches that sweep toward the ground near water.'
  },
  {
    name: 'Scots Pine',
    latin: 'Pinus sylvestris',
    img: 'https://images.unsplash.com/photo-1425036458755-dc303a604201?w=600&q=80',
    desc: 'A hardy evergreen conifer with distinctive orange-red bark and blue-green needles.'
  },
  {
    name: 'Silver Birch',
    latin: 'Betula pendula',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    desc: 'Recognised by its striking white papery bark and delicate, fluttering leaves.'
  },
  {
    name: 'Cherry Blossom',
    latin: 'Prunus serrulata',
    img: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&q=80',
    desc: 'Japan\'s national flower symbol; famous for its spectacular spring bloom of pink-white flowers.'
  }
];

const GALLERY_PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=80',
    caption: 'Coast Redwoods — Ancient giants piercing through morning mist, California'
  },
  {
    src: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&q=80',
    caption: 'Japanese Maple — Fiery autumn leaves glow against a soft garden backdrop'
  },
  {
    src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80',
    caption: 'Aerial Forest Canopy — Endless tapestry of treetops from above'
  },
  {
    src: 'https://images.unsplash.com/photo-1425036458755-dc303a604201?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1425036458755-dc303a604201?w=400&q=80',
    caption: 'Scots Pine — Lone sentinel standing against a wide winter sky'
  },
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
    caption: 'Mountain Forest — Dense spruce forest cloaks the high alpine slopes'
  },
  {
    src: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&q=80',
    caption: 'Cherry Blossom — Delicate pink petals herald the arrival of spring in Kyoto'
  },
  {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80',
    caption: 'Enchanted Forest — Shafts of golden light filter through a misty woodland'
  },
  {
    src: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&q=80',
    caption: 'Tall Timber — Towering straight trunks create a natural cathedral'
  },
  {
    src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&q=80',
    caption: 'Sun Through the Canopy — Radiant beams weave between ancient boughs'
  },
  {
    src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&q=80',
    caption: 'Golden Hour Woodland — Warm amber light transforms an autumn grove'
  },
  {
    src: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=400&q=80',
    caption: 'Deciduous Autumn — Sweeping hillside ablaze with fall colour'
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80',
    caption: 'Sunrise Forest — Dawn mist hovers above a tranquil woodland trail'
  },
  {
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&q=80',
    caption: 'Lakeside Trees — Mirror reflections of pines shimmer on still water'
  },
  {
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80',
    caption: 'Lone Oak — A solitary oak commands a mist-veiled hillside at dawn'
  },
  {
    src: 'https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?w=400&q=80',
    caption: 'Winter Birches — Silver trunks glow against a pale grey winter sky'
  }
];

// --------------- Species Cards ---------------

function renderSpeciesCards() {
  const grid = document.getElementById('speciesGrid');
  if (!grid) return;
  grid.innerHTML = SPECIES.map(s => `
    <article class="species-card">
      <img class="species-card-img" src="${s.img}" alt="${s.name}" loading="lazy" />
      <div class="species-card-body">
        <div class="species-card-name">${s.name}</div>
        <div class="species-card-latin">${s.latin}</div>
        <p class="species-card-desc">${s.desc}</p>
      </div>
    </article>
  `).join('');
}

// --------------- Gallery Grid ---------------

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = GALLERY_PHOTOS.map((photo, index) => `
    <div class="gallery-thumb" data-index="${index}" role="button" tabindex="0"
         aria-label="Open photo: ${photo.caption}">
      <img src="${photo.thumb}" alt="${photo.caption}" loading="lazy" />
      <div class="gallery-thumb-overlay">
        <span class="gallery-thumb-caption">${photo.caption}</span>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => openLightbox(parseInt(thumb.dataset.index, 10)));
    thumb.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(parseInt(thumb.dataset.index, 10));
      }
    });
  });
}

// --------------- Lightbox ---------------

let currentIndex = 0;
const total = GALLERY_PHOTOS.length;

const lightbox      = document.getElementById('lightbox');
const overlay       = document.getElementById('lightboxOverlay');
const closeBtn      = document.getElementById('lightboxClose');
const prevBtn       = document.getElementById('lightboxPrev');
const nextBtn       = document.getElementById('lightboxNext');
const lightboxImg   = document.getElementById('lightboxImg');
const captionEl     = document.getElementById('lightboxCaption');
const counterEl     = document.getElementById('lightboxCounter');

function openLightbox(index) {
  currentIndex = index;
  updateLightboxContent(false);
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  closeBtn.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = '';
}

function updateLightboxContent(animate) {
  const photo = GALLERY_PHOTOS[currentIndex];

  const doUpdate = () => {
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.caption;
    captionEl.textContent = photo.caption;
    counterEl.textContent = `${currentIndex + 1} / ${total}`;
  };

  if (animate) {
    lightboxImg.classList.add('fading');
    setTimeout(() => {
      doUpdate();
      lightboxImg.classList.remove('fading');
    }, 200);
  } else {
    doUpdate();
  }
}

function showPrev() {
  currentIndex = (currentIndex - 1 + total) % total;
  updateLightboxContent(true);
}

function showNext() {
  currentIndex = (currentIndex + 1) % total;
  updateLightboxContent(true);
}

// Event listeners
closeBtn.addEventListener('click', closeLightbox);
overlay.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

document.addEventListener('keydown', e => {
  if (lightbox.hidden) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   showPrev();
  if (e.key === 'ArrowRight')  showNext();
});

// Touch / swipe support
let touchStartX = 0;
lightbox.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].clientX;
}, { passive: true });
lightbox.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) dx < 0 ? showNext() : showPrev();
}, { passive: true });

// --------------- Init ---------------

document.addEventListener('DOMContentLoaded', () => {
  renderSpeciesCards();
  renderGallery();
});
