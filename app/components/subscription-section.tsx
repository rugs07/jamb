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
      <div className="container-padding section-block-padding">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
          <div className="flex flex-col justify-center items-center gap-6 md:gap-8 order-2 md:order-none">
            <h2 className="fl1 text-center">{title}</h2>
            <p className="fl2 w-[90%] md:max-w-xl text-center">{description}</p>
            <button className="btn-primary mx-auto mt-4 md:mt-8">{buttonText}</button>
          </div>
          <div className="relative w-full overflow-hidden aspect-[3/4] max-h-[400px] md:max-h-[600px] order-1 md:order-none">
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
