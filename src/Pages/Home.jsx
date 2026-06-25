import {
  Hero,
  Services,
  About,
  Projects,
  Contact,
  Counters,
  Team,
  Testimonial,
  Blog,
} from "../components/index.js";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Counters />
      <Team />
      <Testimonial />
      <Blog />
    </>
  );
}

export default Home;
