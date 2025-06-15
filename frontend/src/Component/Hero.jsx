import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";

const Hero = () => {
  return (
    <section
      className="h-[500px] bg-cover bg-center relative text-white"
      style={{ backgroundImage: `url('/HomeImage.png')` }}
    >
      <div className="absolute left-0 bottom-0 w-full flex flex-col md:flex-row">
        {/* Stats Section (75% on md and up) */}
        <div className="w-full md:w-3/4 bg-gray-700 bg-opacity-70 flex flex-wrap md:flex-nowrap justify-center md:justify-around items-center px-4 py-6">
          {[
            { value: "5.5", label: "ACRES OF<br />PROJECT AREA" },
            { value: "5", label: "TOWERS<br />WITH PARKING" },
            { value: "5", label: "UNIT<br />PER FLOOR" },
            { value: "62000", label: "SQUARE FEET<br />LAVISH CLUBHOUSE" },
            { value: "10.1'", label: "CEILING HEIGHT<br />PER EACH FLAT" },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex items-center w-full sm:w-[280px] md:w-[220px] h-[100px] mb-4 md:mb-0"
            >
              <div className="relative">
                <img
                  src="./mainhed.png"
                  alt={stat.value}
                  className="w-[100px] h-[100px] rounded-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl font-extrabold text-white">
                  {stat.value}
                </span>
              </div>
              <div
                className="ml-3 text-sm md:text-base font-semibold leading-tight"
                dangerouslySetInnerHTML={{ __html: stat.label }}
              />
            </div>
          ))}
        </div>

        {/* Contact Info (25% on md and up) */}
        <div className="w-full md:w-1/4 bg-black px-6 py-4 text-sm flex flex-col space-y-3 justify-center">
          <div className="flex items-center space-x-3">
            <FaWhatsapp />
            <span className="font-bold text-sm md:text-base">+91-7997555555</span>
          </div>
          <div className="flex items-center space-x-3">
            <HiOutlineMail />
            <span className="text-sm md:text-base">enquiry@candeurcrescent.com</span>
          </div>
          <div className="flex items-start space-x-3">
            <CiLocationOn className="mt-1" />
            <span className="text-sm md:text-base leading-tight">
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
