import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

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
    <section className="relative w-full min-h-[120vh] overflow-hidden">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        {Slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full min-h-[120vh]">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.image}
                  alt={slide.badge}
                  className="w-full h-[110vh] min-h-[800px] object-cover"
                />
                <div className="absolute inset-0 bg-[#1a2a3a]/70"></div>
              </div>

              {/* Content - Staggered Vanish/Reveal */}
              <div className="relative z-10 flex items-center h-full w-full max-w-[1440px] mx-auto pt-16 sm:pt-20 lg:pt-24 px-0 sm:px-5 lg:px-8">
                {" "}
                <div className="max-w-full sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl text-white">
                  {/* Badge - Delay 0s */}
                  <div className="flex items-center mb-4 mt-8 sm:mt-10 lg:mt-12 animate-vanish-reveal">
                    <div className="w-6 h-0.5 bg-[#FF5F13]"></div>
                    <span className="text-lg sm:text-xl font-barlow font-medium tracking-wide text-white/90 ml-2">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Main Heading - Delay 0.5s */}
                  <h1
                    className="text-5xl sm:text-6xl md:text-5xl lg:text-8xl xl:text-[150px] font-barlow font-extrabold leading-tight text-[#FF5F13] animate-vanish-reveal "
                    style={{ animationDelay: "0.5s" }}
                  >
                    {slide.heading}
                  </h1>

                  {/* Stock Text - Delay 1s */}
                  <div
                    className="relative inline-block mt-2 animate-vanish-reveal"
                    style={{ animationDelay: "1s" }}
                  >
                    {/* Layer 1: White Border (Stroke) */}
                    <h2
                      className="text-7xl sm:text-8xl md:text-9xl lg:text-[130px] xl:text-[160px] font-barlow font-bold text-transparent leading-none"
                      style={{
                        WebkitTextStroke: "2px rgba(255,255,255,0.6)",
                        color: "transparent",
                      }}
                    >
                      {slide.stockText}
                    </h2>

                    {/* Layer 2: Orange Liquid Fill (Wave Animation) */}
                    <h2 className="absolute top-0 left-0 text-7xl sm:text-8xl md:text-9xl lg:text-[130px] xl:text-[160px] font-barlow font-bold liquid-fill leading-none">
                      {slide.stockText}
                    </h2>
                  </div>

                  {/* CTA Button - Delay 1.5s */}
                  <div
                    className="flex items-center mt-9 animate-vanish-reveal"
                    style={{ animationDelay: "1.5s" }}
                  >
                    <div className="w-6 h-0.5 bg-[#FF5F13]"></div>
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
