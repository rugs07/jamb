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
      {journalLabel && <div className="text-xs uppercase tracking-[0.12em] opacity-60">{journalLabel}</div>}
      <h2 className="fl1">{title}</h2>
      <p className="fl4 muted max-w-3xl">{description}</p>
      <button className="btn-primary self-start">{buttonText}</button>
    </div>
  );

  const imageContent = (
    <div className="relative w-full overflow-hidden aspect-[4/5] md:aspect-square">
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
      <div className="container-padding section-block">
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
