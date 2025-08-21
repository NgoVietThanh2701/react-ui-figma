import Heading from './common/Heading';
import CardGroup from './common/CardGroup';
import avatar_card from '../assets/avatar-flower.svg';

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
    avatar: avatar_card,
    content:
      '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
  },
  {
    name: 'Jane Doe',
    role: 'Director of Operations',
    avatar: avatar_card,
    content:
      '7+ years of experience in project management and team leadership. Strong organizational and communication skills'
  },
  {
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
    avatar: avatar_card,
    content:
      '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'
  },
  {
    name: 'Emily Johnson',
    role: 'PPC Manager',
    avatar: avatar_card,
    content:
      '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'
  },
  {
    name: 'Brian Williams',
    role: 'Social Media Specialist',
    avatar: avatar_card,
    content:
      '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'
  },
  {
    name: 'Sarah Kim',
    role: 'Content Creator',
    avatar: avatar_card,
    content:
      '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries'
  }
];

const Group = () => {
  return (
    <section className="w-[1440px] mx-auto px-[100px]">
      <Heading title={title} content={content} />
      {/* group card */}
      <div className="grid grid-cols-3 gap-10">
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
      text-center text-white mt-[40px] flex items-end float-end"
      >
        See all team
      </button>
    </section>
  );
};

export default Group;
