import CardServices from './common/CardServices';
import Heading from './common/Heading';

import {
  card_1,
  card_2,
  card_3,
  card_4,
  card_5,
  card_6
} from '../assets/images';

const gray_color = 'bg-[#F3F3F3]';
const sky_night = 'bg-[#191A23]';
const green_color = 'bg-[#B9FF66]';

const Services = () => {
  const title = 'Services';
  const content =
    ' At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:';

  return (
    <section className="container mx-auto px-4 md:px-6 xl:px-[100px]">
      <Heading title={title} content={content} />
      {/* services block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <CardServices
          title="Search engine optimization"
          img={card_1}
          bg_text={green_color}
          bg={gray_color}
        />
        <CardServices
          title="Pay-per-click advertising"
          img={card_2}
          bg_text={gray_color}
          bg={green_color}
        />
        <CardServices
          title="Social Media Marketing"
          img={card_3}
          bg_text={gray_color}
          bg={sky_night}
        />
        <CardServices
          title="Email Marketing"
          img={card_4}
          bg_text={green_color}
          bg={gray_color}
        />
        <CardServices
          title="Content Creation"
          img={card_5}
          bg_text={gray_color}
          bg={green_color}
        />
        <CardServices
          title="Analytics and Tracking"
          img={card_6}
          bg_text={green_color}
          bg={sky_night}
        />
      </div>
    </section>
  );
};

export default Services;
