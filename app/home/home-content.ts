export const homeContent = {
  hero: {
    title: "Fireplaces",
    description:
      "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit...",
    primaryCta: "Explore our Fireplaces",
    secondaryCta: "Sell an Antique Chimneypiece",
    imageSrc: "/fireplaces.png",
    imageAlt: "Fireplace hero",
  },

  sections: {
    fireplaces: {
      title: "Fireplaces",
      description:
        "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit...",
      cta: "Explore our Fireplaces",
      imageSrc: "/fireplaces.png",
      imageAlt: "Fireplace section",
    },
    lighting: {
      title: "Lighting",
      description:
        "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit...",
      cta: "Explore our Lighting",
      imageSrc: "/lightning.png",
      imageAlt: "Lighting hero",
    },
    furniture: {
      title: "Furniture",
      description:
        "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit...",
      cta: "Explore our Furniture",
      imageSrc: "/furniture.png",
      imageAlt: "Furniture hero",
    },
    journal: {
      label: "JOURNAL",
      title: "The Grand Collection",
      description:
        "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit...",
      cta: "Discover more",
      imageSrc: "/grand-collection.png",
      imageAlt: "Journal hero",
    },
  },

  galleries: {
    chimneypieces: {
      title: "Our latest chimneypieces",
      itemsCount: 4,
      imageSrc: "/chimney.png",
      imageAltPrefix: "Chimneypiece",
    },

    lighting: {
      title: "Our latest lighting",
      itemsCount: 5,
      imageSrc: "/dishlight.png",
      imageAltPrefix: "Lighting",
    },

    furniture: {
      title: "Our latest furniture",
      products: [
        {
          imageSrc: "/furniture1.png",
          imageAlt: "Furniture 1",
          title: "Modern Sofa",
          subtitle: "Comfortable 3-seater design",
        },
        {
          imageSrc: "/furniture2.png",
          imageAlt: "Furniture 2",
          title: "Wooden Dining Table",
          subtitle: "Solid wood premium finish",
        },
        {
          imageSrc: "/furniture3.png",
          imageAlt: "Furniture 3",
          title: "Accent Chair",
          subtitle: "Minimal ergonomic design",
        },
        {
          imageSrc: "/furniture4.png",
          imageAlt: "Furniture 4",
          title: "King Size Bed",
          subtitle: "Modern frame with storage",
        },
        {
          imageSrc: "/furniture5.png",
          imageAlt: "Furniture 5",
          title: "Side Cabinet",
          subtitle: "Compact stylish storage",
        },
      ],
    },

    stories: {
      title: "See more of our latest stories.",
      itemsCount: 5,
      imageSrc: "/latest-stories.png",
      imageAltPrefix: "Story",
    },
  },

  subscription: {
    title: "Subscribe to the Jamb Journal",
    description:
      "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam.",
    cta: "Discover more",
    imageSrc: "/jamb-journal.png",
    imageAlt: "Jamb Journal cover",
  },
} as const;

export function makeGalleryItems(
  count: number,
  imageSrc: string,
  imageAltPrefix: string,
) {
  return Array.from({ length: count }, (_, i) => ({
    imageSrc,
    imageAlt: `${imageAltPrefix} ${i + 1}`,
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
  }));
}
