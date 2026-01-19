import Image from "next/image";

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
  secondaryButtonText?: string;
  imageSrc: string;
  imageAlt: string;
}

export default function HeroSection({
  title,
  description,
  buttonText,
  secondaryButtonText,
  imageSrc,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section className="bg-beige">
      <div className="container-px container-py-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="flex flex-col gap-6 md:gap-8">
            <h1 className="font-level-1">{title}</h1>
            <p className="font-level-4 opacity-80 max-w-lg">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary whitespace-nowrap">{buttonText}</button>
              {secondaryButtonText && (
                <button className="btn-primary whitespace-nowrap">{secondaryButtonText}</button>
              )}
            </div>
          </div>
          <div className="relative w-full aspect-[4/5] md:aspect-[3/4]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
