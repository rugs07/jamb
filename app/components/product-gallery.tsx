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
}: ProductGalleryProps) {

  return (
    <section className="bg-[#E3E3E3]">
      <div className="container-padding section-block-padding">
        <h2 className="fl2 mb-8 md:mb-12 text-center">{title}</h2>
        <div className="gallery-grid">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="fl3 mt-3 text-center">{product.title}</h3>
              <p className="text-sm text-[#555555] mt-1 text-center">{product.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
