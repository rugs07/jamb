import Image from "next/image";

interface TwoColumnSectionProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  backgroundColor?: "beige" | "light-grey" | "default";
  imagePosition?: "left" | "right";
  journalLabel?: string;
}

export default function TwoColumnSection({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  backgroundColor = "beige",
  imagePosition = "right",
  journalLabel,
}: TwoColumnSectionProps) {
  const bgClass =
    backgroundColor === "beige"
      ? "bg-beige"
      : backgroundColor === "light-grey"
        ? "bg-light-grey"
        : "";

  const textContent = (
    <div className="flex flex-col gap-6 mx-auto">
      {journalLabel && (
        <div className="text-xs uppercase tracking-[0.12em] opacity-60 text-center">
          {journalLabel}
        </div>
      )}
      <h2 className="fl1 text-center">{title}</h2>
      <p className="fl3 max-w-3xl text-center">{description}</p>
      <button className="btn-primary w-fit text-center mx-auto">{buttonText}</button>
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
    <section className={bgClass}>
      <div className="container-padding section-block-padding">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
          {imagePosition === "left" ? (
            <>
              {imageContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {imageContent}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
