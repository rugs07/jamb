import Image from "next/image";

interface SubscriptionSectionProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

export default function SubscriptionSection({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
}: SubscriptionSectionProps) {
  return (
    <section className="bg-light-grey">
      <div className="container-padding section-y-lg">
        <div className="grid-2">
          <div className="stack stack-lg">
            <h2 className="fl2">{title}</h2>
            <p className="fl4 muted max-text">{description}</p>
            <button className="btn-primary self-start nowrap">{buttonText}</button>
          </div>
          <div className="media media-portrait-tight media-tall-md">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="media-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
