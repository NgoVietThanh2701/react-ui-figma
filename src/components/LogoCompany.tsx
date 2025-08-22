import {
  company_1,
  company_2,
  company_3,
  company_4,
  company_5,
  company_6
} from '../assets/images';

const companies = [
  {
    id: 1,
    url: company_1,
    alt: 'Company 1'
  },
  {
    id: 2,
    url: company_2,
    alt: 'Company 2'
  },
  {
    id: 3,
    url: company_3,
    alt: 'Company 3'
  },
  {
    id: 4,
    url: company_4,
    alt: 'Company 4'
  },
  {
    id: 5,
    url: company_5,
    alt: 'Company 5'
  },
  {
    id: 6,
    url: company_6,
    alt: 'Company 6'
  }
];

const LogoCompany = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 xl:px-[100px] mt-[70px] overflow-x-hidden">
      <div className="animate-marquee flex gap-16 items-center whitespace-nowrap">
        {companies.length &&
          companies.map((image) => (
            <img
              src={image.url}
              alt={image.alt}
              className="grayscale opacity-90 hover:grayscale-0 transition-all h-12 cursor-pointer"
            />
          ))}
        {companies.length &&
          companies.map((image) => (
            <img
              src={image.url}
              alt={image.alt}
              className="grayscale opacity-90 hover:grayscale-0 transition-all h-12 cursor-pointer"
            />
          ))}
      </div>
      {/* mobile */}
      <div
        style={{ animationDirection: 'reverse' }}
        className="flex sm:hidden animate-marquee items-center gap-16 whitespace-nowrap"
      >
        {companies.length &&
          companies.map((image) => (
            <img
              src={image.url}
              alt={image.alt}
              className="grayscale opacity-90 hover:grayscale-0 transition-all h-12 cursor-pointer"
            />
          ))}
        {companies.length &&
          companies.map((image) => (
            <img
              src={image.url}
              alt={image.alt}
              className="grayscale opacity-90 hover:grayscale-0 transition-all h-12 cursor-pointer"
            />
          ))}
      </div>
    </div>
  );
};

export default LogoCompany;
