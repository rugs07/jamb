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
      <div className="container-px container-py-lg">
        <h2 className="font-level-2 mb-8 md:mb-12">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative w-full aspect-square mb-4 md:mb-6">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-level-4 mb-1">{product.title}</h3>
              <p className="font-level-6 opacity-70">{product.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
