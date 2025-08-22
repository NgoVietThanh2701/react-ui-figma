type Prop = {
  name: string;
  role: string;
  content: string;
  avatar: string;
};

const CardGroup = ({ name, role, content, avatar }: Prop) => {
  return (
    <a
      href="#"
      className="px-7 py-8 md:px-[28px] md:py-[32px] lg:px-[35px] lg:py-[36px] rounded-[45px] shadow-[0_5px_0_#191A23] border
    border-sky-night-custom"
    >
      <div className="flex flex-col gap-7">
        {/* info */}
        <div className="relative">
          {/* picture and name*/}
          <div className="flex items-end pr-[76[x] gap-[12px] lg:gap-[16px] xl:gap-[20px]">
            <img src={avatar} alt="" />
            <div className="space-y-2">
              <span className="font-medium text-xl leading-[26px] block">
                {name}
              </span>
              <p className="text-base xl:text-lg leading-5 lg:leading-[23px]">
                {role}
              </p>
            </div>
          </div>
          <div className="absolute z-1 top-0 right-0">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="black" />
              <path
                d="M9.31776 25H12.8131V13.6844H9.31776V25Z"
                fill="#B9FF66"
              />
              <path
                d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z"
                fill="#B9FF66"
              />
              <path
                d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z"
                fill="#B9FF66"
              />
            </svg>
          </div>
        </div>
        {/* line */}
        <div className="bg-black w-full opacity-40 h-[1.5px]"></div>
        {/* content */}
        <p className=" text-lg leading-[23px]">{content}</p>
      </div>
    </a>
  );
};

export default CardGroup;
