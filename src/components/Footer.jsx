import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#1a1a1a] text-gray-400 font-barlow overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/*main footer grid*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/*column 1 logo,about */}

          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <Link to="/" className="inline-block">
                <img
                  src="Images/logo.png"
                  alt="Construction Company"
                  className="h-10 w-auto"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          {/*column 2 quick link*/}

          <div>
            <h3 className="text-white font-teko text-xl font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-[#F57C00] transition-colors duration-200 test-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#F57C00] transition-colors duration-200 test-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  className="text-gray-400 hover:text-[#F57C00] transition-colors duration-200 test-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-[#F57C00] transition-colors duration-200 test-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/*column 3  contact*/}

          <div>
            <h4 className="text-blue-400 font-teko text-xl font-stretch-50% mb-4">
              Contact
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              198 West 21th Street, Suite 721 New York, NY 10010
            </p>
            <ul className="space-y-2">
              <li
                to="#"
                className="text-gray-400 hover:text-[#F57C00] transition-colors duration-200 text-sm"
              >
                Phone: +95 (0) 123 456 789
              </li>
              <li
                to="#"
                className="text-gray-400 hover:text-[#F57C00] transition-colors duration-200 text-sm"
              >
                Cell: +95 (0) 123 456 789
              </li>
            </ul>
          </div>
          {/*column 4 newsletter,map*/}
          <div>
            <div className="mb-6">
              <form className="relative flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-2.5 bg-[#1A1A1A] border border-gray-700 rounded-md text-gray-300 text-sm placeholder-gray-500
                  transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#1A1A1A] text-white font-barlow font-semibold text-sm rounded-md  transition-colors duration-200 whitespace-nowrap"
                >
                  {" "}
                  SIGN UP
                </button>
              </form>
            </div>
            {/*map*/}
            <div className="mt-4">
              <img
                src="Images/map.webp"
                alt="map"
                className="w-full max-w-[280px] h-auto rounded-md"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
        {/*copyright*/}
        <div className="border-t border-gray-800 mt-12 pt-6 text-left">
          <p className="text-gray-500 text-sm">
            Copyright &copy; {currentYear} All rights reserved | This template
            is made with <span className="text-[#f57c00]">❤</span> by{" "}
            <Link to="#" className="text-[#F57C00]  transition-colors ">
              Colorlib
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
