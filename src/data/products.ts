export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  inspiration: string;
  sizes: string[];
  limited: boolean;
  stock: number;
}

export const products: Product[] = [
  {
    id: "1",
    title: "L'Éveil du Renard",
    price: 249,
    image: "https://picsum.photos/seed/naruto-fox/800/1200?blur=1",
    images: [
      "https://picsum.photos/seed/naruto-fox/800/1200?blur=1",
      "https://picsum.photos/seed/naruto-fox-detail/800/1200?blur=1",
      "https://picsum.photos/seed/naruto-fox-wall/800/1200?blur=1",
    ],
    description: "Une interprétation abstraite et puissante de l'énergie brute et indomptable. Les coups de pinceau vifs en rouge et orange évoquent une aura de chakra brûlant.",
    inspiration: "Inspiré par la volonté de feu et la lutte intérieure pour maîtriser ses propres démons.",
    sizes: ["40x60 cm", "60x90 cm", "80x120 cm"],
    limited: true,
    stock: 12,
  },
  {
    id: "2",
    title: "Danse de l'Eau et du Feu",
    price: 289,
    image: "https://picsum.photos/seed/demon-slayer/800/1200?blur=1",
    images: [
      "https://picsum.photos/seed/demon-slayer/800/1200?blur=1",
      "https://picsum.photos/seed/demon-slayer-detail/800/1200?blur=1",
    ],
    description: "Contraste saisissant entre la fluidité de l'eau et la chaleur incandescente des flammes. Une œuvre qui capture l'essence du mouvement parfait.",
    inspiration: "Hommage aux souffles élémentaires et à la détermination inébranlable face aux ténèbres.",
    sizes: ["40x60 cm", "60x90 cm"],
    limited: false,
    stock: 50,
  },
  {
    id: "3",
    title: "Domaine de l'Infini",
    price: 320,
    image: "https://picsum.photos/seed/jujutsu/800/1200?blur=1",
    images: [
      "https://picsum.photos/seed/jujutsu/800/1200?blur=1",
      "https://picsum.photos/seed/jujutsu-detail/800/1200?blur=1",
    ],
    description: "Une immersion visuelle dans un espace où les lois de la physique s'effondrent. Les teintes de violet néon et de noir profond créent une atmosphère mystique.",
    inspiration: "L'expansion de territoire, la maîtrise absolue de l'espace et de l'énergie occulte.",
    sizes: ["60x90 cm", "80x120 cm"],
    limited: true,
    stock: 5,
  },
  {
    id: "4",
    title: "L'Aube de la Liberté",
    price: 210,
    image: "https://picsum.photos/seed/one-piece/800/1200?blur=1",
    images: [
      "https://picsum.photos/seed/one-piece/800/1200?blur=1",
      "https://picsum.photos/seed/one-piece-detail/800/1200?blur=1",
    ],
    description: "Un horizon radieux où la mer rencontre le ciel. Une œuvre lumineuse qui symbolise l'aventure, le rire et la quête d'un rêve absolu.",
    inspiration: "Le souffle de la liberté, le son des tambours et la joie pure de l'aventure.",
    sizes: ["40x60 cm", "60x90 cm"],
    limited: false,
    stock: 30,
  },
  {
    id: "5",
    title: "Éclipse Écarlate",
    price: 275,
    image: "https://picsum.photos/seed/berserk/800/1200?blur=1",
    images: [
      "https://picsum.photos/seed/berserk/800/1200?blur=1",
    ],
    description: "Une lune rouge sang dominant un paysage désolé. Une toile sombre, texturée, exprimant la fatalité et la résilience.",
    inspiration: "La lutte éternelle contre le destin et les ténèbres qui nous entourent.",
    sizes: ["60x90 cm"],
    limited: true,
    stock: 8,
  },
  {
    id: "6",
    title: "Résonance de l'Âme",
    price: 195,
    image: "https://picsum.photos/seed/bleach/800/1200?blur=1",
    images: [
      "https://picsum.photos/seed/bleach/800/1200?blur=1",
    ],
    description: "Lignes tranchantes et contrastes forts entre le noir et le blanc, avec des éclats de bleu spirituel. Une représentation de l'équilibre intérieur.",
    inspiration: "L'éveil spirituel et la connexion entre le porteur et sa lame.",
    sizes: ["40x60 cm", "60x90 cm"],
    limited: false,
    stock: 25,
  }
];
