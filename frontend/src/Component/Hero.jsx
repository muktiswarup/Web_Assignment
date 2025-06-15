import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";

const Hero = () => {
  return (
    <section
      className="relative text-white bg-no-repeat bg-center bg-cover min-h-[500px] md:min-h-[600px]"
      style={{ backgroundImage: `url('/HomeImage.png')` }}
    >
      {/* Bottom Bar (25% height) */}
      <div className="absolute left-0 bottom-0 w-full flex flex-col md:flex-row" style={{ height: '25%' }}>
        
        {/* Stats Section */}
        <div className="w-full md:w-4/5 bg-gray-800 bg-opacity-60 flex flex-wrap md:flex-nowrap justify-center md:justify-around items-center px-2 md:px-4 py-1 h-full">
          {[
            { value: "5.5", label: "acres of<br />project area" },
            { value: "5", label: "towers<br />with parking" },
            { value: "5", label: "unit<br />per floor" },
            { value: "62000", label: "square feet<br />lavish clubhouse" },
            { value: "10.1'", label: "ceiling height<br />per each flat" },
          ].map((stat, index) => (
            <div key={index} className="flex items-center w-1/2 sm:w-[180px] md:w-[150px] h-full mb-2 md:mb-0">
              <div className="relative">
                <img
                  src="./mainhed.png"
                  alt={stat.value}
                  className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center text-base md:text-xl font-extrabold text-white">
                  {stat.value}
                </span>
              </div>
              <div
                className="ml-2 text-[10px] md:text-sm font-semibold leading-tight"
                dangerouslySetInnerHTML={{ __html: stat.label }}
              />
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/5 bg-black bg-opacity-70 px-2 md:px-4 py-1 text-[10px] md:text-sm flex flex-col space-y-1 justify-center h-full">
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
              245, S.No. 104 & 106, next to sancta maria international school,<br />
              serilingampalle-gachibowli road,<br />
              serilingampalle, hyderabad-500019
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
