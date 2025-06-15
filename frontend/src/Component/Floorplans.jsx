import React from 'react';

const FloorPlans = () => {
  return (
    <section
      className="h-1/4 w-full py-12 px-4"
      style={{
        backgroundImage: `url(${'background.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Title and Tabs Row */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 max-w-7xl mx-auto">
        {/* Title Left */}
        <div className="flex items-center mb-4 md:mb-0">
          <img src="./mainhed.png" alt="crescent" className="w-16 h-16 mr-2" />
          <div>
            <div className="text-lg font-semibold text-[#232323]">CANDEUR CRESCENT</div>
            <div className="text-3xl font-extrabold text-[#232323]">PLANS</div>
          </div>
        </div>
        {/* Tabs Right */}
        <div className="flex">
          <button className="px-8 py-2 border border-black rounded-full text-black bg-white font-semibold mr-2">
            Master Plan
          </button>
          <button className="px-8 py-2 border border-black rounded-full text-white bg-black font-semibold">
            Tower Plan
          </button>
        </div>
      </div>
      {/* Floor Plan Cards */}
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {/* Tower A */}
        <div className="bg-white bg-opacity-80 rounded-2xl border border-black p-4 w-[240px] flex flex-col items-center relative">
          <div className="text-lg mb-2">
            Tower <span className="font-bold">A</span>
          </div>
          <img src="./floorplans/a.jpg" alt="Tower A" className="w-full h-[180px] object-contain" />
        </div>
        {/* Tower B */}
        <div className="bg-white bg-opacity-80 rounded-2xl border border-black p-4 w-[240px] flex flex-col items-center relative">
          <div className="text-lg mb-2">
            Tower <span className="font-bold">B</span>
          </div>
          <img src="./floorplans/a.jpg" alt="Tower B" className="w-full h-[180px] object-contain" />
          {/* Sold Out Badge */}
          <span className="absolute top-8 right-8 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full rotate-12 shadow">
            SOLD OUT
          </span>
        </div>
        {/* Tower C */}
        <div className="bg-white bg-opacity-80 rounded-2xl border border-black p-4 w-[240px] flex flex-col items-center relative">
          <div className="text-lg mb-2">
            Tower <span className="font-bold">C</span>
          </div>
          <img src="./floorplans/a.jpg" alt="Tower C" className="w-full h-[180px] object-contain" />
        </div>
        {/* Tower D */}
        <div className="bg-white bg-opacity-80 rounded-2xl border border-black p-4 w-[240px] flex flex-col items-center relative">
          <div className="text-lg mb-2">
            Tower <span className="font-bold">D</span>
          </div>
          <img src="./floorplans/a.jpg" alt="Tower D" className="w-full h-[180px] object-contain" />
          {/* Sold Out Badge */}
          <span className="absolute top-8 right-8 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full rotate-12 shadow">
            SOLD OUT
          </span>
        </div>
        {/* Tower E */}
        <div className="bg-white bg-opacity-80 rounded-2xl border border-black p-4 w-[240px] flex flex-col items-center relative">
          <div className="text-lg mb-2">
            Tower <span className="font-bold">E</span>
          </div>
          <img src="./floorplans/a.jpg" alt="Tower E" className="w-full h-[180px] object-contain" />
        </div>
      </div>
      {/* Download Brochure */}
      <div className="flex justify-end max-w-7xl mx-auto">
        <button className="flex items-center border border-black rounded-full px-6 py-2 text-black font-semibold hover:bg-black hover:text-white transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
          </svg>
          Download Brochure
        </button>
      </div>
    </section>
  );
};

export default FloorPlans;