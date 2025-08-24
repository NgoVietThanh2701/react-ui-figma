import { Link } from 'react-router-dom';
import { cta } from '../assets/images';

const CTA = () => {
  return (
    <section className="container w-full mx-auto px-4 md:px-6 xl:px-[100px] mt-[100px]">
      <div className="bg-background rounded-[45px] p-[60px] bg-gray-custom relative">
        <div className="lg:w-3/5 md:items-start flex flex-col gap-[26px]">
          <span className="font-medium text-3xl leading-[38px]">
            Let’s make things happen
          </span>
          <span className="text-[18px] leading-[23px]">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </span>
          <Link
            to="#"
            className="py-[20px] px-2 md:px-[35px] rounded-[14px] bg-[#191A23] text-[20px]
          leading-7 text-center text-white"
          >
            Get your free proposal
          </Link>
        </div>
        <img
          className="absolute hidden lg:block z-1 lg:right-[-80px] xl:right-[-100px] 2xl:right-0 top-[-26px]"
          src={cta}
          alt="CTA image"
        />
      </div>
    </section>
  );
};

export default CTA;
