import { cx } from '../../utils/cx';

type Props = {
  title_1: string;
  title_2: string;
  img: string;
  bg_text: string;
  bg: string;
};

const CardServices = ({ title_1, title_2, img, bg_text, bg }: Props) => {
  return (
    <div
      className={`flex justify-between text-center p-[50px] gap-[40px] ${bg} border border-[#191A23]
    shadow-[0_5px_0px_#191A23] rounded-[45px]`}
    >
      <div className="flex flex-col justify-center items-start gap-[93px]">
        <div className="flex flex-col items-start">
          <span
            className={cx(
              `px-[7px] rounded-[7px] font-medium text-3xl leading-[38px]`,
              bg_text
            )}
          >
            {title_1}
          </span>
          <span
            className={cx(
              'px-[7px] rounded-[7px] font-medium text-3xl leading-[38px]',
              bg_text
            )}
          >
            {title_2}
          </span>
        </div>
        <a href="#" className="flex items-center gap-[15px]">
          {/*icon*/}
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="20.5"
              cy="20.5"
              r="20.5"
              fill={`${bg === 'bg-[#191A23]' ? '#F3F3F3' : '#191A23'} `}
            />
            <path
              d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
              fill={`${bg === 'bg-[#191A23]' ? '#191A23' : '#B9FF66'} `}
            />
          </svg>
          <span
            className={`text-xl leading-7 text-${
              bg === 'bg-[#191A23]' ? 'white' : 'black'
            }`}
          >
            Learn more
          </span>
        </a>
      </div>
      {/* image */}
      <img src={img} alt="Card_1" />
    </div>
  );
};

export default CardServices;
