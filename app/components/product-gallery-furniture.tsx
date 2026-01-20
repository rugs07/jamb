import Image from "next/image";

export interface ProductItem {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
}

interface ProductGalleryProps {
  title: string;
  products?: readonly ProductItem[];
}

export default function ProductGalleryFurniture({
  title,
  products = [],
}: ProductGalleryProps) {

  if (!products.length) return null;

  return (
    <section className="bg-[#E3E3E3]">
      <div className="container-padding section-block-padding">
        <h2 className="fl2 mb-6 md:mb-8 text-center">{title}</h2>

        <div className="gallery-grid">
          {products.map((product) => (
            <div
              key={product.imageSrc}
              className="flex flex-col"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden max-h-[300px]">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-contain"
                />
              </div>

              <h3 className="fl3 mt-3 text-center">{product.title}</h3>
              <p className="text-sm text-center text-[#555555] mt-1">
                {product.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
