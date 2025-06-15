import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";

const Hero = () => {
  return (
   <section
  className="relative text-white bg-no-repeat bg-center bg-contain min-h-[500px] md:min-h-[600px]"
  style={{ backgroundImage: `url('/HomeImage.png')` }}
>
  {/* Bottom Bar: 25% height */}
  <div className="absolute left-0 bottom-0 w-full flex flex-col md:flex-row" style={{ height: '25%' }}>
    {/* Stats Section */}
    <div className="w-full md:w-4/5 bg-gray-700 bg-opacity-70 flex flex-wrap md:flex-nowrap justify-center md:justify-around items-center px-2 md:px-4 py-2 md:py-0 h-full">
      {[
        { value: "5.5", label: "ACRES OF<br />PROJECT AREA" },
        { value: "5", label: "TOWERS<br />WITH PARKING" },
        { value: "5", label: "UNIT<br />PER FLOOR" },
        { value: "62000", label: "SQUARE FEET<br />LAVISH CLUBHOUSE" },
        { value: "10.1'", label: "CEILING HEIGHT<br />PER EACH FLAT" },
      ].map((stat, index) => (
        <div key={index} className="flex items-center w-1/2 sm:w-[180px] md:w-[150px] h-full mb-2 md:mb-0">
          <div className="relative">
            <img
              src="./mainhed.png"
              alt={stat.value}
              className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center text-lg md:text-2xl font-extrabold text-white">
              {stat.value}
            </span>
          </div>
          <div
            className="ml-2 text-xs md:text-sm font-semibold leading-tight"
            dangerouslySetInnerHTML={{ __html: stat.label }}
          />
        </div>
      ))}
    </div>

    {/* Contact Info */}
    <div className="w-full md:w-1/5 bg-black px-2 md:px-4 py-2 text-xs md:text-sm flex flex-col space-y-1 justify-center h-full">
      <div className="flex items-center space-x-2">
        <FaWhatsapp />
        <span className="font-bold">+91-7997555555</span>
      </div>
      <div className="flex items-center space-x-2">
        <HiOutlineMail />
        <span>enquiry@candeurcrescent.com</span>
      </div>
      <div className="flex items-start space-x-2">
        <CiLocationOn className="mt-1" />
        <span className="leading-tight">
          245, S.No. 104 & 106, Next to Sancta Maria International School,<br />
          Serilingampalle-Gachibowli Road,<br />
          Serilingampalle, Hyderabad-500019
        </span>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;
