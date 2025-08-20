import CardServices from './common/CardServices';
import Heading from './common/Heading';
import card_1 from '../assets/card_1.svg';
import card_2 from '../assets/card_2.svg';
import card_3 from '../assets/card_3.svg';
import card_4 from '../assets/card_4.svg';
import card_5 from '../assets/card_5.svg';
import card_6 from '../assets/card_6.svg';

const gray_color = '#F3F3F3';
const sky_night = '#191A23';
const green_color = '#B9FF66';

const Services = () => {
  const title = 'Services';
  const content =
    ' At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:';

  return (
    <section className="w-[1440px] mx-auto px-[100px]">
      <Heading title={title} content={content} />
      {/* services block */}
      <div className="grid grid-cols-2 gap-10">
        <CardServices
          title_1="Search engine"
          title_2="optimization"
          img={card_1}
          bg_text={green_color}
          bg={gray_color}
        />
        <CardServices
          title_1="Pay-per-click"
          title_2="advertising"
          img={card_2}
          bg_text={gray_color}
          bg={green_color}
        />
        <CardServices
          title_1="Social Media"
          title_2="Marketing"
          img={card_3}
          bg_text={gray_color}
          bg={sky_night}
        />
        <CardServices
          title_1="Email"
          title_2="Marketing"
          img={card_4}
          bg_text={green_color}
          bg={gray_color}
        />
        <CardServices
          title_1="Content"
          title_2="Creation"
          img={card_5}
          bg_text={gray_color}
          bg={green_color}
        />
        <CardServices
          title_1="Analytics and"
          title_2="Tracking"
          img={card_6}
          bg_text={green_color}
          bg={sky_night}
        />
      </div>
    </section>
  );
};

export default Services;
