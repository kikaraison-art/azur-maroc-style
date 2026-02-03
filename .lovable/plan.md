
# Integration des photos du book de Severine Pillot

## Resume

Le book PDF contient **plus de 70 images de haute qualite** representant les realisations reelles de Severine Pillot. Ces photos vont remplacer les placeholders actuels et enrichir considerablement le portfolio du site avec des visuels authentiques.

---

## Inventaire des projets identifies dans le book

### Cote d'Azur - Residentiels
| Projet | Pages | Images disponibles |
|--------|-------|-------------------|
| Villa K - Eze | 4, 12 | 3 photos |
| Appartement N - Vieux Nice | 5 | 1 photo |
| Villa M - Biot | 6-7 | 3 photos |
| Appartement M - Nice | 8 | 1 photo |
| Appartement B - Menton | 9 | 1 photo |
| Appartement K - Nice | 10 | 2 photos |
| Villa K - St-Jean-Cap-Ferrat | 13-14 | 2 photos |

### Cote d'Azur - Professionnels
| Projet | Pages | Images disponibles |
|--------|-------|-------------------|
| Showroom Zita Vito - Nice | 11 | 1 photo |
| Salon Merriaux - Nice | 15-17 | 3 photos |
| Galerie Mia - Nice | 18-19 | 3 photos |

### Maroc - Residentiels
| Projet | Pages | Images disponibles |
|--------|-------|-------------------|
| Villa L - Casablanca | 21-23 | 3 photos |
| Appartement K - Marrakech | 24-27 | 5 photos |
| Villa R. RAK - Marrakech | 28-30 | 6 photos |
| Villa B - Marrakech | 31-39 | 14 photos |

### Maroc - Professionnels
| Projet | Pages | Images disponibles |
|--------|-------|-------------------|
| Hotel S - Marrakech | 40 | 1 photo |

### Presse
| Magazine | Pages |
|----------|-------|
| Marie Claire, Art & Decoration, Cote Sud, Figaro | 41-45 |

---

## Plan d'implementation

### Etape 1 : Organisation des assets
Creer une structure de dossiers organisee dans `src/assets/` :

```text
src/assets/
├── hero/
│   └── villa-k-eze-hero.jpg       (depuis page 4)
├── projects/
│   ├── villa-k-eze/
│   │   ├── main.jpg
│   │   ├── gallery-1.jpg
│   │   └── gallery-2.jpg
│   ├── appartement-n-nice/
│   │   └── main.jpg
│   ├── villa-m-biot/
│   │   ├── main.jpg
│   │   ├── gallery-1.jpg
│   │   └── gallery-2.jpg
│   ├── villa-l-casablanca/
│   │   ├── main.jpg
│   │   ├── gallery-1.jpg
│   │   └── gallery-2.jpg
│   ├── appartement-k-marrakech/
│   │   ├── main.jpg
│   │   ├── gallery-1.jpg
│   │   ├── gallery-2.jpg
│   │   └── gallery-3.jpg
│   ├── villa-b-marrakech/
│   │   ├── main.jpg
│   │   └── gallery-1.jpg ... gallery-10.jpg
│   ├── salon-merriaux-nice/
│   │   ├── main.jpg
│   │   └── gallery-1.jpg
│   ├── galerie-mia-nice/
│   │   ├── main.jpg
│   │   └── gallery-1.jpg
│   └── hotel-s-marrakech/
│       └── main.jpg
└── press/
    ├── marie-claire.jpg
    ├── art-decoration.jpg
    ├── cote-sud.jpg
    └── figaro.jpg
```

### Etape 2 : Selection des meilleures images

Je vais selectionner les images les plus impactantes pour chaque usage :

**Hero principal**
- `img_p3_1.jpg` ou `img_p3_2.jpg` (Villa K Eze - page 4, image spectaculaire)

**Portfolio - Images principales (8-12 projets)**
1. Villa K Eze : `img_p3_1.jpg`
2. Appartement N Nice : `img_p4_2.jpg`
3. Villa M Biot : `img_p5_1.jpg`
4. Villa K St-Jean-Cap-Ferrat : `img_p12_1.jpg`
5. Salon Merriaux : `img_p14_1.jpg`
6. Galerie Mia : `img_p17_1.jpg`
7. Villa L Casablanca : `img_p20_2.jpg`
8. Appartement K Marrakech : `img_p23_1.jpg`
9. Villa R. RAK Marrakech : `img_p27_1.jpg`
10. Villa B Marrakech : `img_p30_1.jpg`
11. Hotel S Marrakech : `img_p39_1.jpg`

### Etape 3 : Mise a jour du Portfolio

Enrichir la liste des projets avec les nouvelles donnees authentiques :

```typescript
// src/data/projects.ts (nouveau fichier)
export const projects = [
  {
    id: 1,
    slug: "villa-k-eze",
    title: "Villa K.",
    subtitle: "Eze, Cote d'Azur",
    category: "residential",
    region: "cote-azur",
    mainImage: villaKEzeMain,
    gallery: [villaKEze1, villaKEze2, villaKEze3],
    description: "Renovation complete d'une villa avec vue mer...",
    services: ["Architecture d'interieur", "Decoration"],
  },
  // ... autres projets
];
```

### Etape 4 : Mise a jour du Hero

Remplacer l'image placeholder par une vraie photo de la Villa K Eze.

### Etape 5 : Mise a jour de la section Presse

Integrer les vrais extraits de magazines avec les images authentiques.

---

## Images a copier (priorite haute)

| Source (parsed-documents://) | Destination | Usage |
|------------------------------|-------------|-------|
| `img_p3_1.jpg` (page 4) | `src/assets/hero/villa-k-eze.jpg` | Hero principal |
| `img_p3_2.jpg` (page 4) | `src/assets/projects/villa-k-eze/main.jpg` | Portfolio |
| `img_p4_2.jpg` (page 5) | `src/assets/projects/appartement-n/main.jpg` | Portfolio |
| `img_p5_1.jpg` (page 6) | `src/assets/projects/villa-m-biot/main.jpg` | Portfolio |
| `img_p12_1.jpg` (page 13) | `src/assets/projects/villa-k-sjcf/main.jpg` | Portfolio |
| `img_p14_1.jpg` (page 15) | `src/assets/projects/salon-merriaux/main.jpg` | Portfolio |
| `img_p17_1.jpg` (page 18) | `src/assets/projects/galerie-mia/main.jpg` | Portfolio |
| `img_p20_2.jpg` (page 21) | `src/assets/projects/villa-l-casa/main.jpg` | Portfolio |
| `img_p23_1.jpg` (page 24) | `src/assets/projects/appt-k-marrakech/main.jpg` | Portfolio |
| `img_p27_1.jpg` (page 28) | `src/assets/projects/villa-rak/main.jpg` | Portfolio |
| `img_p30_1.jpg` (page 31) | `src/assets/projects/villa-b/main.jpg` | Portfolio |
| `img_p39_1.jpg` (page 40) | `src/assets/projects/hotel-s/main.jpg` | Portfolio |
| `img_p41_1.jpg` (page 42) | `src/assets/press/marie-claire.jpg` | Presse |
| `img_p42_1.jpg` (page 43) | `src/assets/press/art-deco.jpg` | Presse |
| `img_p43_1.jpg` (page 44) | `src/assets/press/cote-sud.jpg` | Presse |

---

## Modifications des fichiers

| Fichier | Action |
|---------|--------|
| `src/assets/projects/...` | Copier ~30 images du book |
| `src/assets/hero/...` | Copier image hero |
| `src/assets/press/...` | Copier images presse |
| `src/data/projects.ts` | Creer avec donnees authentiques |
| `src/components/Hero.tsx` | Mettre a jour import image |
| `src/components/Portfolio.tsx` | Enrichir avec nouveaux projets |
| `src/components/Press.tsx` | Integrer vraies images magazines |
| `src/pages/ProjectDetail.tsx` | Creer (pages detail projet) |
| `src/components/project/*.tsx` | Creer composants galerie |

---

## Details techniques

### Nomenclature des fichiers
- Noms en minuscules avec tirets
- Format : `{projet}-{numero}.jpg`
- Exemple : `villa-k-eze-01.jpg`

### Optimisation des images
Les images extraites du PDF sont deja au format JPG. Elles seront utilisees telles quelles car le bundler Vite les optimisera automatiquement.

### Structure des imports
```typescript
// Utilisation des imports ES6 pour les assets
import villaKMain from "@/assets/projects/villa-k-eze/main.jpg";
```

---

## Resultat attendu

- **Hero** : Image reelle de la Villa K a Eze avec vue mer
- **Portfolio** : 10-12 projets authentiques avec photos professionnelles
- **Pages detail** : Galeries riches avec 3-10 images par projet
- **Presse** : Vrais extraits de Marie Claire, Cote Sud, Art & Decoration, Figaro
- **Credibilite** : Site refletant 30 ans d'expertise avec preuves visuelles
