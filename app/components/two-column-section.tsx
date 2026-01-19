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
    <div className="stack">
      {journalLabel && (
        <div className="kicker">{journalLabel}</div>
      )}
      <h2 className="fl1">{title}</h2>
      <p className="fl4 muted max-text">{description}</p>
      <button className="btn-primary self-start nowrap">{buttonText}</button>
    </div>
  );

  const imageContent = (
    <div className="media media-portrait media-square-md">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="media-img"
      />
    </div>
  );

  return (
    <section className={bgClass}>
      <div className="container-padding section-y-lg">
        <div className="grid-2">
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
