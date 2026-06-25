import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Hero() {
  const Slides = [
    {
      id: 1,
      badge: "Professional Construction Services",
      heading: "Advanced",
      stockText: "Construction",
      ctaLink: "/services",
      ctaText: "Our Services",
      image: "/Images/hero.jpg",
    },
    {
      id: 2,
      badge: "Quality Building Solutions",
      heading: "Expert",
      stockText: "Construction",
      ctaLink: "/services",
      ctaText: "Our Services",
      image: "/Images/hero.jpg",
    },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Swiper Slider */}

      <Swiper
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        effect="fade"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full w-full"
        navigation={false}
        pagination={false}
      >
        {Slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image + Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.image}
                  alt={slide.badge}
                  className="w-full h-full object-cover"
                />
                {/* Blue Color Overlay */}

                <div className="absolute inset-0 bg-[#1a2a3a]/70"></div>
              </div>
              {/* Content */}

              <div className="relative z-10 flex items-center h-full container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl text-white">
                  {/* Badge */}
                  <div className=" flex items-center mb-4 mt-12 ">
                    <div className="w-6 h-0.5  bg-[#FF5F13]"></div>

                    <span className="text-lg sm:text-xl font-barlow font-medium tracking-wide text-white/90 ml-2">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-barlow font-bold leading-tight">
                    {slide.heading}
                  </h1>

                  {/* Stock Text - Wave Effect */}
                  <h2
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-barlow font-bold text-transparent"
                    style={{
                      WebkitTextStroke: "2px rgba(255,255,255,0.6)",
                      color: "transparent",
                    }}
                  >
                    {slide.stockText}
                  </h2>
                  {/* <div className="relative mt-2 overflow-hidden py-2">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-barlow font-bold">
                      <span
                        className="text-transparent"
                        style={{
                          WebkitTextStroke: "2px rgba(255,255,255,0.6)",
                          color: "transparent",
                        }}
                      >
                        {slide.stockText}
                      </span>
                    </h2> */}
                  {/* Color Wave - Text ke under */}
                  {/* <div className="absolute inset-0 flex items-center pointer-events-none">
                      <div className="w-full h-1/2 bg-gradient-to-r from-[#FF5F13] via-white to-[#FF5F13] bg-[length:200%_100%] animate-wave opacity-70 blur-sm"></div>
                    </div>
                  </div> */}

                  {/* CTA Button */}
                  <div className=" flex items-center  mt-9">
                    <div className="w-6 h-0.5  bg-[#FF5F13]"></div>

                    <span className="text-lg sm:text-xl font-barlow font-medium tracking-wide text-white/90 ml-2">
                      {slide.ctaText}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
