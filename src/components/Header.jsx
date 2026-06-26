import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeLink = "text-[#FF5F13] font-barlow font-medium transition-colors";

  const normalLink =
    "text-white font-medium font-barlow hover:text-[#FF5F13] transition-colors";

  return (
    <header className="  w-full font-barlow fixed top-0 left-0 right-0 z-50">
      {/*top bar*/}
      <div className="hidden lg:block bg-[#1a2a3a]/90 text-white border-b border-white/10 py-4">
        {/**/}
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            {/*left contact*/}
            <div className="flex items-center gap-6 font-barlow">
              <span className=" flex items-center gap-2">
                <FaPhone className="text-white hover:text-[#FF5F13]" />
                +(123) 1234-567-8901
              </span>

              <span className=" flex items-center gap-2">
                <FaEnvelope className="text-white hover:text-[#FF5F13]" />
                info@domain.com
              </span>

              <span className=" flex items-center gap-2">
                <FaClock className="text-white hover:text-[#FF5F13]" />
                Mon - Sat 8:00 - 17:30, Sunday - CLOSED
              </span>
            </div>
            {/*right social icons*/}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-white hover:text-[#FF5F13] transition-colors"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#FF5F13] transition-colors"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#FF5F13] transition-colors"
              >
                <FaTwitter className="text-sm" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#FF5F13] transition-colors"
              >
                <FaInstagram className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*main navbar*/}

      <div className="bg-[#1a2a3a]/90 backdrop-blur-sm shadow-sm  top-0 z-50 w-full">
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1">
            {/*logo*/}
            <Link to="/" className="flex-shrink-0">
              <img
                src="/Images/logo.png"
                alt="Construction Company"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
              />
            </Link>

            {/*desktop navigation*/}
            <nav className="hidden lg:flex items-center text-xl font-thin gap-8 font-barlow">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                About
              </NavLink>
              <NavLink
                to="project"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Project
              </NavLink>
              <NavLink
                to="Services"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Services
              </NavLink>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contact
              </NavLink>
            </nav>
            <Link
              to="/contact"
              className="hidden lg:inline-block bg-[#FF5F13] text-white px-6 py-2.5 rounded hover:bg-[#e0550f] transition-colors font-barlow"
            >
              Contact Now
            </Link>

            {/* mobile menu toggle*/}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-2xl text-white p-2 hover:bg-[#1a2a3a]/90 rounded-lg transition-colors"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/*mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-[#1a2a3a]/95 backdrop-blur-sm border-t border-white/10 py-4 px-4 flex flex-col gap-3 font-barlow">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              <Link
                to="/contact"
                className="bg-[#FF5F13] text-white px-6 py-3 rounded text-center hover:bg-[#e0550f] transition-colors font-barlow"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
