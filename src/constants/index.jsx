// ─────────────────────────────────────────────
// ASSETS — Centralized Image Imports (Correct Paths)
// ─────────────────────────────────────────────

// HERO
import heroMain from '../assets/hero/hero-main.jpeg';
import heroAmbiance from '../assets/hero/hero-ambiance.jpeg';
import heroChef from '../assets/hero/hero-chef-action.jpeg';

// ABOUT
import aboutExterior from '../assets/about/about-restaurant-exterior.jpeg';
import aboutInterior from '../assets/about/about-restaurant-interior.jpeg';
import chefPortrait from '../assets/about/about-chef-portrait.jpeg';
import teamAction from '../assets/about/about-team-action.jpeg';

// MENU — using your folders: appetizers / mains / drinks / desserts
import menuAppetizer1 from '../assets/menu/appetizers/menu-appetizer-1.jpeg';
import menuAppetizer2 from '../assets/menu/appetizers/menu-appetizer-2.jpeg';
import menuAppetizer3 from '../assets/menu/appetizers/menu-appetizer-3.jpeg';

import menuMain1 from '../assets/menu/mains/menu-main-1.jpeg';
import menuMain2 from '../assets/menu/mains/menu-main-2.jpeg';
import menuMain3 from '../assets/menu/mains/menu-main-3.jpeg';
import menuMain4 from '../assets/menu/mains/menu-main-4.jpeg';
import menuMain5 from '../assets/menu/mains/menu-main-5.jpeg';

import menuDessert1 from '../assets/menu/desserts/menu-dessert-1.jpeg';
import menuDessert2 from '../assets/menu/desserts/menu-dessert-2.jpeg';
import menuDessert3 from '../assets/menu/desserts/menu-dessert-3.jpeg';

import menuDrink1 from '../assets/menu/drinks/menu-drink-1.jpeg';
import menuDrink2 from '../assets/menu/drinks/menu-drink-2.jpeg';
import menuDrink3 from '../assets/menu/drinks/menu-drink-3.jpeg';

// GALLERY
import galleryDining1 from '../assets/gallery/gallery-dining-1.jpeg';
import galleryDining2 from '../assets/gallery/gallery-dining-2.jpeg';
import galleryKitchen1 from '../assets/gallery/gallery-kitchen-1.jpeg';
import galleryKitchen2 from '../assets/gallery/gallery-kitchen-2.jpeg';
import galleryEvent1 from '../assets/gallery/gallery-event-1.jpeg';
import galleryEvent2 from '../assets/gallery/gallery-event-2.jpeg';

// RESERVATIONS
import reservationSetup from '../assets/reservations/reservation-dining-setup.jpeg';
import reservationWindow from '../assets/reservations/reservation-window-view.jpeg';

// LOGOS
import logoWhite from '../assets/misc/logo-white.png';
import logoBlack from '../assets/misc/logo-black.png';

export const ASSETS = {
  hero: {
    main: heroMain,
    ambiance: heroAmbiance,
    chefAction: heroChef,
  },
  about: {
    exterior: aboutExterior,
    interior: aboutInterior,
    chefPortrait,
    teamAction,
  },
  menu: {
    appetizers: [
      { image: menuAppetizer1, name: "Langoustine Rôtie, Corail d’Oursin & Tuile de Riz Noir", description: "Flambéed Mediterranean langoustine, sea urchin coral, puffed black rice crisp, micro-cress, aged balsamic" },
      { image: menuAppetizer2, name: "Tartare de Bœuf Wagyu, Jaune d’Œuf Confite", description: "Hand-cut Wagyu beef tartare, topped with slow-cooked egg yolk and wild herbs. Passion fruit, beet, herb oil spheres, saffron emulsion, aged soy" },
      { image: menuAppetizer3, name: "Saumon Mi-Cuit, Crème de Coco-Citronnelle & Mangue", description: "Torched Atlantic salmon, barely cooked center, on a light lemongrass-coconut velouté. Mango cubes, yuzu gel, pickled radish, chive oil" },
    ],
    mains: [
      { image: menuMain1, name: "Filet de Bœuf Black Angus, Écume de Vin Rouge & Légumes Rôtis", description: "Dry-aged Black Angus beef, grilled rare, with red wine air, charred shishito, crispy cauliflower, pickled shallot, micro herbs" },
      { image: menuMain2, name: "Entrecôte de Bœuf Maturé, Coquille Saint-Jacques & Jus Corsé", description: "45-day dry-aged beef ribeye, herb-crusted, served rare with seared Hokkaido scallop, glazed pearl onions, baby artichoke, capers, rich red wine jus, edible flowers" },
      { image: menuMain3, name: "Magret de Canard Rôti, Betterave Rouge & Cerise Griotte", description: "Seared duck breast, crispy skin, served pink with beetroot purée, freekeh, roasted pear, griotte cherry gel, duck jus reduction, nasturtium" },
      { image: menuMain4, name: "Poulpe Grillée, Crème d’Avocat & Corail Noir", description: "Charcoal-grilled Mediterranean octopus, avocado-wasabi cream, black squid-ink tuile, yuzu pearls, pickled mustard seeds, baby leaves" },
      { image: menuMain5, name: "Noix de Saint-Jacques Poêlées, Jambon Ibérique & Jus de Veau au Yuzu", description: "Pan-seared scallops, Ibérico ham, spring peas, fennel, yuzu veal jus, pea shoots" },
    ],
    desserts: [
      { image: menuDessert1, name: "Nuage de Citron Vert & Basilic", description: "Lime-basil aerated mousse, yuzu gel, apple brunoise, white chocolate snow, spun sugar" },
      { image: menuDessert2, name: "Chocolat Noir 70 %, Fraise & Réglisse", description: "Valrhona mousse domes, liquid center, sesame–liquorice crumble, strawberry gel" },
      { image: menuDessert3, name: "Sphère de Framboise & Rose", description: "Raspberry-rose sorbet sphere, hibiscus mousse, lychee jelly, shiso leaves" },
    ],
    drinks: [
      { image: menuDrink1, name: "Signature Smoked Pineapple & Rosemary Sour", description: "Charred pineapple gin, rosemary, aquafaba, smoked table-side" },
      { image: menuDrink2, name: "Clover Club Élan", description: "Gin, raspberry-vermouth reduction, lemon, egg white" },
      { image: menuDrink3, name: "Negroni Barricato", description: "Barrel-aged Negroni, single rock, orange zest" },
    ],
  },
  
  gallery: [
    galleryDining1,
    galleryDining2,
    galleryKitchen1,
    galleryKitchen2,
    galleryEvent1,
    galleryEvent2,
  ],
  reservations: { setup: reservationSetup, window: reservationWindow },
  logos: { white: logoWhite, black: logoBlack },
};

// ─────────────────────────────────────────────
// ELAN — Global Constants
// ─────────────────────────────────────────────

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "menu", label: "Menu" },
  { id: "about", label: "About" },
  { id: "gallery", label: "Gallery" },
  { id: "reservations", label: "Reservations" },
];

export const SOCIAL_LINKS = [
  { id: "instagram", url: "https://instagram.com" },
  { id: "facebook", url: "https://facebook.com" },
  { id: "tiktok", url: "https://tiktok.com" },
];

export const HERO_CONTENT = {
  title: "Where Elegance Meets Flavor.",
  subtitle: "A fine dining experience crafted with passion and sophistication.",
  buttonPrimary: "Reserve a Table",
  buttonSecondary: "Explore Menu",
};

export const ABOUT_CONTENT = {
  title: "crafted for the refined palate",
  description: "At ELAN, we blend culinary artistry with modern elegance.",
  highlight: "An elevated dining experience inspired by luxury.",
};

export const FEATURES = [
  { id: 1, title: "Signature Dishes", text: "Curated by world-class chefs blending tradition and innovation." },
  { id: 2, title: "Premium Ambience", text: "Designed to immerse you in warmth and modern luxury." },
  { id: 3, title: "Exceptional Service", text: "A dedicated team ensuring every moment feels special." },
];

export const FOOTER_LINKS = [
  { id: "privacy", label: "Privacy Policy" },
  { id: "terms", label: "Terms of Service" },
  { id: "careers", label: "Careers" },
];

export const CONTACT_INFO = {
  phone: "+212 600 000 000",
  email: "contact@elan.com",
  address: "Casablanca, Morocco",
};
