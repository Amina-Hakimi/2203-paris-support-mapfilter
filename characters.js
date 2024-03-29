const characters = [
  {
    id: 1,
    name: '36AIS',
    tier: 'SS',
    weapon: 'Staff',
    attribute: 'Healing',
    species: 'Oxsecian',
    lambdaForm: null,
    originalForm: null,
  },
  {
    id: 2,
    name: '54B2',
    tier: 'Z',
    weapon: 'Sword',
    attribute: null,
    species: 'Oxsecian',
    lambdaForm: null,
    originalForm: null,
  },
  {
    id: 3,
    name: "A'merpact",
    tier: 'A',
    weapon: 'Staff',
    attribute: 'Ice',
    species: 'Lizardfolk',
    lambdaForm: 4,
    originalForm: null,
  },
  {
    id: 4,
    name: "A'merpact ^",
    tier: 'SS',
    weapon: 'Staff',
    attribute: 'Ice',
    species: 'Lizardfolk',
    lambdaForm: null,
    originalForm: 3,
  },
  {
    id: 5,
    name: "A'misandra",
    tier: 'SS',
    weapon: 'Staff',
    attribute: 'Healing',
    species: 'Lizardfolk',
    lambdaForm: 6,
    originalForm: null,
  },
  {
    id: 6,
    name: "A'misandra ^",
    tier: 'Z',
    weapon: 'Staff',
    attribute: 'Healing',
    species: 'Lizardfolk',
    lambdaForm: null,
    originalForm: 5,
  },
  {
    id: 7,
    name: 'Alika',
    tier: 'S',
    weapon: 'Bow',
    attribute: 'Lightning',
    species: 'Human',
    lambdaForm: 8,
    originalForm: null,
  },
  {
    id: 8,
    name: 'Alika ^',
    tier: 'Z',
    weapon: 'Sword',
    attribute: 'Lightning',
    species: 'Human',
    lambdaForm: null,
    originalForm: 7,
  },
  {
    id: 9,
    name: 'Amazora',
    tier: 'B',
    weapon: 'Sword',
    attribute: 'Fire',
    species: 'Human',
    lambdaForm: 10,
    originalForm: null,
  },
  {
    id: 10,
    name: 'Amazora ^',
    tier: 'Z',
    weapon: 'Sword',
    attribute: 'Fire',
    species: 'Human',
    lambdaForm: null,
    originalForm: 9,
  },
  {
    id: 11,
    name: 'Amimari',
    tier: 'SS',
    weapon: 'Staff',
    attribute: 'Healing',
    species: 'Beastfolk',
    lambdaForm: null,
    originalForm: null,
  },
  {
    id: 12,
    name: 'Amina',
    tier: 'SS',
    weapon: 'Staff',
    attribute: 'Healing',
    species: 'Human',
    lambdaForm: 13,
    originalForm: null,
  },
  {
    id: 13,
    name: 'Amina ^',
    tier: 'Z',
    weapon: 'Staff',
    attribute: 'Healing',
    species: 'Human',
    lambdaForm: null,
    originalForm: 12,
  },
  {
    id: 14,
    name: 'Andelucia',
    tier: 'Z',
    weapon: 'Spear',
    attribute: 'Graviton',
    species: 'Beastfolk',
    lambdaForm: 15,
    originalForm: null,
  },
  {
    id: 15,
    name: 'Andelucia ^',
    tier: 'Z',
    weapon: 'Spear',
    attribute: 'Graviton',
    species: 'Beastfolk',
    lambdaForm: null,
    originalForm: 14,
  },
  {
    id: 16,
    name: 'Annu',
    tier: 'Z',
    weapon: 'Bow',
    attribute: 'Ice',
    species: 'Wild Beast',
    lambdaForm: null,
    originalForm: null,
  },
  {
    id: 17,
    name: 'Arionne',
    tier: 'Z',
    weapon: 'Staff',
    attribute: null,
    species: 'Human',
    lambdaForm: null,
    originalForm: null,
  },
  {
    id: 18,
    name: 'Ashe',
    tier: 'Z',
    weapon: 'Spear',
    attribute: 'Lunar',
    species: 'Human',
    lambdaForm: null,
    originalForm: null,
  },
  {
    id: 19,
    name: "Ba'gunar",
    tier: 'B',
    weapon: 'Sword',
    attribute: 'Lightning',
    species: 'Lizardfolk',
    lambdaForm: 20,
    originalForm: null,
  },
  {
    id: 20,
    name: "Ba'gunar ^",
    tier: 'S',
    weapon: 'Sword',
    attribute: 'Photon',
    species: 'Lizardfolk',
    lambdaForm: null,
    originalForm: 19,
  },
  {
    id: 21,
    name: 'Bahamut',
    tier: 'S',
    weapon: 'Staff',
    attribute: 'Fire',
    species: 'Dragon',
    lambdaForm: 22,
    originalForm: null,
  },
  {
    id: 22,
    name: 'Bahamut ^',
    tier: 'Z',
    weapon: 'Staff',
    attribute: 'Fire',
    species: 'Dragon',
    lambdaForm: null,
    originalForm: 21,
  },
  {
    id: 23,
    name: 'Bahl',
    tier: 'B',
    weapon: 'Sword',
    attribute: null,
    species: 'Human',
    lambdaForm: 24,
    originalForm: null,
  },
  {
    id: 24,
    name: 'Bahl ^',
    tier: 'S',
    weapon: 'Sword',
    attribute: null,
    species: 'Human',
    lambdaForm: null,
    originalForm: 23,
  },
  {
    id: 25,
    name: 'Bajanna',
    tier: 'SS',
    weapon: 'Spear',
    attribute: null,
    species: 'Beastfolk',
    lambdaForm: null,
    originalForm: null,
  },
  {
    id: 26,
    name: "Beau'ne",
    tier: 'Z',
    weapon: 'Sword',
    attribute: 'Photon',
    species: 'Lizardfolk',
    lambdaForm: 27,
    originalForm: null,
  },
  {
    id: 27,
    name: "Beau'ne ^",
    tier: 'Z',
    weapon: 'Staff',
    attribute: 'Photon',
    species: 'Lizardfolk',
    lambdaForm: null,
    originalForm: 26,
  },
  {
    id: 28,
    name: 'Bonna',
    tier: 'S',
    weapon: 'Staff',
    attribute: null,
    species: 'Beastfolk',
    lambdaForm: 29,
    originalForm: null,
  },
  {
    id: 29,
    name: 'Bonna ^',
    tier: 'Z',
    weapon: 'Bow',
    attribute: null,
    species: 'Beastfolk',
    lambdaForm: null,
    originalForm: 28,
  },
  {
    id: 30,
    name: 'Burbaba',
    tier: 'A',
    weapon: 'Bow',
    attribute: null,
    species: 'Beastfolk',
    lambdaForm: 31,
    originalForm: null,
  },
  {
    id: 31,
    name: 'Burbaba ^',
    tier: 'SS',
    weapon: 'Sword',
    attribute: null,
    species: 'Beastfolk',
    lambdaForm: null,
    originalForm: 30,
  },
  {
    id: 32,
    name: 'Calista',
    tier: 'S',
    weapon: 'Sword',
    attribute: null,
    species: 'Human',
    lambdaForm: null,
    originalForm: null,
  },
  {
    id: 33,
    name: 'Camellia',
    tier: 'SS',
    weapon: 'Spear',
    attribute: null,
    species: 'Human',
    lambdaForm: 34,
    originalForm: null,
  },
  {
    id: 34,
    name: 'Camellia ^',
    tier: 'Z',
    weapon: 'Spear',
    attribute: null,
    species: 'Human',
    lambdaForm: null,
    originalForm: 33,
  },
  {
    id: 35,
    name: 'Captive Golem',
    tier: 'S',
    weapon: 'Staff',
    attribute: null,
    species: 'Wild Beast',
    lambdaForm: null,
    originalForm: null,
  },
  {
    id: 36,
    name: 'Chirol',
    tier: 'Z',
    weapon: 'Staff',
    attribute: 'Graviton',
    species: 'Machine',
    lambdaForm: null,
    originalForm: null,
  },
  {
    id: 37,
    name: 'Clara',
    tier: 'SS',
    weapon: 'Spear',
    attribute: null,
    species: 'Human',
    lambdaForm: 38,
    originalForm: null,
  },
  {
    id: 38,
    name: 'Clara ^',
    tier: 'Z',
    weapon: 'Spear',
    attribute: null,
    species: 'Human',
    lambdaForm: null,
    originalForm: 37,
  },
  {
    id: 39,
    name: 'Czekras',
    tier: 'SS',
    weapon: 'Sword',
    attribute: 'Ice',
    species: 'Human',
    lambdaForm: null,
    originalForm: null,
  },
  {
    id: 40,
    name: 'Daiana',
    tier: 'A',
    weapon: 'Staff',
    attribute: 'Fire',
    species: 'Stonefolk',
    lambdaForm: 41,
    originalForm: null,
  },
  {
    id: 41,
    name: 'Daiana ^',
    tier: 'Z',
    weapon: 'Staff',
    attribute: 'Fire',
    species: 'Stonefolk',
    lambdaForm: null,
    originalForm: 40,
  },
  {
    id: 42,
    name: 'Dahlia',
    tier: 'Z',
    weapon: 'Sword',
    attribute: 'Lunar',
    species: 'Human',
    lambdaForm: null,
    originalForm: null,
  },
  {
    id: 43,
    name: 'Djagos',
    tier: 'Z',
    weapon: 'Staff',
    attribute: 'Fire',
    species: 'Human',
    lambdaForm: null,
    originalForm: null,
  },
  {
    id: 44,
    name: 'Djugan',
    tier: 'S',
    weapon: 'Spear',
    attribute: null,
    species: 'Human',
    lambdaForm: 45,
    originalForm: null,
  },
  {
    id: 45,
    name: 'Djugan ^',
    tier: 'Z',
    weapon: 'Spear',
    attribute: null,
    species: 'Human',
    lambdaForm: null,
    originalForm: 44,
  },
  {
    id: 46,
    name: 'Dracorin',
    tier: 'B',
    weapon: 'Bow',
    attribute: 'Lightning',
    species: 'Wild Beast',
    lambdaForm: 47,
    originalForm: null,
  },
  {
    id: 47,
    name: 'Dracorin ^',
    tier: 'S',
    weapon: 'Bow',
    attribute: 'Lightning',
    species: 'Wild Beast',
    lambdaForm: null,
    originalForm: 46,
  },
  {
    id: 48,
    name: 'Echo',
    tier: 'S',
    weapon: 'Staff',
    attribute: 'Remedy',
    species: 'Spirit',
    lambdaForm: 49,
    originalForm: null,
  },
  {
    id: 49,
    name: 'Echo ^',
    tier: 'S',
    weapon: 'Staff',
    attribute: 'Remedy',
    species: 'Spirit',
    lambdaForm: null,
    originalForm: 48,
  },
  {
    id: 50,
    name: "Edg'low",
    tier: 'Z',
    weapon: null,
    attribute: null,
    species: 'Lizardfolk',
    lambdaForm: null,
    originalForm: null,
  },
  {
    id: 51,
    name: 'Eileen',
    tier: 'A',
    weapon: 'Staff',
    attribute: 'Remedy',
    species: 'Human',
    lambdaForm: 52,
    originalForm: null,
  },
  {
    id: 52,
    name: 'Eileen ^',
    tier: 'SS',
    weapon: 'Staff',
    attribute: 'Remedy',
    species: 'Human',
    lambdaForm: null,
    originalForm: 51,
  },
  {
    id: 53,
    name: 'Elga',
    tier: 'Z',
    weapon: 'Sword',
    attribute: null,
    species: 'Wild Beast',
    lambdaForm: null,
    originalForm: null,
  },
  {
    id: 54,
    name: 'Ella ^',
    tier: 'Z',
    weapon: 'Staff',
    attribute: null,
    species: 'Human',
    lambdaForm: null,
    originalForm: null,
  },
  {
    id: 55,
    name: 'Ellvern',
    tier: 'S',
    weapon: 'Staff',
    attribute: 'Remedy',
    species: 'Human',
    lambdaForm: 56,
    originalForm: null,
  },
  {
    id: 56,
    name: 'Ellvern ^',
    tier: 'Z',
    weapon: 'Staff',
    attribute: 'Remedy',
    species: 'Human',
    lambdaForm: null,
    originalForm: 55,
  },
  {
    id: 57,
    name: 'Engi',
    tier: 'Z',
    weapon: 'Bow',
    attribute: null,
    species: 'Wild Beast',
    lambdaForm: null,
    originalForm: null,
  },
  {
    id: 58,
    name: 'Feno',
    tier: 'Z',
    weapon: 'Staff',
    attribute: 'Lunar',
    species: 'Oxsecian',
    lambdaForm: 59,
    originalForm: null,
  },
  {
    id: 59,
    name: 'Feno ^',
    tier: 'Z',
    weapon: 'Staff',
    attribute: 'Lunar',
    species: 'Human',
    lambdaForm: null,
    originalForm: 58,
  },
];

// ES5: vieille syntaxe
module.exports = characters;

// ES6: modules <3
// export default characters;

// Exports nommés : Coming soon (sorry !)
