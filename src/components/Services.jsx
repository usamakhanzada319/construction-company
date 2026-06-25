import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
function Services() {
  const servicesData = [
    {
      id: 1,
      image: "/Images/services01.webp",
      title: "Engineering techniques & implementation",
      link: "#",
      alt: "Engineering Services",
    },

    {
      id: 2,
      image: "/Images/services02.webp",
      title: "Engineering techniques & implementation",
      link: "#",
      alt: "Construction Services",
    },

    {
      id: 3,
      image: "/Images/services03.webp",
      title: "Engineering techniques & implementation",
      link: "#",
      alt: "Building Services",
    },
  ];

  //aos initialization

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/*heading*/}
        <div className="relative mb-28  " data-aos="fade-up ">
          <div className="relative z-10 inline-block pr-5 top-10 my-20">
            <h2 className="text-6xl  md:text-7xl font-extrabold text-[#0b1c3a] font-teko   ">
              {" "}
              Our Services
            </h2>
          </div>
          <span
            className="absolute top-[-8px] left-0 text-[120px] md:text-[150px] font-extrabold text-white     
           [-webkit-text-stroke:0.3px_#d0d9e8] select-none pointer-events-none z-0 whitespace-nowrap font-barlow"
          >
            Services
          </span>
        </div>
        {/*service cards*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8  ">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden 
              hover: transition-all duration-300 hover:-translate-y-1 flex flex-col h-full "
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="overflow-hidden bg-[#F2F6FC]">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-auto aspect-[370/268] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/*content*/}

              <div className="p-6 md:p-7 flex flex-col flex-1">
                <h3 className="text-xl font-semibold leading-snug mb-5 font-barlow">
                  <Link
                    to={service.link}
                    className="text-[#0B1C3A] hover:text-[#f57c00] transition-colors duration-200 
                               no-underline"
                  >
                    {service.title}
                  </Link>
                </h3>
                {/*read more button*/}
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2.5 text-sm font-semibold text-[#0b1c3a]  
                  duration-200 mt-auto group/link font-barlow"
                >
                  Read More
                  <span
                    className="inline-flex items-center justify-center w-7 h-7
                   bg-[#f1f5f9] rounded-[5px] transition-all duration-200 text-[#f57c00]
                    group-hover/link:bg-[#f57c00] group-hover/link:text-white"
                  >
                    {" "}
                    <FaPlus size={12} />
                  </span>
                </Link>
              </div>
              {/*bottom border*/}
              <div className="h-[2px] bg-[#f57c00] w-[calc(100%-50px)] mx-auto mb-5"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
