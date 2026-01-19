export const homeContent = {
  hero: {
    title: "Fireplaces",
    description:
      "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam.",
    primaryCta: "Explore our Fireplaces",
    secondaryCta: "Sell an Antique Chimneypiece",
    imageSrc: "/placeholder-fireplace-hero.jpg",
    imageAlt: "Fireplace hero",
  },
  sections: {
    fireplaces: {
      title: "Fireplaces",
      description:
        "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam.",
      cta: "Explore our Fireplaces",
      imageSrc: "/placeholder-fireplace-section.jpg",
      imageAlt: "Fireplace section",
    },
    lighting: {
      title: "Lighting",
      description:
        "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam.",
      cta: "Explore our Lighting",
      imageSrc: "/placeholder-lighting-hero.jpg",
      imageAlt: "Lighting hero",
    },
    furniture: {
      title: "Furniture",
      description:
        "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam.",
      cta: "Explore our Furniture",
      imageSrc: "/placeholder-furniture-hero.jpg",
      imageAlt: "Furniture hero",
    },
    journal: {
      label: "JOURNAL",
      title: "The Grand Collection",
      description:
        "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam.",
      cta: "Discover more",
      imageSrc: "/placeholder-journal-hero.jpg",
      imageAlt: "Journal hero",
    },
  },
  galleries: {
    chimneypieces: {
      title: "Our latest chimneypieces",
      itemsCount: 4,
      imageSrc: "/placeholder-chimneypiece.jpg",
      imageAltPrefix: "Chimneypiece",
    },
    lighting: {
      title: "Our latest lighting",
      itemsCount: 5,
      imageSrc: "/placeholder-lighting.jpg",
      imageAltPrefix: "Lighting",
    },
    furniture: {
      title: "Our latest furniture",
      itemsCount: 5,
      imageSrc: "/placeholder-furniture.jpg",
      imageAltPrefix: "Furniture",
    },
    stories: {
      title: "See more of our latest stories.",
      itemsCount: 5,
      imageSrc: "/placeholder-story.jpg",
      imageAltPrefix: "Story",
    },
  },
  subscription: {
    title: "Subscribe to the Jamb Journal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    cta: "Discover more",
    imageSrc: "/placeholder-journal-cover.jpg",
    imageAlt: "Jamb Journal cover",
  },
} as const;

export function makeGalleryItems(count: number, imageSrc: string, imageAltPrefix: string) {
  return Array.from({ length: count }, (_, i) => ({
    imageSrc,
    imageAlt: `${imageAltPrefix} ${i + 1}`,
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
  }));
}

