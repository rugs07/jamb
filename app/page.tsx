import Image from "next/image";
import Header from "./components/header";
import Navigation from "./components/navigation";
import HeroSection from "./components/hero-section";
import TwoColumnSection from "./components/two-column-section";
import ProductGallery from "./components/product-gallery";
import SubscriptionSection from "./components/subscription-section";
import Footer from "./components/footer";

export default function Home() {
  // Placeholder data - these will be replaced with actual images from Sanity CMS
  const latestStories = Array.from({ length: 5 }, (_, i) => ({
    imageSrc: "/placeholder-story.jpg",
    imageAlt: `Story ${i + 1}`,
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
  }));

  const latestChimneypieces = Array.from({ length: 4 }, (_, i) => ({
    imageSrc: "/placeholder-chimneypiece.jpg",
    imageAlt: `Chimneypiece ${i + 1}`,
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
  }));

  const latestLighting = Array.from({ length: 5 }, (_, i) => ({
    imageSrc: "/placeholder-lighting.jpg",
    imageAlt: `Lighting ${i + 1}`,
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
  }));

  const latestFurniture = Array.from({ length: 5 }, (_, i) => ({
    imageSrc: "/placeholder-furniture.jpg",
    imageAlt: `Furniture ${i + 1}`,
    title: "Lorem Ipsum",
    subtitle: "Subtitle",
  }));

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section - Fireplaces */}
      <HeroSection
        title="Fireplaces"
        description="Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam."
        buttonText="Explore our Fireplaces"
        secondaryButtonText="Sell an Antique Chimneypiece"
        imageSrc="/placeholder-fireplace-hero.jpg"
        imageAlt="Fireplace hero"
      />

      <Navigation />

      {/* Fireplaces Two-Column Section */}
      <TwoColumnSection
        title="Fireplaces"
        description="Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam."
        buttonText="Explore our Fireplaces"
        imageSrc="/placeholder-fireplace-section.jpg"
        imageAlt="Fireplace section"
        backgroundColor="beige"
      />

      {/* Latest Chimneypieces Gallery */}
      <ProductGallery
        title="Our latest chimneypieces"
        products={latestChimneypieces}
        backgroundColor="light-grey"
      />

      {/* Lighting Two-Column Section */}
      <TwoColumnSection
        title="Lighting"
        description="Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam."
        buttonText="Explore our Lighting"
        imageSrc="/placeholder-lighting-hero.jpg"
        imageAlt="Lighting hero"
        backgroundColor="beige"
      />

      {/* Latest Lighting Gallery */}
      <ProductGallery
        title="Our latest lighting"
        products={latestLighting}
        backgroundColor="light-grey"
      />

      {/* Furniture Two-Column Section */}
      <TwoColumnSection
        title="Furniture"
        description="Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam."
        buttonText="Explore our Furniture"
        imageSrc="/placeholder-furniture-hero.jpg"
        imageAlt="Furniture hero"
        backgroundColor="beige"
      />

      {/* Latest Furniture Gallery */}
      <ProductGallery
        title="Our latest furniture"
        products={latestFurniture}
        backgroundColor="light-grey"
      />

      {/* Journal Two-Column Section */}
      <TwoColumnSection
        title="The Grand Collection"
        description="Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam."
        buttonText="Discover more"
        imageSrc="/placeholder-journal-hero.jpg"
        imageAlt="Journal hero"
        backgroundColor="beige"
        journalLabel="JOURNAL"
      />

      {/* Latest Stories Gallery */}
      <section className="bg-light-grey">
        <div className="container-px container-py-lg">
          <h2 className="font-level-2 mb-8 md:mb-12 text-center">
            See more of our latest stories.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {latestStories.map((story, index) => (
              <div key={index} className="flex flex-col">
                <div className="relative w-full aspect-square mb-4">
                  <Image
                    src={story.imageSrc}
                    alt={story.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-level-4 mb-1">{story.title}</h3>
                <p className="font-level-6 opacity-70">{story.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <SubscriptionSection
        title="Subscribe to the Jamb Journal"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        buttonText="Discover more"
        imageSrc="/placeholder-journal-cover.jpg"
        imageAlt="Jamb Journal cover"
      />

      <Footer />
    </main>
  );
}
