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
      <div className="container-px container-py-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="flex flex-col gap-6 md:gap-8">
            <h2 className="font-level-2">{title}</h2>
            <p className="font-level-4 opacity-80 max-w-lg">{description}</p>
            <button className="btn-primary self-start">{buttonText}</button>
          </div>
          <div className="relative w-full aspect-[3/4] md:aspect-[2/3]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
