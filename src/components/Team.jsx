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
    <section className=" bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/*heading*/}
        <div
          className="relative mb-14 text-center lg:text-left"
          data-aos="fade-up"
        >
          <div className="relative z-10 inline-block pr-5 ">
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#0B1C3A] font-teko">
              Our Team
            </h2>
          </div>
          <span
            className="absolute -top-12 left-0 text[80px] md:text-[90px] lg:text-[100px] font-extrabold text-white
          [-webkit-text-stroke:0.3px_#D0D9E8] select-none pointer-events-none z-0 whitespace-nowrap font-teko"
          >
            Experts
          </span>
        </div>
        {/*team card*/}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-14">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="group text-center"
              data-aos="fade-up"
              data-aos-delay={member.delay}
            >
              {/*image*/}
              <div className="overflow-hidden bg-[#F2F6FC]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto aspect-[370/406] object-cover transition-transform duration-500 ease-out  group-hover:scale-110"
                />
              </div>
              {/*content*/}
              <div className="mt-8">
                {/*designation with orange line*/}

                <div className="flex  gap-2">
                  {/*orange line*/}
                  <span className="w-5 h-[2px] bg-[#F57C00] "></span>
                  <span className="text-[#F57C00]  font-barlow text-sm font-medium uppercase tracking-wider">
                    {member.designation}
                  </span>
                </div>
                {/*name */}
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
