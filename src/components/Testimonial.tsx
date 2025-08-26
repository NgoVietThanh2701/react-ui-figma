import Heading from './common/Heading';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import { useCallback } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

type TItem = {
  name: string;
  role: string;
  content: string;
};

const items: TItem[] = [
  {
    name: 'John Smith 1',
    role: 'Marketing Director at XYZ Corp',
    content:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business'
  },
  {
    name: 'John Smith 2',
    role: 'Marketing Director at XYZ Corp',
    content:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence'
  },
  {
    name: 'John Smith 3',
    role: 'Marketing Director at XYZ Corp',
    content:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence'
  },
  {
    name: 'John Smith 4',
    role: 'Marketing Director at XYZ Corp',
    content:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence'
  },
  {
    name: 'John Smith 5',
    role: 'Marketing Director at XYZ Corp',
    content:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence'
  }
];

const title = 'Testimonials';
const content =
  'Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services';

const Testimonial = () => {
  return (
    <section className="container w-full mx-auto px-4 md:px-6 xl:px-[100px]">
      <Heading title={title} content={content} />
      {/* content */}
      <div className="bg-sky-night-custom rounded-[45px] py-[84px]">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1.5}
          spaceBetween={40}
          centeredSlides={true}
          loop={false}
          initialSlide={1}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            renderBullet: useCallback((index: number, className: string) => {
              return `
                <button class="${className} custom-bullet flex items-center justify-center">
                  <svg width="17" height="17" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-all duration-300">
                    <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="currentColor"/>
                  </svg>
                </button>`;
            }, [])
          }}
          navigation={{
            nextEl: '.swiper-custom-next',
            prevEl: '.swiper-custom-prev'
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
              centeredSlides: true
            },
            640: {
              slidesPerView: 1.2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 1.4,
              spaceBetween: 24
            },
            1024: {
              slidesPerView: 1.6,
              spaceBetween: 32
            },
            1280: {
              slidesPerView: 1.8,
              spaceBetween: 40
            }
          }}
          className="testimonials-swiper"
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ height: 'auto' }}
              className="py-4 px-8 md:py-12 h-auto"
            >
              <div className="text-white flex flex-col gap-10 mx-auto h-full">
                <div className="text-lg border border-green-custom flex-1 rounded-4xl p-5 md:p-7 lg:p-10 relative">
                  <span>{item.content}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-green-custom shrink-0 text-lg">
                    {item.name}
                  </span>
                  <span>{item.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-3 md:gap-10 mt-6">
          {/* Previous Button */}
          <button
            aria-label="Previous testimonial"
            className="swiper-custom-prev text-white cursor-pointer hover:text-green-custom flex items-center justify-center w-12 h-12 transition-all duration-300 hover:scale-110"
          >
            <FaArrowLeft size={20} />
          </button>

          {/* Custom Pagination */}
          <div
            style={{ width: 'fit-content' }}
            className="flex custom-pagination items-center justify-center gap-0 md:gap-1 lg:gap-2"
          ></div>

          {/* Next Button */}
          <button
            aria-label="Next testimonial"
            className="swiper-custom-next text-white cursor-pointer hover:text-green-custom flex items-center justify-center w-12 h-12 transition-all duration-300 hover:scale-110"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
