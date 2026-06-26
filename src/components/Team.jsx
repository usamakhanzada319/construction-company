import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Team() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const teamData = [
    {
      id: 1,
      name: "Ethan Welch",
      image: "/Images/team1.webp",
      designation: "UX Designer",
      delay: 100,
    },
    {
      id: 2,
      name: "Ethan Welch",
      image: "/Images/team2.webp",
      designation: "UX Designer",
      delay: 200,
    },
    {
      id: 3,
      name: "Ethan Welch",
      image: "/Images/team3.webp",
      designation: "UX Designer",
      delay: 300,
    },
  ];

  return (
    // ✅ Fix: Mobile par zyada padding-top do taake Counters se overlap na ho
    <section className="w-full bg-white overflow-hidden pt-68 sm:pt-52 md:pt-52 lg:pt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="relative mb-10 sm:mb-14 text-left" data-aos="fade-up">
          <div className="relative z-10 inline-block pr-5">
            <h2 className="text-5xl sm:text-5xl md:text-6xl font-extrabold text-[#0B1C3A] font-teko">
              Our Team
            </h2>
          </div>
          <span
            className="hidden sm:block absolute -top-6 sm:-top-8 md:-top-10 lg:-top-12 left-0 text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-extrabold text-white
                       [-webkit-text-stroke:0.3px_#D0D9E8] select-none pointer-events-none z-0 whitespace-nowrap font-teko"
          >
            Experts
          </span>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-14">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="group text-center"
              data-aos="fade-up"
              data-aos-delay={member.delay}
            >
              <div className="overflow-hidden bg-[#F2F6FC]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto aspect-[370/406] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <div className="mt-8">
                <div className="flex gap-2">
                  <span className="w-5 h-[2px] bg-[#F57C00]"></span>
                  <span className="text-[#F57C00] font-barlow text-sm font-medium uppercase tracking-wider">
                    {member.designation}
                  </span>
                </div>
                <h3 className="text-[#0B1C3A] font-teko text-left text-2xl font-bold mt-2">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
