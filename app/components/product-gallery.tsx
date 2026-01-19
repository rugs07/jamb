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
      <div className="container-padding section-block">
        <h2 className="fl2 mb-6 md:mb-8">{title}</h2>
        <div className="gallery-grid">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="fl4 mt-3">{product.title}</h3>
              <p className="text-sm text-[#555555] mt-1">{product.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
