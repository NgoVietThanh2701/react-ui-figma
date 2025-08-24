import Heading from './common/Heading';
import { contact } from '../assets/images';

const title = 'Contact Us';
const content = "Connect with Us: Let's Discuss Your Digital Marketing Needs";

const Contact = () => {
  return (
    <section className="container w-full mx-auto px-4 md:px-6 xl:px-[100px] ">
      <Heading title={title} content={content} />
      {/* content */}
      <div
        className="relative pt-[32px] md:pt-[44px] lg:pt-[60px] px-[28px] md:px-[70px] lg:px-[100px]
       pb-42px md:pb-[56px] lg:pb-[80px] bg-gray-custom rounded-[45px]"
      >
        <div className="flex flex-col items-start gap-10 w-full lg:w-1/2 ">
          {/* radio */}
          <div className="flex items-center justify-center lg:justify-start gap-8 w-full">
            <div className="flex items-center gap-2">
              <input type="radio" className="w-7 h-7 accent-green-custom" />
              <span className="text-lg leading-[23px] whitespace-nowrap">
                Say Hi
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" className="w-7 h-7 accent-green-custom" />
              <span className="text-lg leading-[23px] whitespace-nowrap">
                Get a Quote
              </span>
            </div>
          </div>
          {/*field */}
          <div className="flex flex-col items-start gap-[5px] w-full">
            <label htmlFor="name" className="leading-7 text-base">
              Name
            </label>
            <input
              className="w-full px-[30px] py-[18px] bg-white border border-black rounded-[14px]"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col items-start gap-[5px] w-full">
            <label htmlFor="email" className="leading-7 text-base">
              Email*
            </label>
            <input
              className="w-full px-[30px] py-[18px] bg-white border border-black rounded-[14px]"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col items-start gap-[5px] w-full">
            <label htmlFor="message" className="leading-7 text-base">
              Message*
            </label>
            <textarea
              className="w-full h-32 px-[30px] py-[18px] bg-white border border-black rounded-[14px]"
              id="message"
              placeholder="Message"
            />
          </div>
          <button
            className="py-[20px] px-[35px] bg-sky-night-custom rounded-[14px] text-white
          w-full text-xl leading-7 text-center"
          >
            Send Message
          </button>
        </div>
        <img
          src={contact}
          alt="Contact"
          className="absolute top-[60px] right-0 hidden lg:block z-1 translate-x-[47%]"
        />
      </div>
    </section>
  );
};

export default Contact;
