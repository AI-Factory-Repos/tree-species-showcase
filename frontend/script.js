const treeSpecies = [
  {
    id: 1,
    name: 'Oak',
    scientific: 'Quercus robur',
    emoji: '🌳',
    color: '#5a7a3a',
    accentColor: '#8db360',
    characteristics: [
      { icon: '📏', label: 'Height', value: '20–40 m' },
      { icon: '📅', label: 'Lifespan', value: 'Up to 1,000 yrs' },
      { icon: '🌍', label: 'Native', value: 'Europe & W. Asia' },
      { icon: '🍂', label: 'Leaf Type', value: 'Deciduous' },
    ],
    description: 'Renowned for its strength and longevity, the oak is a keystone species supporting hundreds of wildlife species.'
  },
  {
    id: 2,
    name: 'Maple',
    scientific: 'Acer saccharum',
    emoji: '🍁',
    color: '#b5451b',
    accentColor: '#e8793a',
    characteristics: [
      { icon: '📏', label: 'Height', value: '18–35 m' },
      { icon: '📅', label: 'Lifespan', value: '200–300 yrs' },
      { icon: '🌍', label: 'Native', value: 'North America' },
      { icon: '🍂', label: 'Leaf Type', value: 'Deciduous' },
    ],
    description: 'Famous for its brilliant autumn foliage and as the primary source of maple syrup.'
  },
  {
    id: 3,
    name: 'Pine',
    scientific: 'Pinus sylvestris',
    emoji: '🌲',
    color: '#2d6a4f',
    accentColor: '#52b788',
    characteristics: [
      { icon: '📏', label: 'Height', value: '20–35 m' },
      { icon: '📅', label: 'Lifespan', value: '150–300 yrs' },
      { icon: '🌍', label: 'Native', value: 'Eurasia' },
      { icon: '🍃', label: 'Leaf Type', value: 'Evergreen' },
    ],
    description: 'A hardy evergreen conifer that thrives in cold climates and poor soils across vast northern forests.'
  },
  {
    id: 4,
    name: 'Cherry Blossom',
    scientific: 'Prunus serrulata',
    emoji: '🌸',
    color: '#c9648a',
    accentColor: '#f4a8c7',
    characteristics: [
      { icon: '📏', label: 'Height', value: '5–12 m' },
      { icon: '📅', label: 'Lifespan', value: '15–20 yrs' },
      { icon: '🌍', label: 'Native', value: 'Japan & China' },
      { icon: '🍂', label: 'Leaf Type', value: 'Deciduous' },
    ],
    description: 'Celebrated worldwide for its ephemeral pink blossoms — a cultural symbol of renewal and beauty.'
  },
  {
    id: 5,
    name: 'Redwood',
    scientific: 'Sequoia sempervirens',
    emoji: '🌲',
    color: '#6b3a2a',
    accentColor: '#a0522d',
    characteristics: [
      { icon: '📏', label: 'Height', value: 'Up to 115 m' },
      { icon: '📅', label: 'Lifespan', value: 'Over 2,000 yrs' },
      { icon: '🌍', label: 'Native', value: 'California, USA' },
      { icon: '🍃', label: 'Leaf Type', value: 'Evergreen' },
    ],
    description: 'The tallest living trees on Earth, coast redwoods create ancient forests of extraordinary scale.'
  },
  {
    id: 6,
    name: 'Birch',
    scientific: 'Betula pendula',
    emoji: '🌿',
    color: '#4a7c6f',
    accentColor: '#7fbfb4',
    characteristics: [
      { icon: '📏', label: 'Height', value: '15–25 m' },
      { icon: '📅', label: 'Lifespan', value: '60–90 yrs' },
      { icon: '🌍', label: 'Native', value: 'Europe & Asia' },
      { icon: '🍂', label: 'Leaf Type', value: 'Deciduous' },
    ],
    description: 'Recognised by its striking white bark and delicate leaves, birch is a pioneer species in recovering landscapes.'
  },
  {
    id: 7,
    name: 'Baobab',
    scientific: 'Adansonia digitata',
    emoji: '🌴',
    color: '#8b6914',
    accentColor: '#c8a84b',
    characteristics: [
      { icon: '📏', label: 'Height', value: '5–30 m' },
      { icon: '📅', label: 'Lifespan', value: 'Up to 3,000 yrs' },
      { icon: '🌍', label: 'Native', value: 'Sub-Saharan Africa' },
      { icon: '🍂', label: 'Leaf Type', value: 'Deciduous' },
    ],
    description: 'The iconic "tree of life" of Africa — stores vast amounts of water and provides food and shelter.'
  },
  {
    id: 8,
    name: 'Willow',
    scientific: 'Salix babylonica',
    emoji: '🌿',
    color: '#607d3a',
    accentColor: '#9bc44a',
    characteristics: [
      { icon: '📏', label: 'Height', value: '8–20 m' },
      { icon: '📅', label: 'Lifespan', value: '30–50 yrs' },
      { icon: '🌍', label: 'Native', value: 'China' },
      { icon: '🍂', label: 'Leaf Type', value: 'Deciduous' },
    ],
    description: 'Known for its graceful, weeping branches, willows thrive near water and are prized in gardens worldwide.'
  }
];

function createTreeIllustration(species) {
  const { color, accentColor, emoji } = species;
  return `
    <div class="card-illustration" style="--tree-color:${color};--tree-accent:${accentColor}" aria-hidden="true">
      <div class="illustration-bg"></div>
      <div class="tree-emoji">${emoji}</div>
      <div class="ground"></div>
    </div>
  `;
}

function createCharacteristicBadge({ icon, label, value }) {
  return `
    <li class="characteristic">
      <span class="char-icon" aria-hidden="true">${icon}</span>
      <div class="char-text">
        <span class="char-label">${label}</span>
        <span class="char-value">${value}</span>
      </div>
    </li>
  `;
}

function createSpeciesCard(species) {
  const { name, scientific, description, characteristics, color, accentColor } = species;
  const charBadges = characteristics.map(createCharacteristicBadge).join('');
  return `
    <article class="species-card" style="--card-color:${color};--card-accent:${accentColor}" tabindex="0" aria-label="${name} — ${scientific}">
      ${createTreeIllustration(species)}
      <div class="card-body">
        <header class="card-header">
          <h3 class="card-name">${name}</h3>
          <p class="card-scientific"><em>${scientific}</em></p>
        </header>
        <p class="card-description">${description}</p>
        <ul class="card-characteristics" aria-label="Key characteristics">
          ${charBadges}
        </ul>
      </div>
      <div class="card-hover-bar" aria-hidden="true"></div>
    </article>
  `;
}

function renderSpeciesGrid() {
  const grid = document.getElementById('speciesGrid');
  if (!grid) return;
  grid.innerHTML = treeSpecies.map(createSpeciesCard).join('');
}

document.addEventListener('DOMContentLoaded', renderSpeciesGrid);
