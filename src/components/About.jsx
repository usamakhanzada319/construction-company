import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-16">
          {/*left side text content*/}
          <div className="lg:w-1/2 w-full" data-aos="fade-right">
            {/*heading*/}
            <div className="relative mb-10">
              <div className="relative z-10 inline-block pr-5">
                <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[82px] font-extrabold text-[#0B1C3A] font-teko whitespace-nowrap">
                  WHO WE ARE
                </h2>
              </div>
              <span
                className="absolute bottom-[-24px] left-0 text-[70px] md:text-[82px] font-extrabold text-white 
              [-webkit-text-stroke:0.2px_#d0d9e8] select-none pointer-events-none z-0 whitespace-nowrap font-teko"
              >
                About us
              </span>
            </div>
            {/*paragraphs*/}
            <div className="space-y-4 font-barlow  text-[#4A4A4A]">
              <p className="text-base md:text-lg leading-relaxed font-extrabold">
                Mollit anim laborum duis au dolor in voluptcate velit ess cillum
                dolore eu lore dsu quality mollit anim laborumuis au dolor in
                voluptate velit cillu.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re
                voluptate velit esscillumlore eu quife nrulla parihatur.
                Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg
                dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore
                mofllit anim
              </p>
            </div>
            {/*read more button*/}
            <Link
              to="#"
              className="inline-block mt-8 px-6 py-4 bg-[#ec7600] text-white font-teko font-semibold text-md rounded hover:bg-[#E06B00] transition-colors duration-300"
            >
              Read More
            </Link>
          </div>

          {/*right side image*/}
          <div className="lg:w-1/2 w-full relative" data-aos="fade-left">
            <div className="relative">
              <img
                src="/Images/about01.webp"
                alt="about us"
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy"
                decoding="async"
              />
              {/*bottom left blue block*/}
              <div className="absolute bottom-0 left-0 w-[119.7px] h-[112px] bg-[#1F2B7B]  flex flex-col items-center justify-center ">
                <span className="text-white font-teko font-bold text-3xl ">
                  1994
                </span>
                <p className="text-white/80 font-barlow text-sm tracking-[0.5em]">
                  SINCE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
