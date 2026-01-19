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
      <div className="container-padding section-block">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
          <div className="flex flex-col gap-6 md:gap-8">
            <h2 className="fl2">{title}</h2>
            <p className="fl4 muted max-w-3xl">{description}</p>
            <button className="btn-primary self-start">{buttonText}</button>
          </div>
          <div className="relative w-full overflow-hidden aspect-[3/4] max-h-[600px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
