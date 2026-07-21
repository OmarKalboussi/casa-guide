function switchTab(id, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + id).classList.add('active');
}

// 1. DICTIONNAIRE MULTILINGUE COMPLET (FR, EN, DE, IT)
const translations = {
  fr: {
    label: "FR",
    nav_welcome: "Bienvenue",
    nav_rec: "Recommandations",
    nav_contact: "Contact",
    hero_eyebrow: "Bienvenue chez vous",
    hero_title: "Votre séjour <em>parfait</em><br>commence ici",
    hero_sub: "De l'emblématique Skifa Kahla aux eaux cristallines du Cap Afrique, découvrez les secrets les mieux gardés de la première capitale fatimide grâce aux bons plans de votre hôte.",
    hero_explore: "Explorer",
    rec_label: "Sélectionné pour vous",
    rec_title: "Nos recommandations à Mahdia",
    tab_food: "Restaurants & Cafés",
    tab_sights: "À Visiter",
    tab_grocery: "Commerces",
    tab_sport: "Sport & Bien-être",
    tab_utile: "Utiles",
    elmadina_tag: "Incontournable · Ambiance Fatimide",
    elmadina_desc: "Situé à l'entrée de la vieille ville, le Café El Médina est une adresse incontournable réputée pour sa superbe terrasse ombragée.",
    espadon_tag: "Poisson Frais",
    espadon_desc: "Cuisine méditerranéenne raffinée, élégance et convivialité : une des meilleures tables de la ville pour savourer du poisson ultra-frais.",
    nuba_tag: "Plage · Convivial",
    nuba_desc: "Un endroit idyllique pour profiter du soleil et de la mer, avec une vue imprenable sur la baie de Mahdia.",
    bachir_tag: "Indispensable · Authentique",
    bachir_desc: "Petit spot très populaire réputé pour ses généreux casse-croûtes traditionnels au thon, richement garnis.",
    skifa_tag: "Histoire · Porte Fortifiée",
    skifa_desc: "L'imposante porte fortifiée du Xème siècle qui marque l'entrée de la vieille Médina. Montez au sommet pour admirer la vue.",
    cemetery_tag: "Panorama · Émotion",
    cemetery_desc: "Un lieu magique et unique au monde, où les tombes d'un blanc éclatant font face à l'immensité bleu azur.",
    borj_tag: "Forteresse · Culture",
    borj_desc: "Cette grande forteresse ottomane du XVIème siècle domine le vieux port et offre un point de vue imprenable.",
    market_tag: "Marché Local · Immersion",
    market_desc: "Vivez l'animation de la traditionnelle criée du matin. L'endroit parfait pour acheter du poisson frais à cuisiner.",
    mg_tag: "Supermarché · Alimentation",
    mg_desc: "Idéal pour toutes vos courses du quotidien, boissons fraîches, produits de beauté et snacks lors de votre installation.",
    gym_tag: "Salle de sport · Fitness",
    gym_desc: "La salle de sport la mieux notée et la plus moderne. Idéale pour garder le rythme pendant les vacances.",
    paddle_tag: "Sport Nautique",
    paddle_desc: "Sorties guidées et balades au coucher du soleil dans des eaux cristallines, idéal pour combinant sport et détente.",
    dive_tag: "Sport Nautique",
    dive_desc: "Encadré par une équipe passionnée, baptêmes pour débutants et explorations sous-marines pour les plus expérimentés.",
    infirmary_tag: "Cabinet infirmier",
    infirmary_desc: "Soins infirmiers de proximité, soins d'urgence légers et renouvellement de pansements.",
    pharmacy_tag: "Pharmacie de jour",
    pharmacy_desc: "Pharmacie principale du centre-ville pour vos médicaments et produits parapharmaceutiques.",
    night_pharmacy_tag: "Pharmacie de Nuit",
    night_pharmacy_desc: "Ouverte toute la nuit pour vos besoins de santé urgents.",
    free: "Gratuit",
    em_label: "En cas d'urgence",
    em_title: "Contacts d'Urgence",
    police: "Police Secours",
    fire: "Protection Civile",
    guard: "Garde Nationale",
    samu: "SAMU (Urgences Médicales)",
    contact_label: "Un besoin particulier ?",
    contact_title: "Nous sommes là pour vous",
    contact_text: "Qu'il s'agisse d'un conseil local, d'un besoin dans l'appartement ou d'une question pratique, contactez-moi directement sur WhatsApp.",
    wa_btn: "Discutez avec nous sur WhatsApp",
    contact_note: "Réponse en quelques minutes généralement",
    footer: "Créé avec soin pour nos voyageurs."
  },
  en: {
    label: "EN",
    nav_welcome: "Welcome",
    nav_rec: "Recommendations",
    nav_contact: "Contact",
    hero_eyebrow: "Welcome home",
    hero_title: "Your <em>perfect</em> stay<br>starts here",
    hero_sub: "From the iconic Skifa Kahla to the crystal-clear waters of Cap Afrique, discover the best secrets of Mahdia with host tips.",
    hero_explore: "Explore",
    rec_label: "Handpicked for you",
    rec_title: "Our Mahdia Recommendations",
    tab_food: "Restaurants & Cafes",
    tab_sights: "Sightseeing",
    tab_grocery: "Shops & Markets",
    tab_sport: "Sports & Wellness",
    tab_utile: "Useful Services",
    elmadina_tag: "Must Visit · Fatimid Vibe",
    elmadina_desc: "Located at the old town entrance, Café El Medina is a iconic spot known for its shaded terrace under ancient trees.",
    espadon_tag: "Fresh Fish",
    espadon_desc: "Refined Mediterranean cuisine and elegance: one of the town's best tables to enjoy ultra-fresh seafood.",
    nuba_tag: "Beach Bar · Cozy",
    nuba_desc: "An idyllic beach spot to enjoy sun and sea with stunning views over Mahdia Bay.",
    bachir_tag: "Essential · Authentic",
    bachir_desc: "Popular local spot famous for traditional tuna sandwiches loaded with eggs, harissa, and fresh ingredients.",
    skifa_tag: "History · Fortified Gate",
    skifa_desc: "Imposing 10th-century gate marking the entrance to the old Medina. Climb up for a great panoramic view.",
    cemetery_tag: "Panorama · Scenic",
    cemetery_desc: "A breathtaking and unique sea cemetery where white tombs face the endless azure Mediterranean Sea.",
    borj_tag: "Fortress · Culture",
    borj_desc: "A 16th-century Ottoman fortress overlooking the historic harbour with commanding sea views.",
    market_tag: "Local Market · Immersion",
    market_desc: "Experience the lively morning fish auction. Perfect place to buy fresh fish to cook at home.",
    mg_tag: "Supermarket · Groceries",
    mg_desc: "Ideal for daily grocery shopping, cold drinks, toiletries, and quick snacks.",
    gym_tag: "Gym · Fitness",
    gym_desc: "Top-rated, modern fitness club in town. Perfect for maintaining your workout routine on vacation.",
    paddle_tag: "Water Sports",
    paddle_desc: "Guided paddle tours and sunset trips in crystal waters. Perfect mix of sports and relaxation.",
    dive_tag: "Water Sports",
    dive_desc: "Professional diving center offering beginner discovery dives and deep sea explorations.",
    infirmary_tag: "Nursing Clinic",
    infirmary_desc: "Local nursing services, minor emergency care, and dressing changes.",
    pharmacy_tag: "Day Pharmacy",
    pharmacy_desc: "Main downtown pharmacy for prescription drugs and personal health items.",
    night_pharmacy_tag: "Night Pharmacy",
    night_pharmacy_desc: "Open all night long for emergency medical supplies.",
    free: "Free",
    em_label: "In case of emergency",
    em_title: "Emergency Numbers",
    police: "Police Hotline",
    fire: "Fire & Rescue",
    guard: "National Guard",
    samu: "Ambulance / Medical",
    contact_label: "Need anything?",
    contact_title: "We are here to help",
    contact_text: "Whether you need a local tip, apartment assistance, or practical details, text us directly on WhatsApp.",
    wa_btn: "Chat with us on WhatsApp",
    contact_note: "Usually replies within minutes",
    footer: "Crafted with care for our guests."
  },
  de: {
    label: "DE",
    nav_welcome: "Willkommen",
    nav_rec: "Empfehlungen",
    nav_contact: "Kontakt",
    hero_eyebrow: "Willkommen zu Hause",
    hero_title: "Ihr <em>perfekter</em> Aufenthalt<br>beginnt hier",
    hero_sub: "Von der berühmten Skifa Kahla bis zum kristallklaren Wasser von Cap Afrique – entdecken Sie Mahdia wie ein Einheimischer.",
    hero_explore: "Entdecken",
    rec_label: "Für Sie ausgewählt",
    rec_title: "Unsere Empfehlungen in Mahdia",
    tab_food: "Restaurants & Cafés",
    tab_sights: "Sehenswürdigkeiten",
    tab_grocery: "Einkaufen",
    tab_sport: "Sport & Wellness",
    tab_utile: "Nützliches",
    elmadina_tag: "Highlight · Fatimiden-Flair",
    elmadina_desc: "Am Eingang der Altstadt gelegen, bekannt für seine wunderschöne schattige Terrasse unter alten Bäumen.",
    espadon_tag: "Frischer Fisch",
    espadon_desc: "Feine mediterrane Küche und Eleganz: eines der besten Fischrestaurants der Stadt.",
    nuba_tag: "Strandbar · Gemütlich",
    nuba_desc: "Traumhafter Ort direkt am Strand, um Sonne und Meer mit tollem Blick über die Bucht zu genießen.",
    bachir_tag: "Kult · Authentisch",
    bachir_desc: "Beliebter Imbiss für traditionelle Thunfisch-Sandwiches mit Harissa und frischen Zutaten.",
    skifa_tag: "Geschichte · Festungstor",
    skifa_desc: "Imposantes Tor aus dem 10. Jahrhundert zur Altstadt. Genießen Sie die Aussicht von oben.",
    cemetery_tag: "Panorama · Einzigartig",
    cemetery_desc: "Ein einzigartiger Meeresfriedhof, auf dem strahlend weiße Gräber auf das blaue Meer blicken.",
    borj_tag: "Festung · Kultur",
    borj_desc: "Große osmanische Festung aus dem 16. Jahrhundert mit Panoramablick über den alten Hafen.",
    market_tag: "Fischmarkt · Lokal",
    market_tag_desc: "Erleben Sie die morgendliche Fischauktion. Ideal, um frischen Fisch zum Kochen zu kaufen.",
    mg_tag: "Supermarkt · Lebensmittel",
    mg_desc: "Ideal für den täglichen Einkauf, kühle Getränke und Pflegeprodukte.",
    gym_tag: "Fitnessstudio",
    gym_desc: "Modernes Fitnessstudio in der Nähe. Perfekt, um auch im Urlaub fit zu bleiben.",
    paddle_tag: "Wassersport",
    paddle_desc: "Geführte Stand-up-Paddle-Touren bei Sonnenuntergang im kristallklaren Wasser.",
    dive_tag: "Tauchschule",
    dive_desc: "Professionelles Tauchzentrum für Anfänger und erfahrene Taucher.",
    infirmary_tag: "Praxis",
    infirmary_desc: "Krankenpflege vor Ort, Erstversorgung und Verbandswechsel.",
    pharmacy_tag: "Apotheke",
    pharmacy_desc: "Hauptapotheke im Stadtzentrum für Medikamente und Gesundheitsprodukte.",
    night_pharmacy_tag: "Nachtapotheke",
    night_pharmacy_desc: "Die ganze Nacht geöffnet für medizinische Notfälle.",
    free: "Kostenlos",
    em_label: "Für Notfälle",
    em_title: "Notrufnummern",
    police: "Polizei",
    fire: "Feuerwehr / Rettung",
    guard: "Nationalgarde",
    samu: "Notarzt (SAMU)",
    contact_label: "Fragen oder Wünsche?",
    contact_title: "Wir sind für Sie da",
    contact_text: "Egal ob Ausflugstipp oder Fragen zur Wohnung: Schreiben Sie uns einfach auf WhatsApp.",
    wa_btn: "Auf WhatsApp chatten",
    contact_note: "Antwortet meist in wenigen Minuten",
    footer: "Mit Liebe für unsere Gäste gestaltet."
  },
  it: {
    label: "IT",
    nav_welcome: "Benvenuto",
    nav_rec: "Raccomandazioni",
    nav_contact: "Contatto",
    hero_eyebrow: "Benvenuto a casa",
    hero_title: "Il tuo soggiorno <em>perfetto</em><br>inizia qui",
    hero_sub: "Dalla storica Skifa Kahla alle acque cristalline di Cap Afrique, scopri i segreti di Mahdia con i consigli del tuo host.",
    hero_explore: "Esplora",
    rec_label: "Selezionato per te",
    rec_title: "I nostri consigli a Mahdia",
    tab_food: "Ristoranti e Caffè",
    tab_sights: "Da Visitare",
    tab_grocery: "Negozi",
    tab_sport: "Sport e Benessere",
    tab_utile: "Utili",
    elmadina_tag: "Imperdibile · Atmosfera Storica",
    elmadina_desc: "Situato all'ingresso della Medina, celebre per la sua splendida terrazza ombreggiata da alberi secolari.",
    espadon_tag: "Pesce Fresco",
    espadon_desc: "Cucina mediterranea raffinata ed elegante: uno dei migliori ristoranti della città per il pesce fresco.",
    nuba_tag: "Beach Bar · Accogliente",
    nuba_desc: "Un posto idilliaco per godersi il sole e il mare con vista panoramica sulla baia.",
    bachir_tag: "Autentico · Popolare",
    bachir_desc: "Famoso piccolo locale noto per i tipici panini al tonno, ricchi di uova e harissa fresca.",
    skifa_tag: "Storia · Porta Fortificata",
    skifa_desc: "Imponente porta del X secolo all'ingresso della Medina. Sali in cima per ammirare il panorama.",
    cemetery_tag: "Panorama · Emozione",
    cemetery_desc: "Un luogo magico e unico al mondo: un cimitero marino con tombe bianche di fronte al blu del Mediterraneo.",
    borj_tag: "Fortezza · Cultura",
    borj_desc: "Grande fortezza ottomana del XVI secolo che domina il vecchio porto offrendo una vista stupenda.",
    market_tag: "Mercato del Pesce",
    market_desc: "Vivi l'atmosfera dell'asta del pesce al mattino. Perfetto per acquistare pesce fresco da cucinare.",
    mg_tag: "Supermercato",
    mg_desc: "Ideale per le spese quotidiane, bevande fresche, snack e articoli per la cura personale.",
    gym_tag: "Palestra · Fitness",
    gym_desc: "La palestra più moderna della zona. Perfetta per allenarsi anche in vacanza.",
    paddle_tag: "Sport Acquatici",
    paddle_desc: "Escursioni guidate in paddle al tramonto in acque cristalline. Sport e relax combinati.",
    dive_tag: "Centro Immersioni",
    dive_desc: "Centro immersioni professionale con battesimi per principianti ed esplorazioni subacquee.",
    infirmary_tag: "Ambulatorio",
    infirmary_desc: "Servizi infermieristici di base, pronto soccorso leggero e medicazioni.",
    pharmacy_tag: "Farmacia",
    pharmacy_desc: "Farmacia principale in centro città per farmaci e prodotti salute.",
    night_pharmacy_tag: "Farmacia Notturna",
    night_pharmacy_desc: "Aperta tutta la notte per emergenze sanitarie.",
    free: "Gratuito",
    em_label: "In caso di emergenza",
    em_title: "Contatti di Emergenza",
    police: "Polizia",
    fire: "Vigili del Fuoco",
    guard: "Guardia Nazionale",
    samu: "Pronto Soccorso (SAMU)",
    contact_label: "Hai bisogno di aiuto?",
    contact_title: "Siamo qui per te",
    contact_text: "Per consigli locali, domande sull'appartamento o supporto, scrivici direttamente su WhatsApp.",
    wa_btn: "Chatta con noi su WhatsApp",
    contact_note: "Risposta di solito in pochi minuti",
    footer: "Creato con cura per i nostri ospiti."
  }
};

const languages = ['fr', 'en', 'de', 'it'];
let currentLang = localStorage.getItem('guestLanguage') || 'fr';

// 2. FONCTION DE TRADUCTION DE TOUT LE SITE
function applyLanguage(lang) {
  currentLang = lang;
  const dict = translations[currentLang];

  // Traduction du label du bouton
  document.getElementById('lang-label').innerText = dict.label;

  // Traduction de tous les éléments possédant un data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (dict[key]) {
      element.innerHTML = dict[key];
    }
  });

  localStorage.setItem('guestLanguage', currentLang);
}

function toggleLanguage() {
  let currentIndex = languages.indexOf(currentLang);
  let nextIndex = (currentIndex + 1) % languages.length;
  applyLanguage(languages[nextIndex]);
}

// 3. MENU MOBILE
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  const burger = document.querySelector('.burger-btn');
  menu.classList.toggle('active');
  burger.classList.toggle('open');
}

function closeMenu() {
  const menu = document.getElementById('nav-menu');
  const burger = document.querySelector('.burger-btn');
  if (menu) menu.classList.remove('active');
  if (burger) burger.classList.remove('open');
}

// 4. THÈME CLAIR/SOMBRE DYNAMIQUE
function checkTimeTheme() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 18) {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
}

// 5. MÉTÉO EN DIRECT
async function fetchTemperature() {
  try {
    const lat = 35.5047;
    const lon = 11.0622;
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
    const data = await response.json();
    
    if (data && data.current_weather) {
      const temp = Math.round(data.current_weather.temperature);
      document.getElementById('nav-weather').innerText = `☀️ ${temp}°C`;
    }
  } catch (error) {
    document.getElementById('nav-weather').innerText = "";
  }
}

// Lancement au chargement de la page
window.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
  checkTimeTheme();
  fetchTemperature();
});