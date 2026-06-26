import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonial() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const testimonialData = {
    quote: `Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in 
    re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur
     sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth
      incididbnt ut;o5tu layjobore mofllit anim. Mollit anim laborum.Dvcuis aute
       iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla
        parihatur. Excghcepteur sfwsignjn.`,
    name: "Jessya Inn",
    designation: "Co Founder",
  };
  return (
    <section className="w-full bg-[#0B1C3A] py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/*heading*/}
        <div
          className="relative mb-14 text-center lg:text-left"
          data-aos="fade-up"
        >
          <div className="relative z-10 inline-block pr-5">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white font-teko">
              Testimonial
            </h2>
          </div>
          <span
            className="absolute -top-12 left-0 text-[80px] md:text-[90px] lg:text-[100px] font-extrabold text-transparent/50
                 [-webkit-text-stroke:0.4px_#D0D9E8] select-none pointer-events-none z-0 whitespace-nowrap font-teko "
          >
            Feedback
          </span>
        </div>
        {/*content*/}
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <div className="bg-[#0B1C3A]  rounded-lg p-2 md:p-2 lg:p-2">
            {/*SVG quote*/}
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="116px"
                height="103px"
                viewBox="0 0 86 63"
              >
                <path
                  fillRule="evenodd"
                  strokeWidth="1px"
                  stroke="#f57c00"
                  fillOpacity="0"
                  fill="none"
                  d="M82.623,59.861 L48.661,59.861 L48.661,25.988 L59.982,3.406 L76.963,3.406 L65.642,25.988 L82.623,25.988 L82.623,59.861 ZM3.377,25.988 L14.698,3.406 L31.679,3.406 L20.358,25.988 L37.340,25.988 L37.340,59.861 L3.377,59.861 L3.377,25.988 Z"
                />
              </svg>
            </div>
            {/*quote text*/}
            <p className="text-white/50 font-barlow text-base md:text-lg leading-relaxed mb-8">
              {testimonialData.quote}
            </p>
            {/*founder info*/}
            <div className="flex items-center gap-3 pt-2">
              <span className="w-[1px] h-12 bg-[#F57C00] mr-1"></span>
              <div>
                <span className="text-white/50 font-teko text-lg font-thin block">
                  {testimonialData.name}
                </span>
                <p className="text-[#F57C00] font-barlow text-sm font-extralight uppercase mt-2 tracking-wider">
                  {testimonialData.designation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
