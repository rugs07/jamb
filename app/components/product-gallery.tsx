import Image from "next/image";

interface ProductItem {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
}

interface ProductGalleryProps {
  title: string;
  products: ProductItem[];
  backgroundColor?: "beige" | "light-grey" | "default";
}

export default function ProductGallery({
  title,
  products,
  backgroundColor = "light-grey",
}: ProductGalleryProps) {
  const bgClass =
    backgroundColor === "beige"
      ? "bg-beige"
      : backgroundColor === "light-grey"
      ? "bg-light-grey"
      : "";

  return (
    <section className={bgClass}>
      <div className="container-padding section-y-lg">
        <h2 className="fl2">{title}</h2>
        <div className="gallery-grid">
          {products.map((product, index) => (
            <div key={index} className="card">
              <div className="media media-square">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  fill
                  className="media-img"
                />
              </div>
              <h3 className="fl4 card-title">{product.title}</h3>
              <p className="fl6 card-subtitle">{product.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
