import Heading from './common/Heading';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence'
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
        {/* card */}

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1.5}
          spaceBetween={40}
          centeredSlides={true}
          loop={false}
          initialSlide={1}
          pagination={{
            clickable: true,
            // dynamicBullets: true,
            el: '.custom-pagination',
            // bulletClass: 'swiper-pagination-bullet-custom',
            // bulletActiveClass: 'swiper-pagination-bullet-active-custom'
            renderBullet: (index, className) => {
              return `
        <svg class="${className}" width="17" height="17" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="white"/>
        </svg>
      `;
            }
          }}
          navigation={{
            nextEl: '.swiper-custom-next',
            prevEl: '.swiper-custom-prev'
          }}
          breakpoints={{
            // Mobile
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: true
            },
            // Tablet
            768: {
              slidesPerView: 1.4,
              spaceBetween: 20
            },
            // Desktop
            1024: {
              slidesPerView: 1.6,
              spaceBetween: 30
            },
            1280: {
              slidesPerView: 1.7,
              spaceBetween: 40
            }
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className="h-full py-4 px-8 md:py-12">
              <div
                key={index}
                className="text-white flex flex-col gap-10 mx-auto"
              >
                <div className="text-lg border border-green-custom rounded-4xl p-5 md:p-7 ld:p-10">
                  <span>{item.content}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-green-custom text-lg">{item.name}</span>
                  <span className="">{item.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          {/* Previous Button */}
          <button className="swiper-custom-prev text-white cursor-pointer hover:text-green-custom flex items-center justify-center w-10 h-10">
            <FaArrowLeft size={26} />
          </button>

          {/* Custom Pagination */}
          <div className="custom-pagination text-white items-center justify-center w-fit flex gap-3"></div>

          {/* Next Button */}
          <button className="swiper-custom-next text-white cursor-pointer hover:text-green-custom flex items-center justify-center w-10 h-10">
            <FaArrowRight size={26} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
