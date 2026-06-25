import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#0B1C3A]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 ">
        <div className="max-w-3xl mx-auto lg:mx-0 lg:ml-20 xl:ml-28 ">
          <div className="text-center lg:text-left" data-aos="fade-up">
            {/*heading*/}
            <div className="relative mb-10 inline-block lg:inline-block">
              <div className="relative z-10 inline-block pr-5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-teko">
                  Let's talk with us
                </h2>
              </div>
              <span
                className="absolute top-[-28px] md:top-[-56px] lg:top-[-58px] left-0 text-[75px] sm:text-[85px] md:text-[95px] lg:text-[105px] font-extrabold text-transparent     
                         [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] select-none pointer-events-none z-0 whitespace-nowrap font-teko"
              >
                {" "}
                Let's chat
              </span>
            </div>
            {/*paragraph*/}
            <p className="text-white/80 font-barlow text-base md:text-lg leading-relaxed max-w-2xl lg:mx-0 mt-6">
              {" "}
              Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate
              velit esscillumlore eu quife nrulla parihatur. Excghcepteur
              sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt
              mollitemnth incididbnt ut;o5tu layjobore mofllit anim.
            </p>
            {/*button*/}
            <div className="mt-10">
              <Link
                to="#"
                className="inline-block px-12 py-3.5 bg-white text-[#0B1C3A] font-teko font-thin text-xl rounded transition-all duration-300 hover:bg-[#f57c00] hover:text-white"
              >
                {" "}
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
