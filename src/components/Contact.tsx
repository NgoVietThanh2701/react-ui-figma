import Heading from './common/Heading';
import { contact } from '../assets/images';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const title = 'Contact Us';
const content = "Connect with Us: Let's Discuss Your Digital Marketing Needs";

interface FormData {
  title: string;
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
    //watch
  } = useForm<FormData>();

  //const watchedValues = watch();

  const handleSubmitContact = (data: FormData) => {
    console.log(data);
    toast.success('Success Notification !', {
      position: 'top-center'
    });
    reset();
  };

  return (
    <section className="container w-full mx-auto px-4 md:px-6 xl:px-[100px] ">
      <Heading title={title} content={content} />
      {/* content */}
      <div
        className="relative pt-[32px] md:pt-[44px] lg:pt-[60px] px-[28px] md:px-[70px] lg:px-[100px]
       pb-42px md:pb-[56px] lg:pb-[80px] bg-gray-custom rounded-[45px]"
      >
        <form
          onSubmit={handleSubmit(handleSubmitContact)}
          className="flex flex-col items-start gap-10 w-full lg:w-1/2 "
        >
          {/* radio */}
          <div className="">
            <div className="flex items-center justify-center lg:justify-start gap-8 w-full">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Say Hi"
                  {...register('title', {
                    required: 'Tiêu đề không được để trống'
                  })}
                  className="w-7 h-7 accent-green-custom"
                />
                <span className="text-lg leading-[23px] whitespace-nowrap">
                  Say Hi
                </span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Get a Quote"
                  {...register('title', {
                    required: 'Tiêu đề không được để trống'
                  })}
                  className="w-7 h-7 accent-green-custom"
                />
                <span className="text-lg leading-[23px] whitespace-nowrap">
                  Get a Quote
                </span>
              </div>
            </div>
            {errors.title && (
              <span className="text-red-500 font italic leading-7 mt-2 inline-block">
                {errors.title.message}
              </span>
            )}
          </div>
          {/*field */}
          <div className="flex flex-col items-start gap-[5px] w-full">
            <label htmlFor="name" className="leading-7 text-base">
              Name*
            </label>
            <input
              className="w-full px-[30px] py-[18px] bg-white border border-black rounded-[14px]"
              id="name"
              type="text"
              {...register('name', {
                required: 'Tên không được để trống',
                minLength: {
                  value: 6,
                  message: 'Tên phải có ít nhất 6 ký tự'
                }
              })}
              placeholder="Name"
            />
            {errors.name && (
              <span className="text-red-500 font italic leading-7">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col items-start gap-[5px] w-full">
            <label htmlFor="email" className="leading-7 text-base">
              Email*
            </label>
            <input
              className="w-full px-[30px] py-[18px] bg-white border border-black rounded-[14px]"
              id="email"
              type="text"
              {...register('email', {
                required: 'Email không được để trống',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Địa chỉ email không hợp lệ'
                }
              })}
              placeholder="Email"
              // value={payload.email}
              // onChange={handleChange}
            />
            {errors.email && (
              <span className="text-red-500 font italic leading-7">
                {errors.email.message as string}
              </span>
            )}
          </div>
          <div className="flex flex-col items-start gap-[5px] w-full">
            <label htmlFor="message" className="leading-7 text-base">
              Message*
            </label>
            <textarea
              className="w-full h-32 px-[30px] py-[18px] bg-white border border-black rounded-[14px]"
              id="message"
              {...register('message', {
                required: 'Message không được để trống',
                minLength: {
                  value: 10,
                  message: 'Message phải có ít nhất 10 ký tự'
                }
              })}
              placeholder="Message"
              // value={payload.message}
              // onChange={handleChange}
            />
            {errors.message && (
              <span className="text-red-500 font italic leading-7">
                {errors.message.message as string}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="py-[20px] px-[35px] bg-sky-night-custom rounded-[14px] text-white
          w-full text-xl leading-7 text-center cursor-pointer"
          >
            Send Message
          </button>
        </form>
        <img
          src={contact}
          alt="Contact"
          className="absolute top-[60px] right-0 hidden lg:block z-1 translate-x-[47%]"
        />
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
