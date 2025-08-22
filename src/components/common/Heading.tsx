type Prop = {
  title: string;
  content: string;
};

const Heading = ({ title, content }: Prop) => {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-10 mt-[140px] mb-[80px]">
      <h2 className="font-medium text-[40px] leading-[51px] bg-green-custom rounded-[7px] px-[7px]">
        {title}
      </h2>
      <span className="text-[18px] text-center md:text-left leading-[23px] max-w-[580px]">
        {content}
      </span>
    </div>
  );
};

export default Heading;
