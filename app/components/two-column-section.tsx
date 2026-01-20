import Image from "next/image";

interface TwoColumnSectionProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  journalLabel?: string;
}

export default function TwoColumnSection({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  journalLabel,
}: TwoColumnSectionProps) {
  const textContent = (
    <div className="flex flex-col mx-auto">
      {journalLabel && (
        <div className="text-[12px] mb-4 uppercase tracking-[0.12em] opacity-60 text-center">
          {journalLabel}
        </div>
      )}
      <h2 className="fl1 text-center title-content-gap">{title}</h2>
      <p className="fl2 md:w-[80%] w-full mx-auto text-center">{description}</p>
      <button className="btn-primary w-fit text-center mx-auto mt-4 md:mt-8">
        {buttonText}
      </button>
    </div>
  );

  const imageContent = (
    <div className="relative w-full overflow-hidden aspect-[3/4] md:aspect-[2/3] md:max-h-[500px] 2xl:max-h-[600px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-contain"
        priority
      />
    </div>
  );

  return (
    <section>
      <div className="container-padding section-block-padding">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
          <div className="order-2 md:order-none">{textContent}</div>

          <div className="order-1 md:order-none">{imageContent}</div>
        </div>
      </div>
    </section>
  );
}
