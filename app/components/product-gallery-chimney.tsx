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
}

export default function ProductGalleryChimney({
  title,
  products,
}: ProductGalleryProps) {

  return (
    <section className='bg-[#E3E3E3]'>
      <div className="container-padding section-block-top">
        <h2 className="fl2 text-center mb-8 md:mb-12">{title}</h2>
        <div className="grid grid-cols-4 gap-4">
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
              <h3 className="fl3 mt-3 text-center">{product.title}</h3>
              <p className="text-sm text-[#555555] mt-1 text-center">{product.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
