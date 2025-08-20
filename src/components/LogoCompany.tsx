import company_1 from '../assets/company_1.png';
import company_2 from '../assets/company_2.png';
import company_3 from '../assets/company_3.png';
import company_4 from '../assets/company_4.png';
import company_5 from '../assets/company_5.png';
import company_6 from '../assets/company_6.png';

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
    <div className="w-[1440px] mx-auto px-[100px] mt-[70px] flex items-center justify-between">
      <div className="flex flex-row justify-between w-full">
        {companies.length &&
          companies.map((image) => (
            <a href={image.alt} key={image.id}>
              <img
                src={image.url}
                alt={image.alt}
                className="grayscale opacity-90 hover:grayscale-0 transition-all h-12 cursor-pointer"
              />
            </a>
          ))}
      </div>
    </div>
  );
};

export default LogoCompany;
