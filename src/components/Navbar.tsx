import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { logo } from '../assets/images';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white pb-1 shadow-sm">
      <div
        className="w-full container flex items-center justify-between mx-auto h-[68px] mt-[24px]
        md:mt-[40px] lg:mt-[60px] gap-4 px-4 md:px-6 xl:px-[100px]"
      >
        <img src={logo} alt="Logo" className="cursor-pointer" />
        {/*mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2"
        >
          {isMenuOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </button>

        {/* frame 10*/}
        <div
          className="hidden lg:flex flex-row items-center justify-center gap-[5px]
        lg:gap-7 xl:gap-9 text-xl leading-7"
        >
          <Link to="about" className="cursor-pointer whitespace-nowrap">
            About us
          </Link>
          <Link to="service" className="cursor-pointer whitespace-nowrap">
            Services
          </Link>
          <Link to="use case" className="cursor-pointer whitespace-nowrap">
            Use Cases
          </Link>
          <Link to="pricing" className="cursor-pointer whitespace-nowrap">
            Pricing
          </Link>
          <Link to="blog" className="cursor-pointer whitespace-nowrap">
            Blog
          </Link>
          <Link
            to="#"
            className="border-1 border-solid border-[#191A23] whitespace-nowrap rounded-[14px] px-[35px] py-[20px] cursor-pointer"
          >
            Request a quote
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 shadow-sm">
          <div className="container mx-auto px-4 space-y-4 flex flex-col md:items-center">
            <Link to="about" className="cursor-pointer">
              About us
            </Link>
            <Link to="service" className="cursor-pointer">
              Services
            </Link>
            <Link to="use case" className="cursor-pointer">
              Use Cases
            </Link>
            <Link to="pricing" className="cursor-pointer">
              Pricing
            </Link>
            <Link to="blog" className="cursor-pointer">
              Blog
            </Link>
            <Link
              to="#"
              className="border-1 border-solid border-[#191A23] rounded-[14px] px-[35px] py-[20px] cursor-pointer"
            >
              Request a quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
