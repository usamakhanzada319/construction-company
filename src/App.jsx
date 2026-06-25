import { useEffect } from "react";
import Layout from "./components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/index";
import {
  ServicesPages,
  Home,
  AboutPage,
  ProjectsPage,
  ContactPage,
  CountersPage,
  TeamPage,
  TestimonialPage,
  BlogPage,
} from "./Pages/PageIndex";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="services" element={<ServicesPages />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="project" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="Counters" element={<CountersPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="testimonial" element={<TestimonialPage />} />
          <Route path="blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
