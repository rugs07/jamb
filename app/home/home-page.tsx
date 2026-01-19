import Image from "next/image";
import Header from "../components/header";
import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import TwoColumnSection from "../components/two-column-section";
import ProductGallery from "../components/product-gallery";
import SubscriptionSection from "../components/subscription-section";
import Footer from "../components/footer";
import { homeContent, makeGalleryItems } from "./home-content";

export default function HomePage() {
  const latestChimneypieces = makeGalleryItems(
    homeContent.galleries.chimneypieces.itemsCount,
    homeContent.galleries.chimneypieces.imageSrc,
    homeContent.galleries.chimneypieces.imageAltPrefix,
  );

  const latestLighting = makeGalleryItems(
    homeContent.galleries.lighting.itemsCount,
    homeContent.galleries.lighting.imageSrc,
    homeContent.galleries.lighting.imageAltPrefix,
  );

  const latestFurniture = makeGalleryItems(
    homeContent.galleries.furniture.itemsCount,
    homeContent.galleries.furniture.imageSrc,
    homeContent.galleries.furniture.imageAltPrefix,
  );

  const latestStories = makeGalleryItems(
    homeContent.galleries.stories.itemsCount,
    homeContent.galleries.stories.imageSrc,
    homeContent.galleries.stories.imageAltPrefix,
  );

  return (
    <main className="min-h-screen">
      <Header />

      <HeroSection
        title={homeContent.hero.title}
        description={homeContent.hero.description}
        buttonText={homeContent.hero.primaryCta}
        secondaryButtonText={homeContent.hero.secondaryCta}
        imageSrc={homeContent.hero.imageSrc}
        imageAlt={homeContent.hero.imageAlt}
      />

      <Navigation />

      <TwoColumnSection
        title={homeContent.sections.fireplaces.title}
        description={homeContent.sections.fireplaces.description}
        buttonText={homeContent.sections.fireplaces.cta}
        imageSrc={homeContent.sections.fireplaces.imageSrc}
        imageAlt={homeContent.sections.fireplaces.imageAlt}
        backgroundColor="beige"
      />

      <ProductGallery
        title={homeContent.galleries.chimneypieces.title}
        products={latestChimneypieces}
        backgroundColor="light-grey"
      />

      <TwoColumnSection
        title={homeContent.sections.lighting.title}
        description={homeContent.sections.lighting.description}
        buttonText={homeContent.sections.lighting.cta}
        imageSrc={homeContent.sections.lighting.imageSrc}
        imageAlt={homeContent.sections.lighting.imageAlt}
        backgroundColor="beige"
      />

      <ProductGallery
        title={homeContent.galleries.lighting.title}
        products={latestLighting}
        backgroundColor="light-grey"
      />

      <TwoColumnSection
        title={homeContent.sections.furniture.title}
        description={homeContent.sections.furniture.description}
        buttonText={homeContent.sections.furniture.cta}
        imageSrc={homeContent.sections.furniture.imageSrc}
        imageAlt={homeContent.sections.furniture.imageAlt}
        backgroundColor="beige"
      />

      <ProductGallery
        title={homeContent.galleries.furniture.title}
        products={latestFurniture}
        backgroundColor="light-grey"
      />

      <TwoColumnSection
        title={homeContent.sections.journal.title}
        description={homeContent.sections.journal.description}
        buttonText={homeContent.sections.journal.cta}
        imageSrc={homeContent.sections.journal.imageSrc}
        imageAlt={homeContent.sections.journal.imageAlt}
        backgroundColor="beige"
        journalLabel={homeContent.sections.journal.label}
      />

      <section className="bg-light-grey">
        <div className="container-padding section-block">
          <h2 className="fl2 text-center mb-6 md:mb-8">{homeContent.galleries.stories.title}</h2>
          <div className="gallery-grid">
            {latestStories.map((story) => (
              <div key={story.imageAlt} className="flex flex-col">
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={story.imageSrc}
                    alt={story.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="fl4 mt-3">{story.title}</h3>
                <p className="text-sm text-[#555555] mt-1">{story.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubscriptionSection
        title={homeContent.subscription.title}
        description={homeContent.subscription.description}
        buttonText={homeContent.subscription.cta}
        imageSrc={homeContent.subscription.imageSrc}
        imageAlt={homeContent.subscription.imageAlt}
      />

      <Footer />
    </main>
  );
}

