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
          <div className="flex flex-col mx-auto order-2 md:order-none">
            <h1 className="fl1 text-center title-content-gap">{title}</h1>
            <p className="fl2 md:w-[80%] w-full mx-auto text-center">{description}</p>
            <div className="flex flex-col gap-4 mt-4 md:mt-8">
              <button className="btn-primary mx-auto">{buttonText}</button>
              {secondaryButtonText && (
                <button className="btn-primary mx-auto">{secondaryButtonText}</button>
              )}
            </div>
          </div>
          <div className="relative w-full overflow-hidden aspect-[3/4] md:aspect-[2/3] md:max-h-[500px] 2xl:max-h-[600px] order-1 md:order-none">
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
