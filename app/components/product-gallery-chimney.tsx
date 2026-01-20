"use client"
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-1 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/10 hover:bg-black/70 border-none cursor-pointer flex items-center justify-center transition-all"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-1 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/10 hover:bg-black/70 border-none cursor-pointer flex items-center justify-center transition-all"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  );
}

export default function ProductGalleryChimney({
  title,
  products,
}: ProductGalleryProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 769);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className='bg-[#E3E3E3]'>
      <div className="container-padding section-block-top">
        <h2 className="fl1 text-center title-content-gap">{title}</h2>
        
        {isMobile ? (
          <div className="relative">
            <Slider {...sliderSettings}>
              {products.map((product, index) => (
                <div key={index} className="px-4">
                  <div className="flex flex-col">
                    <div className="relative w-full aspect-[3/4] max-h-[400px] overflow-hidden mb-4">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="absolute top-0 left-0 w-full h-full max-h-[400px]  object-cover"
                      />
                    </div>
                    <h3 className="fl3 text-center mt-2">{product.title}</h3>
                    <p className="fl4 text-center">{product.subtitle}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {products.map((product, index) => (
              <div key={index} className="flex flex-col">
                <div className="relative w-full aspect-square overflow-hidden title-content-gap-sm">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="fl3 text-center mt-2">{product.title}</h3>
                <p className="fl4 text-center">{product.subtitle}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}