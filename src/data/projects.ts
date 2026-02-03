// Villa K - Eze
import villaKEzeMain from "@/assets/projects/villa-k-eze/main.jpg";
import villaKEzeGallery1 from "@/assets/projects/villa-k-eze/gallery-1.jpg";
import villaKEzeGallery2 from "@/assets/projects/villa-k-eze/gallery-2.jpg";

// Appartement N - Vieux Nice
import appartementNMain from "@/assets/projects/appartement-n-nice/main.jpg";

// Villa M - Biot
import villaMBiotMain from "@/assets/projects/villa-m-biot/main.jpg";
import villaMBiotGallery1 from "@/assets/projects/villa-m-biot/gallery-1.jpg";
import villaMBiotGallery2 from "@/assets/projects/villa-m-biot/gallery-2.jpg";

// Villa K - St-Jean-Cap-Ferrat
import villaKSjcfMain from "@/assets/projects/villa-k-sjcf/main.jpg";
import villaKSjcfGallery1 from "@/assets/projects/villa-k-sjcf/gallery-1.jpg";

// Salon Merriaux - Nice
import salonMerriauxMain from "@/assets/projects/salon-merriaux/main.jpg";
import salonMerriauxGallery1 from "@/assets/projects/salon-merriaux/gallery-1.jpg";
import salonMerriauxGallery2 from "@/assets/projects/salon-merriaux/gallery-2.jpg";

// Galerie Mia - Nice
import galerieMiaMain from "@/assets/projects/galerie-mia/main.jpg";
import galerieMiaGallery1 from "@/assets/projects/galerie-mia/gallery-1.jpg";
import galerieMiaGallery2 from "@/assets/projects/galerie-mia/gallery-2.jpg";

// Villa L - Casablanca
import villaLCasaMain from "@/assets/projects/villa-l-casablanca/main.jpg";
import villaLCasaGallery1 from "@/assets/projects/villa-l-casablanca/gallery-1.jpg";
import villaLCasaGallery2 from "@/assets/projects/villa-l-casablanca/gallery-2.jpg";

// Appartement K - Marrakech
import appartementKMarrakechMain from "@/assets/projects/appartement-k-marrakech/main.jpg";
import appartementKMarrakechGallery1 from "@/assets/projects/appartement-k-marrakech/gallery-1.jpg";
import appartementKMarrakechGallery2 from "@/assets/projects/appartement-k-marrakech/gallery-2.jpg";
import appartementKMarrakechGallery3 from "@/assets/projects/appartement-k-marrakech/gallery-3.jpg";

// Villa R. RAK - Marrakech
import villaRakMain from "@/assets/projects/villa-rak/main.jpg";
import villaRakGallery1 from "@/assets/projects/villa-rak/gallery-1.jpg";
import villaRakGallery2 from "@/assets/projects/villa-rak/gallery-2.jpg";

// Villa B - Marrakech
import villaBMain from "@/assets/projects/villa-b-marrakech/main.jpg";
import villaBGallery1 from "@/assets/projects/villa-b-marrakech/gallery-1.jpg";
import villaBGallery2 from "@/assets/projects/villa-b-marrakech/gallery-2.jpg";
import villaBGallery3 from "@/assets/projects/villa-b-marrakech/gallery-3.jpg";
import villaBGallery4 from "@/assets/projects/villa-b-marrakech/gallery-4.jpg";
import villaBGallery5 from "@/assets/projects/villa-b-marrakech/gallery-5.jpg";
import villaBGallery6 from "@/assets/projects/villa-b-marrakech/gallery-6.jpg";
import villaBGallery7 from "@/assets/projects/villa-b-marrakech/gallery-7.jpg";
import villaBGallery8 from "@/assets/projects/villa-b-marrakech/gallery-8.jpg";

// Hôtel S - Marrakech
import hotelSMain from "@/assets/projects/hotel-s-marrakech/main.jpg";

export type ProjectCategory = "residential" | "professional";
export type ProjectRegion = "cote-azur" | "maroc";

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  region: ProjectRegion;
  mainImage: string;
  gallery: string[];
  description: string;
  details?: {
    surface?: string;
    year?: string;
    duration?: string;
  };
  services: string[];
}

export const projects: Project[] = [
  // CÔTE D'AZUR - RÉSIDENTIEL
  {
    id: 1,
    slug: "villa-k-eze",
    title: "Villa K.",
    subtitle: "Èze, Côte d'Azur",
    category: "residential",
    region: "cote-azur",
    mainImage: villaKEzeMain,
    gallery: [villaKEzeMain, villaKEzeGallery1, villaKEzeGallery2],
    description: "Perchée sur les hauteurs d'Èze, cette villa spectaculaire offre une vue imprenable sur la Méditerranée. La rénovation complète a su préserver l'âme du lieu tout en y insufflant une modernité sereine. Les espaces de vie s'ouvrent généreusement sur la terrasse, créant une continuité fluide entre intérieur et extérieur. Les matériaux nobles — pierre, bois, lin — dialoguent harmonieusement avec la lumière naturelle qui inonde chaque pièce.",
    details: {
      surface: "450 m²",
      year: "2019",
    },
    services: ["Architecture d'intérieur", "Décoration", "Consultation couleurs"],
  },
  {
    id: 2,
    slug: "appartement-n-nice",
    title: "Appartement N.",
    subtitle: "Vieux Nice, France",
    category: "residential",
    region: "cote-azur",
    mainImage: appartementNMain,
    gallery: [appartementNMain],
    description: "Au cœur du Vieux Nice, cet appartement de caractère a été métamorphosé pour révéler tout son potentiel. Les hauts plafonds et les moulures d'origine ont été mis en valeur par une palette de teintes sourdes et raffinées. L'agencement repensé optimise chaque espace tout en préservant l'atmosphère intimiste propre aux demeures niçoises.",
    details: {
      surface: "180 m²",
      year: "2018",
    },
    services: ["Décoration", "Consultation couleurs"],
  },
  {
    id: 3,
    slug: "villa-m-biot",
    title: "Villa M.",
    subtitle: "Biot, Côte d'Azur",
    category: "residential",
    region: "cote-azur",
    mainImage: villaMBiotMain,
    gallery: [villaMBiotMain, villaMBiotGallery1, villaMBiotGallery2],
    description: "Nichée dans les collines de Biot, cette villa contemporaine marie lignes épurées et chaleur méditerranéenne. La restructuration complète a permis de créer des volumes généreux baignés de lumière. Le travail sur les matières — enduits à la chaux, béton ciré, bois brut — confère à l'ensemble une élégance organique et intemporelle.",
    details: {
      surface: "320 m²",
      year: "2020",
    },
    services: ["Architecture d'intérieur", "Décoration"],
  },
  {
    id: 4,
    slug: "villa-k-sjcf",
    title: "Villa K.",
    subtitle: "St-Jean-Cap-Ferrat, Côte d'Azur",
    category: "residential",
    region: "cote-azur",
    mainImage: villaKSjcfMain,
    gallery: [villaKSjcfMain, villaKSjcfGallery1],
    description: "Sur la presqu'île mythique de Saint-Jean-Cap-Ferrat, cette propriété d'exception allie le charme de l'architecture Belle Époque à un confort contemporain. Chaque pièce a été repensée pour sublimer les vues extraordinaires sur la mer. Les teintes douces et les matériaux naturels créent une atmosphère de sérénité absolue.",
    details: {
      surface: "600 m²",
      year: "2017",
    },
    services: ["Architecture d'intérieur", "Décoration", "Consultation couleurs"],
  },

  // CÔTE D'AZUR - PROFESSIONNEL
  {
    id: 5,
    slug: "salon-merriaux",
    title: "Salon Merriaux",
    subtitle: "Nice, France",
    category: "professional",
    region: "cote-azur",
    mainImage: salonMerriauxMain,
    gallery: [salonMerriauxMain, salonMerriauxGallery1, salonMerriauxGallery2],
    description: "Ce salon de coiffure iconique de Nice a été entièrement repensé pour offrir une expérience client exceptionnelle. L'espace allie élégance parisienne et décontraction méditerranéenne. Les miroirs XXL, les luminaires sculpturaux et la palette noir et or créent une atmosphère sophistiquée propice à la détente et au bien-être.",
    details: {
      surface: "150 m²",
      year: "2021",
    },
    services: ["Architecture d'intérieur", "Décoration"],
  },
  {
    id: 6,
    slug: "galerie-mia",
    title: "Galerie Mia",
    subtitle: "Nice, France",
    category: "professional",
    region: "cote-azur",
    mainImage: galerieMiaMain,
    gallery: [galerieMiaMain, galerieMiaGallery1, galerieMiaGallery2],
    description: "Cette galerie d'art contemporain a été conçue comme un écrin minimaliste où les œuvres deviennent les seules protagonistes. Les murs immaculés, le béton poli au sol et l'éclairage scénographique créent un parcours fluide et immersif. L'espace flexible s'adapte à chaque exposition, révélant les œuvres sous leur meilleur jour.",
    details: {
      surface: "200 m²",
      year: "2019",
    },
    services: ["Architecture d'intérieur"],
  },

  // MAROC - RÉSIDENTIEL
  {
    id: 7,
    slug: "villa-l-casablanca",
    title: "Villa L.",
    subtitle: "Casablanca, Maroc",
    category: "residential",
    region: "maroc",
    mainImage: villaLCasaMain,
    gallery: [villaLCasaMain, villaLCasaGallery1, villaLCasaGallery2],
    description: "À Casablanca, cette villa incarne le métissage parfait entre modernité européenne et traditions marocaines. Les volumes généreux accueillent un mobilier contemporain qui dialogue avec l'artisanat local. Les zelliges, le tadelakt et les boiseries traditionnelles sont réinterprétés dans une palette de teintes neutres et sophistiquées.",
    details: {
      surface: "400 m²",
      year: "2022",
    },
    services: ["Architecture d'intérieur", "Décoration", "Consultation couleurs"],
  },
  {
    id: 8,
    slug: "appartement-k-marrakech",
    title: "Appartement K.",
    subtitle: "Marrakech, Maroc",
    category: "residential",
    region: "maroc",
    mainImage: appartementKMarrakechMain,
    gallery: [appartementKMarrakechMain, appartementKMarrakechGallery1, appartementKMarrakechGallery2, appartementKMarrakechGallery3],
    description: "Au cœur de la Palmeraie de Marrakech, cet appartement de standing révèle l'essence du luxe discret. La décoration marie influences orientales et design contemporain dans une harmonie subtile. Les tons terre, ocre et sable créent une atmosphère apaisante en écho aux paysages environnants.",
    details: {
      surface: "220 m²",
      year: "2021",
    },
    services: ["Décoration", "Consultation couleurs"],
  },
  {
    id: 9,
    slug: "villa-rak",
    title: "Villa R. RAK",
    subtitle: "Marrakech, Maroc",
    category: "residential",
    region: "maroc",
    mainImage: villaRakMain,
    gallery: [villaRakMain, villaRakGallery1, villaRakGallery2],
    description: "Cette villa majestueuse de la Palmeraie célèbre le savoir-faire artisanal marocain dans une interprétation résolument contemporaine. Les espaces monumentaux sont rythmés par des jeux de lumière savamment orchestrés. Le mobilier sur-mesure et les œuvres d'art ponctuent un intérieur où chaque détail témoigne d'une recherche d'excellence.",
    details: {
      surface: "800 m²",
      year: "2020",
    },
    services: ["Architecture d'intérieur", "Décoration"],
  },
  {
    id: 10,
    slug: "villa-b-marrakech",
    title: "Villa B.",
    subtitle: "Marrakech, Maroc",
    category: "residential",
    region: "maroc",
    mainImage: villaBMain,
    gallery: [villaBMain, villaBGallery1, villaBGallery2, villaBGallery3, villaBGallery4, villaBGallery5, villaBGallery6, villaBGallery7, villaBGallery8],
    description: "Projet phare de notre portfolio marocain, cette villa d'exception déploie ses espaces autour d'un patio central baigné de lumière. Chaque pièce raconte une histoire, mêlant pièces chinées, mobilier design et artisanat marocain d'exception. Les enduits à la chaux, les terres cuites anciennes et les boiseries sculptées créent une atmosphère d'un raffinement absolu.",
    details: {
      surface: "1200 m²",
      year: "2023",
    },
    services: ["Architecture d'intérieur", "Décoration", "Consultation couleurs"],
  },

  // MAROC - PROFESSIONNEL
  {
    id: 11,
    slug: "hotel-s-marrakech",
    title: "Hôtel S.",
    subtitle: "Marrakech, Maroc",
    category: "professional",
    region: "maroc",
    mainImage: hotelSMain,
    gallery: [hotelSMain],
    description: "Cet hôtel boutique de Marrakech propose une expérience immersive dans l'art de vivre marocain. Les suites ont été individuellement décorées, chacune offrant une interprétation unique du patrimoine local. Le lobby et les espaces communs jouent sur les contrastes entre ombres et lumières, créant une atmosphère théâtrale et envoûtante.",
    details: {
      surface: "2000 m²",
      year: "2022",
    },
    services: ["Architecture d'intérieur", "Décoration"],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getAdjacentProjects = (slug: string): { prev: Project | null; next: Project | null } => {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
};
