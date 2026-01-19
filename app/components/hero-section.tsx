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
    <section className="">
      <div className="container-padding section-block-top">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
          <div className="flex flex-col gap-6 md:gap-8 mx-auto">
            <h1 className="fl1 text-center">{title}</h1>
            <p className="fl4 muted max-w-3xl">{description}</p>
            <div className="flex flex-col gap-4 md:flex-row">
              <button className="btn-primary mx-auto">{buttonText}</button>
              {secondaryButtonText && (
                <button className="btn-primary mx-auto">{secondaryButtonText}</button>
              )}
            </div>
          </div>
          <div className="relative w-full overflow-hidden aspect-[3/4] md:aspect-[2/3] md:max-h-[500px] 2xl:max-h-[600px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
