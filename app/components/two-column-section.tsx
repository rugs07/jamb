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
    <div className="flex flex-col gap-6">
      {journalLabel && (
        <div className="font-level-6 uppercase tracking-wider opacity-60">
          {journalLabel}
        </div>
      )}
      <h2 className="font-level-1">{title}</h2>
      <p className="font-level-4 opacity-80">{description}</p>
      <button className="btn-primary self-start">{buttonText}</button>
    </div>
  );

  const imageContent = (
    <div className="relative w-full aspect-[4/5] md:aspect-square">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
      />
    </div>
  );

  return (
    <section className={bgClass}>
      <div className="container-px container-py-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
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
