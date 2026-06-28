import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Projects() {
  const [activeCard, setActiveCard] = useState("all");
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const categories = [
    { id: "all", label: "Show All" },
    { id: "interior", label: "Interior" },
    { id: "recent", label: "Recent" },
    { id: "building", label: "Building" },
    { id: "park", label: "Park" },
  ];

  const ProjectData = [
    {
      id: 1,
      image: "/Images/project1.webp",
      title: "Floride Chemical",
      category: "Factory",
      link: "#",
    },
    {
      id: 2,
      image: "/Images/project2.webp",
      title: "Modern Villa",
      category: "Interior",
      link: "#",
    },

    {
      id: 3,
      image: "/Images/project3.webp",
      title: "Sky Tower",
      category: "Building",
      link: "#",
    },
    {
      id: 4,
      image: "/Images/project4.webp",
      title: "Green Park",
      category: "Park",
      link: "#",
    },
    {
      id: 5,
      image: "/Images/project5.webp",
      title: "Luxury Apartment",
      category: "Interior",
      link: "#",
    },

    {
      id: 6,
      image: "/Images/project6.webp",
      title: "Industrial Hub",
      category: "Factory",
      link: "#",
    },
    // Interior ke liye extra (3rd card)

    {
      id: 7,
      image: "/Images/project1.webp",
      title: "Modern Office",
      category: "Interior",
      link: "#",
    },
    // Recent ke liye (2 cards)
    {
      id: 8,
      image: "/Images/project2.webp",
      title: "City Mall",
      category: "Recent",
      link: "#",
    },
    {
      id: 9,
      image: "/Images/project3.webp",
      title: "Downtown Plaza",
      category: "Recent",
      link: "#",
    },
    // Building ke liye extra (2nd card)
    {
      id: 10,
      image: "/Images/project4.webp",
      title: "Commercial Complex",
      category: "Building",
      link: "#",
    },
    // Park ke liye extra (2nd card)
    {
      id: 11,
      image: "/Images/project5.webp",
      title: "Community Garden",
      category: "Park",
      link: "#",
    },
  ];
  // Filter projects based on active tab
  const filterProject =
    activeCard === "all"
      ? ProjectData.slice(0, 6)
      : ProjectData.filter((project) => {
          const categoryMap = {
            interior: "Interior",
            recent: "Recent",
            building: "Building",
            park: "Park",
          };
          return project.category === categoryMap[activeCard];
        });

  return (
    <section className="w-full  py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/*heading and filters*/}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          {/*heading*/}
          <div className="relative " data-aos="fade-up">
            <div className="relative z-10 inline-block pr-5">
              <h2 className="text-5xl md:text-7xl font-extrabold text-[#0B1C3A] font-teko">
                Our Project
              </h2>
            </div>
            <span
              className="absolute top-[-10px] md:top-[-28px] lg:top-[-32px] left-0 text-[40px] md:text-[60px] lg:text-[80px] font-extrabold text-white     
               [-webkit-text-stroke:0.2px_#d0d9e8] select-none pointer-events-none z-0 whitespace-nowrap font-teko"
            >
              Gallery
            </span>
          </div>
          {/*filter tab*/}
          <div className="flex flex-wrap gap-2" data-aos="fade-up">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCard(category.id)}
                className={`px-4 py-2 text-sm font-barlow font-bold rounded transition-all duration-300
                     ${
                       activeCard === category.id
                         ? "bg-[#f57c00] text-white"
                         : "bg-white text-[#0B1C3A] hover:bg-[#f57c00] hover:text-white "
                     }`}
              >
                {" "}
                {category.label}
              </button>
            ))}
          </div>
        </div>
        {/*project card*/}
        {filterProject.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filterProject.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-sm 
                          hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                {/*image*/}
                <div className="relative overflow-hidden bg-[#F2F6FC]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto aspect-[370/394] object-cover transition-transform duration-500 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {/*text content*/}
                <div className=" p-6 md:p-7  transition-colors duration-300 hover:bg-[#1F2B7B] hover:text-white">
                  <h3 className="text-lg font-semibold mb-1 font-barlow">
                    <Link
                      to={project.link}
                      className="  transition-colors duration-50 no-underline"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-blue-400/70 font-barlow text-sm ">
                    <Link to={project.link}>{project.category}</Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#4A4A4A] font-barlow text-lg">
              {" "}
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
