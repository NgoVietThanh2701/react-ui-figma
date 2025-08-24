import { imageHeader } from '../assets/images';

const Header = () => {
  return (
    <header className="container w-full mt-28 md:mt-36 lg:mt-44 mx-auto px-4 md:px-6 xl:px-[100px]">
      <div
        className="w-full grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-2 md:gap-4
      lg:gap-6 xl:gap-12 items-start lg:items-stretch"
      >
        <h1
          className="font-medium text-[42px] lg:text-[56px] 2xl:text-[66px] leading-14 md:leading-16 lg:leading-[72px] 2xl:leading-[88px]
         lg:row-start-1 lg:col-start-1 order-1"
        >
          Navigating the digital landscape for success
        </h1>
        <div className="lg:row-span-2 lg:col-start-2 lg:row-start-1 order-2 flex justify-center items-center">
          <img src={imageHeader} alt="header image" />
        </div>
        <div className="lg:row-start-2 lg:col-start-1 space-y-[46px] order-3">
          <p className="text-[20px] leading-7">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <a
            href="#"
            className="bg-[#191A23] rounded-[14px] text-[20px] px-[35px] py-[20px] leading-7
        cursor-pointer text-center text-white"
          >
            Book a consultation
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
