import { x, facebook, linked, logoFooter } from '../assets/images';

const Footer = () => {
  return (
    <div className="container mx-auto w-full px-4 md:px-6 xl:px-[100px] mt-[140px]">
      <div
        className="flex flex-col py-[50px] px-[60px] gap-[50px] bg-sky-night-custom
        rounded-t-[45px]"
      >
        {/* navigation */}
        <div className="flex flex-col items-start gap-[66px]">
          {/* top */}
          <div className="flex flex-col gap-4 lg:flex-row items-center justify-between w-full">
            <img src={logoFooter} alt="Logo" />
            <nav className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10 text-white">
              <a className="underline decoration-gray-50/70 underline-offset-4">
                About us
              </a>
              <a className="underline decoration-gray-50/70 underline-offset-4">
                Services
              </a>
              <a className="underline decoration-gray-50/70 underline-offset-4">
                Use Cases
              </a>
              <a className="underline decoration-gray-50/70 underline-offset-4">
                Pricing
              </a>
              <a className="underline decoration-gray-50/70 underline-offset-4">
                Blog
              </a>
            </nav>
            <div className="hidden lg:flex items-start gap-[20px]">
              <img src={linked} alt="Linked" />
              <img src={facebook} alt="FB" />
              <img src={x} alt="x" />
            </div>
          </div>
          {/* bottom */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex flex-col items-start text-center justify-center gap-[17px] ">
              <span className="bg-green-custom rounded-[7px] px-[7px] text-black mx-auto mb-7">
                Contact us
              </span>
              <span className="text-lg leading-[23px] text-white mx-auto">
                Email: info@positivus.com
              </span>
              <span className="text-lg leading-[23px] text-white mx-auto">
                Phone: 555-567-8901
              </span>
              <span className="text-lg leading-[23px] text-white mx-auto">
                Address: 1234 Main St <br /> Moonstone City, Stardust State
                12345
              </span>
            </div>
            <div className="w-full flex flex-col lg:flex-col xl:flex-row items-start px-10 py-5 lg:py-[32px] xl:py-[58px] gap-[20px] bg-[#292A32] rounded-[14px]">
              <input
                type="text"
                placeholder="Email"
                className="w-full px-4 py-5 lg:px-[26px] lg:py-[26px] xl:px-[35px] xl:py-[22px] border rounded-[14px] border-white
                text-white placeholder-white text-lg leading-[23px]"
              />
              <button
                className="w-full py-5 lg:px-[26px] lg:py-[26px] xl:px-[35px] xl:py-[22px] rounded-[14px] bg-green-custom text-black
               text-base font-medium md:text-lg leading-[23px] placeholder-black cursor-pointer"
              >
                Subscribe to news
              </button>
            </div>
            <div className="flex lg:hidden items-start gap-[20px]">
              <img src={linked} alt="Linked" />
              <img src={facebook} alt="FB" />
              <img src={x} alt="x" />
            </div>
          </div>
          {/* line */}
        </div>
        {/* link and text */}
        <div className="flex flex-col gap-[50px]">
          <div className="bg-white w-full opacity-70 h-[1.5px]"></div>
          <div className="flex flex-col lg:flex-row text-center text-lg leading-7 text-white">
            <span>© 2023 Positivus. All Rights Reserved.</span>
            <a
              href="#privacy"
              className="ml-5 underline decoration-white underline-offset-2"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
