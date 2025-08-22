import Heading from './common/Heading';
import CardGroup from './common/CardGroup';
import { avatar } from '../assets/images';

const title = 'Team';
const content =
  'Meet the skilled and experienced team behind our successful digital marketing strategies';

type TCard = {
  name: string;
  role: string;
  avatar: string;
  content: string;
};

const listCard: TCard[] = [
  {
    name: 'John Smith',
    role: 'CEO and Founder',
    avatar: avatar,
    content:
      '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
  },
  {
    name: 'Jane Doe',
    role: 'Director of Operations',
    avatar: avatar,
    content:
      '7+ years of experience in project management and team leadership. Strong organizational and communication skills'
  },
  {
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
    avatar: avatar,
    content:
      '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'
  },
  {
    name: 'Emily Johnson',
    role: 'PPC Manager',
    avatar: avatar,
    content:
      '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'
  },
  {
    name: 'Brian Williams',
    role: 'Social Media Specialist',
    avatar: avatar,
    content:
      '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'
  },
  {
    name: 'Sarah Kim',
    role: 'Content Creator',
    avatar: avatar,
    content:
      '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries'
  }
];

const Group = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 xl:px-[100px]">
      <Heading title={title} content={content} />
      {/* group card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 xl:gap-10">
        {listCard &&
          listCard.map((card, index) => (
            <CardGroup
              key={index}
              name={card.name}
              content={card.content}
              avatar={card.avatar}
              role={card.role}
            />
          ))}
      </div>
      <button
        className="py-[20px] px-[35px] bg-sky-night-custom rounded-[14px] text-xl leading-7
      text-center text-white mt-[40px] w-full sm:w-fit float-end"
      >
        See all team
      </button>
    </section>
  );
};

export default Group;
