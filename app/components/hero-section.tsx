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
      <div className="container-padding section-y-lg">
        <div className="grid-2">
          <div className="stack stack-lg">
            <h1 className="fl1">{title}</h1>
            <p className="fl4 muted max-text">{description}</p>
            <div className="row-actions">
              <button className="btn-primary nowrap">{buttonText}</button>
              {secondaryButtonText && (
                <button className="btn-primary nowrap">{secondaryButtonText}</button>
              )}
            </div>
          </div>
          <div className="media media-portrait-tight">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="media-img"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
