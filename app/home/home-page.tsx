import Image from "next/image";
import Header from "../components/header";
import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import TwoColumnSection from "../components/two-column-section";
import ProductGallery from "../components/product-gallery";
import SubscriptionSection from "../components/subscription-section";
import Footer from "../components/footer";
import { homeContent, makeGalleryItems } from "./home-content";
import ProductGalleryFurniture from "../components/product-gallery-furniture";
import ProductGalleryChimney from "../components/product-gallery-chimney";

export default function HomePage() {
  const latestChimneypieces = makeGalleryItems(
    homeContent.galleries.chimneypieces.itemsCount,
    homeContent.galleries.chimneypieces.imageSrc,
    homeContent.galleries.chimneypieces.imageAltPrefix
  );

  const latestLighting = makeGalleryItems(
    homeContent.galleries.lighting.itemsCount,
    homeContent.galleries.lighting.imageSrc,
    homeContent.galleries.lighting.imageAltPrefix
  );

  const latestStories = makeGalleryItems(
    homeContent.galleries.stories.itemsCount,
    homeContent.galleries.stories.imageSrc,
    homeContent.galleries.stories.imageAltPrefix
  );

  return (
    <main className="min-h-screen">
      <Header />
      <img src="/landing/hero.png" className="mx-auto w-full container-padding h-[300px] md:h-auto" alt="" />
      <Navigation />

      <HeroSection
        title={homeContent.hero.title}
        description={homeContent.hero.description}
        buttonText={homeContent.hero.primaryCta}
        secondaryButtonText={homeContent.hero.secondaryCta}
        imageSrc={homeContent.hero.imageSrc}
        imageAlt={homeContent.hero.imageAlt}
      />

      <TwoColumnSection
        title={homeContent.sections.lighting.title}
        description={homeContent.sections.lighting.description}
        buttonText={homeContent.sections.lighting.cta}
        imageSrc={homeContent.sections.lighting.imageSrc}
        imageAlt={homeContent.sections.lighting.imageAlt}
      />

      <ProductGalleryChimney
        title={homeContent.galleries.chimneypieces.title}
        products={latestChimneypieces}
      />

      <ProductGallery
        title={homeContent.galleries.lighting.title}
        products={latestLighting}
      />

      <TwoColumnSection
        title={homeContent.sections.furniture.title}
        description={homeContent.sections.furniture.description}
        buttonText={homeContent.sections.furniture.cta}
        imageSrc={homeContent.sections.furniture.imageSrc}
        imageAlt={homeContent.sections.furniture.imageAlt}
      />

      <ProductGalleryFurniture
        title={homeContent.galleries.furniture.title}
        products={homeContent.galleries.furniture.products}
      />

      <TwoColumnSection
        title={homeContent.sections.journal.title}
        description={homeContent.sections.journal.description}
        buttonText={homeContent.sections.journal.cta}
        imageSrc={homeContent.sections.journal.imageSrc}
        imageAlt={homeContent.sections.journal.imageAlt}
        journalLabel={homeContent.sections.journal.label}
      />

      <ProductGallery
        title={homeContent.galleries.stories.title}
        products={latestStories}
      />

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
