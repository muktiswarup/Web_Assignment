import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";

const Hero = () => {
  return (
    <section
      className="h-[500px] bg-cover bg-center relative text-white"
      style={{ backgroundImage: `url(${'/HomeImage.png'})` }}
    >
      <div
        className="absolute left-0 bottom-0 w-full flex"
        style={{ height: '30%' }}
      >
        {/* Stats (75%) */}
        <div className="w-3/4 h-full bg-gray-700 bg-opacity-70 flex justify-around items-center relative z-10">
          {/* Stat 1 */}
          <div className="flex items-center min-w-[220px] h-[100px]">
            <div className="relative">
              <img
                src="./mainhed.png"
                alt="5.5"
                className="w-[100px] h-[100px] rounded-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center text-4xl font-extrabold text-white">
                5.5
              </span>
            </div>
            <div className="ml-4 text-white text-sm font-semibold leading-tight">
              ACRES OF<br />PROJECT AREA
            </div>
          </div>
          {/* Stat 2 */}
          <div className="flex items-center min-w-[220px] h-[100px]">
            <div className="relative">
              <img
                src="./mainhed.png"
                alt="5"
                className="w-[100px] h-[100px] rounded-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center text-4xl font-extrabold text-white">
                5
              </span>
            </div>
            <div className="ml-4 text-white text-sm font-semibold leading-tight">
              TOWERS<br />WITH PARKING
            </div>
          </div>
          {/* Stat 3 */}
          <div className="flex items-center min-w-[220px] h-[100px]">
            <div className="relative">
              <img
                src="./mainhed.png"
                alt="5"
                className="w-[100px] h-[100px] rounded-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center text-4xl font-extrabold text-white">
                5
              </span>
            </div>
            <div className="ml-4 text-white text-sm font-semibold leading-tight">
              UNIT<br />PER FLOOR
            </div>
          </div>
          {/* Stat 4 */}
          <div className="flex items-center min-w-[220px] h-[100px]">
            <div className="relative">
              <img
                src="./mainhed.png"
                alt="62000"
                className="w-[100px] h-[100px] rounded-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center text-4xl font-extrabold text-white">
                62000
              </span>
            </div>
            <div className="ml-4 text-white text-sm font-semibold leading-tight">
              SQUARE FEET<br />LAVISH CLUBHOUSE
            </div>
          </div>
          {/* Stat 5 */}
          <div className="flex items-center min-w-[220px] h-[100px]">
            <div className="relative">
              <img
                src="./mainhed.png"
                alt="10.1'"
                className="w-[100px] h-[100px] rounded-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center text-4xl font-extrabold text-white">
                10.1'
              </span>
            </div>
            <div className="ml-4 text-white text-sm font-semibold leading-tight">
              CEILING HEIGHT<br />PER EACH FLAT
            </div>
          </div>
        </div>
        {/* Contact Info (25%) */}
        <div className="w-1/4 h-full flex items-center justify-center bg-black">
          <div className="w-full h-full flex flex-col items-start justify-center px-4 space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <span><FaWhatsapp /></span>
              <span className="font-bold">+91-7997555555</span>
            </div>
            <div className="flex items-center space-x-2">
              <span><HiOutlineMail /></span>
              <span>enquiry@candeurcrescent.com</span>
            </div>
            <div className="flex items-start space-x-2">
              <span><CiLocationOn /></span>
              <span>
                245, S.No. 104 & 106, Next to Sancta Maria International School,<br />
                Serilingampalle-Gachibowli Road,<br />
                Serilingampalle, Hyderabad-500019
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 