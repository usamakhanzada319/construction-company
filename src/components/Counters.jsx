import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Counters() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const CountersData = [
    {
      id: 1,
      number: 34,
      label: "MACHINERY",
      subLabel: "Tools",
      delay: 100,
    },
    {
      id: 2,
      number: 76,
      label: "MACHINERY",
      subLabel: "Tools",
      delay: 200,
    },
    {
      id: 3,
      number: 8,
      label: "MACHINERY",
      subLabel: "Tools",
      delay: 300,
    },
  ];

  return (
    // ✅ Fix: mb-0 karo taake overlap na ho
    <section className="relative w-full bg-[#0B1C3A] py-20 ">
      {/* Orange Div */}
      <div className="absolute bg-[#f57c00] max-w-[1400px] w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] left-1/2 -translate-x-1/2 -translate-y-6 sm:-translate-y-8 md:-translate-y-10 lg:-translate-y-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 py-12 md:py-12 lg:py-12">
            {CountersData.map((counter) => (
              <div
                key={counter.id}
                className="text-center text-white"
                data-aos="fade-up"
                data-aos-delay={counter.delay}
              >
                <h4 className="text-white ml-0 sm:ml-8 md:ml-12 lg:ml-14 font-barlow font-thin text-base tracking-[0.1em] mb-0">
                  {counter.label}
                </h4>

                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold font-teko text-white">
                    <CounterNumber end={counter.number} duration={2000} />
                  </span>
                  <span className="text-white font-barlow text-2xl sm:text-3xl font-semibold uppercase tracking-wider">
                    {counter.subLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CounterNumber({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationId;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

      if (progress < 1) {
        animationId = requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    animationId = requestAnimationFrame(animateCount);

    return () => {
      cancelAnimationFrame(animationId);
      setCount(0);
    };
  }, [end, duration]);

  return <>{count}</>;
}

export default Counters;
