import cta_image from '../assets/cta_image.svg';

const CTA = () => {
  return (
    <div className="w-[1440px] mx-auto px-[100px] mt-[100px] relative">
      <div className="bg-background rounded-[45px] p-[60px]">
        <div className="w-[500px] items-start flex flex-col gap-[26px]">
          <span className="font-medium text-3xl leading-[38px]">
            Let’s make things happen
          </span>
          <span className="text-[18px] leading-[23px]">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </span>
          <a
            href="#"
            className="py-[20px] px-[35px] rounded-[14px] bg-[#191A23] text-[20px]
          leading-7 text-center text-white"
          >
            Get your free proposal
          </a>
        </div>
      </div>
      <img
        className="absolute z-1 right-24 top-[-26px]"
        src={cta_image}
        alt=""
      />
    </div>
  );
};

export default CTA;
