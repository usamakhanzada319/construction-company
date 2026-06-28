import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Blog() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  const BlogData = [
    {
      id: 1,
      image: "/Images/news1.webp",
      title: "Footprints in Time is perfect House in Kurashiki",
      category: "Properties",
      date: 24,
      month: "Nov",
      link: "#",
      delay: 100,
    },
    {
      id: 2,
      image: "/Images/news2.webp",
      title: "Footprints in Time is perfect House in Kurashiki",
      category: "Properties",
      date: 24,
      month: "Nov",
      link: "#",
      delay: 200,
    },
  ];

  return (
    // ✅ Fix 1: w-full + overflow-hidden
    <section className="w-full bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* ✅ Fix 2: max-w-[1440px] */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className="relative mb-8 sm:mb-10 md:mb-14 text-left"
          data-aos="fade-up"
        >
          <div className="relative z-10 inline-block bg-white pr-3 sm:pr-5">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-teko font-extrabold text-[#0B1C3A]">
              Latest News
            </h2>
          </div>
          <span className="absolute top-[-16px] xs:top-[-20px] sm:top-[-24px] md:top-[-28px] lg:top-[-32px] left-0 text-[32px] xs:text-[45px] sm:text-[55px] md:text-[65px] lg:text-[80px] text-white font-extrabold [-webkit-text-stroke:0.3px_#d0d9e8] select-none pointer-events-none z-0 whitespace-nowrap font-teko">
            Our Blog
          </span>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6">
          {BlogData.map((post) => (
            <div
              key={post.id}
              // ✅ Fix 4: Card bg white + shadow + rounded
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={post.delay}
            >
              {/* Image with Date Badge */}
              {/* ✅ Fix 3: relative parent for absolute badge */}
              <div className="relative overflow-hidden bg-[#F2F6FC]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto aspect-[571/325] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                {/* Date Badge */}
                <div className="absolute top-0 left-0 bg-[#F57C00] text-white text-center rounded-md px-6 py-3.5 min-w-[50px]">
                  <span className="block font-teko text-xl font-bold leading-none">
                    {post.date}
                  </span>
                  <span className="block font-barlow text-xs font-medium uppercase tracking-wider">
                    {post.month}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7 bg-[#0B1C3A]">
                {/* Category */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-[1px] h-4 bg-[#F57C00]"></span>
                  <span className="text-[#F57C00] font-barlow text-sm font-medium uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold font-barlow text-white leading-snug mb-4">
                  <Link
                    to={post.link}
                    className="hover:text-[#F57C00] transition-colors duration-200 no-underline"
                  >
                    {post.title}
                  </Link>
                </h3>

                {/* Read More */}
                <Link
                  to={post.link}
                  className="inline-block text-[#F57C00] font-barlow font-semibold text-sm
                    hover:text-[#F57C00] transition-colors duration-200 relative 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-0 after:h-[2px] after:bg-[#F57C00] 
                    hover:after:w-full after:transition-all after:duration-300"
                >
                  Read more »
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
