import React, { useState } from 'react';
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";

const Amenities = () => {
  const [selectedTab, setSelectedTab] = useState('outdoor');

  const outdoorAmenities = [
    { name: 'Entrance And Exit Plaza', image: '/icons/17.png' },
    { name: 'Main Entrance Paving', image: '/icons/32.png' },
    { name: 'Cycling Track', image: '/icons/1.png' },
    { name: 'Tropical Plantation', image: '/icons/31.png' },
    { name: 'Amphitheater', image: '/icons/3.png' },
    { name: 'Half Basket Ball Court', image: '/icons/26.png' },
    { name: 'Lawn', image: '/icons/31.png' },
    { name: 'Water Body', image: '/icons/7.png' },
    { name: 'Free Standing Pylons', image: '/icons/30.png' },
    { name: 'Feature Wall', image: '/icons/50.png' },
    { name: 'Sculptures', image: '/icons/40.png' },
    { name: 'Stepping Stones', image: '/icons/26.png' },
    { name: 'Outdoor Gym', image: '/icons/23.png' },
    { name: 'Children Play Area', image: '/icons/41.png' },
    { name: 'Cricket Pitch', image: '/icons/13.png' },
    { name: 'Security Cabins', image: '/icons/49.png' },
    { name: 'Pharmacy', image: '/icons/10.png' },
    { name: 'Half Basket Ball Court', image: '/icons/26.png' }
  ];

  const clubhouseAmenities = [
    { name: 'Club Lounge', image: '/icons/1.png' },
    { name: 'Indoor Games', image: '/icons/1.png' },
    { name: 'Swimming Pool', image: '/icons/1.png' },
    { name: 'Banquet Hall', image: '/icons/1.png' },
    { name: 'Café', image: '/icons/1.png' },
    { name: 'Yoga Hall', image: '/icons/1.png' }
  ];

  const currentAmenities = selectedTab === 'outdoor' ? outdoorAmenities : clubhouseAmenities;

  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url('/footer-bg.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 sm:mb-16 gap-6">
          <div className="flex items-center gap-4">
            <img src="/mainhed.png" alt="amenities" className="w-16 sm:w-20 h-16 sm:h-20" />
            <span className="text-2xl sm:text-3xl font-extrabold text-white">AMENITIES</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedTab('outdoor')}
              className={`px-6 sm:px-10 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold transition border-2 
                ${selectedTab === 'outdoor'
                  ? 'bg-gradient-to-r from-[#fff] via-[#bdbdbd] to-[#232323] text-black border-transparent shadow-lg'
                  : 'bg-transparent text-white border-white'}`}
              style={selectedTab === 'outdoor'
                ? { boxShadow: '0 2px 12px 0 rgba(255,255,255,0.10)' }
                : {}}
            >
              OUTDOOR AMENITIES
            </button>
            <button
              onClick={() => setSelectedTab('clubhouse')}
              className={`px-6 sm:px-10 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold transition border-2 
                ${selectedTab === 'clubhouse'
                  ? 'bg-gradient-to-r from-[#fff] via-[#bdbdbd] to-[#232323] text-black border-transparent shadow-lg'
                  : 'bg-transparent text-white border-white'}`}
              style={selectedTab === 'clubhouse'
                ? { boxShadow: '0 2px 12px 0 rgba(255,255,255,0.10)' }
                : {}}
            >
              CLUBHOUSE AMENITIES
            </button>
          </div>
        </div>

        {/* Amenities Grid Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Text Section */}
          <div className="md:w-[32%] flex flex-col justify-center items-center md:items-start text-center md:text-left text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light leading-snug mb-6">
              An Amalgamation<br />
              of <span className="font-bold">Luxurious</span><br />
              Amenities &amp; Natural<br />
              Elements
            </h3>
            <button className="px-6 sm:px-8 py-2 sm:py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition font-semibold">
              Enquire Now
            </button>
          </div>

          {/* Right Grid Section */}
          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
              {currentAmenities.map((amenity, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-2"
                    style={{
                      background: 'radial-gradient(ellipse at 60% 40%, #fff 0%, #fff 40%, #232323 100%)',
                    }}
                  >
                    <img src={amenity.image} alt={amenity.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                  </div>
                  <p className="text-xs sm:text-sm text-center text-white font-medium">{amenity.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center sm:justify-end gap-4">
          <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
            <HiArrowNarrowLeft className="text-black w-4 h-4" />
          </span>
          <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center cursor-pointer">
            <HiArrowNarrowRight className="text-white w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
