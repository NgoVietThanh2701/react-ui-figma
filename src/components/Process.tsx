import { useState } from 'react';
import Heading from './common/Heading';

const title = 'Our Working Process';
const content = 'Step-by-Step Guide to Achieving Your Business Goals';

type Item = {
  title: string;
  content: string;
};

const items: Item[] = [
  {
    title: 'Consultation',
    content:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    title: 'Research and Strategy Development',
    content:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    title: 'Implementation',
    content:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    title: 'Reporting and Communication',
    content:
      'Liên hệ với đội ngũ hỗ trợ của chúng tôi qua chat, email hoặc hotline. Chúng tôi luôn sẵn sàng giúp đỡ bạn 24/7.'
  },
  {
    title: 'Continual Improvement',
    content:
      'Tìm hiểu các câu hỏi phổ biến về sử dụng dịch vụ, thanh toán, bảo mật và các vấn đề kỹ thuật thường gặp.'
  }
];

const Process = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="container w-full mx-auto px-4 md:px-6 xl:px-[100px]">
      <Heading title={title} content={content} />

      {/* list process */}
      <div className="space-y-10">
        {items &&
          items?.map((item: Item, index: number) => (
            <button
              onClick={() => toggleItem(index)}
              key={index}
              className={`${
                activeIndex === index ? 'bg-green-custom' : 'bg-gray-custom'
              } flex flex-col items-start py-[14px] md:py-[28px] lg:py-[41px] px-9 md:px-[45px] ld:px-[60px] 
              gap-[18px] md:gap-[22px] lg:gap-[30px] border border-[#191A23] rounded-[45px] shadow-[0_5px_0px_#191A23]
              transition-all duration-300 ease-in-out w-full`}
            >
              {/* title */}
              <div className="flex justify-between items-center w-full cursor-pointer">
                <div className="flex items-center gap-[25px]">
                  <span className="font-medium text-3xl md:text-4xl lg:text-6xl leading-[77px]">
                    0{index + 1}
                  </span>
                  <span className="font-medium text-2xl md:text-[26px] lg:text-3xl leading-[38px]">
                    {item.title}
                  </span>
                </div>
                {activeIndex === index ? (
                  <svg
                    width="58"
                    height="59"
                    viewBox="0 0 58 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="29"
                      cy="29.5"
                      r="28.5"
                      fill="#F3F3F3"
                      stroke="#191A23"
                    />
                    <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black" />
                  </svg>
                ) : (
                  <svg
                    width="58"
                    height="59"
                    viewBox="0 0 58 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="29"
                      cy="29.5"
                      r="28.5"
                      fill="#F3F3F3"
                      stroke="#191A23"
                    />
                    <path
                      d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z"
                      fill="#191A23"
                    />
                  </svg>
                )}
              </div>
              {/* line */}
              <div
                className={`bg-black w-full opacity-40 ${
                  activeIndex === index ? ' h-[1.5px]' : 'hidden'
                }`}
              ></div>
              {/* content */}
              <p
                className={`text-lg leading-[23px] overflow-hidden text-start ${
                  activeIndex !== index && 'opacity-0 hidden'
                }`}
              >
                {item.content}
              </p>
            </button>
          ))}
      </div>
    </section>
  );
};

export default Process;
