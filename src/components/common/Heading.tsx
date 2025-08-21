type Prop = {
  title: string;
  content: string;
};

const Heading = ({ title, content }: Prop) => {
  return (
    <div className="flex flex-row items-start gap-10 mt-[140px] mb-[80px]">
      <h2 className="font-medium text-[40px] leading-[51px] bg-[#b9ff66] rounded-[7px] px-[7px]">
        {title}
      </h2>
      <span className="text-[18px] leading-[23px] max-w-[580px]">
        {content}
      </span>
    </div>
  );
};

export default Heading;
