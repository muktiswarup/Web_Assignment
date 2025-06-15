import React from 'react';

const FloorPlans = () => {
  return (
    <section
      className="w-full py-12 px-4"
      style={{
        backgroundImage: `url(${'background.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Title and Tabs Row */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 max-w-7xl mx-auto gap-4">
        {/* Title Left */}
        <div className="flex items-center mb-4 md:mb-0">
          <img src="./mainhed.png" alt="crescent" className="w-14 h-14 mr-3" />
          <div>
            <div className="text-base md:text-lg font-semibold text-[#232323]">CANDEUR CRESCENT</div>
            <div className="text-2xl md:text-3xl font-extrabold text-[#232323]">PLANS</div>
          </div>
        </div>
        {/* Tabs Right */}
        <div className="flex flex-wrap justify-center gap-2">
          <button className="px-6 py-2 border border-black rounded-full text-black bg-white font-semibold">
            Master Plan
          </button>
          <button className="px-6 py-2 border border-black rounded-full text-white bg-black font-semibold">
            Tower Plan
          </button>
        </div>
      </div>

      {/* Floor Plan Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center mb-10 max-w-7xl mx-auto">
        {/* Reusable Card Component */}
        {['A', 'B', 'C', 'D', 'E'].map((tower, index) => (
          <div
            key={tower}
            className="bg-white bg-opacity-80 rounded-2xl border border-black p-4 w-[240px] flex flex-col items-center relative"
          >
            <div className="text-lg mb-2">
              Tower <span className="font-bold">{tower}</span>
            </div>
            <img src="./floorplans/a.jpg" alt={`Tower ${tower}`} className="w-full h-[180px] object-contain" />
            {(tower === 'B' || tower === 'D') && (
              <span className="absolute top-8 right-8 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full rotate-12 shadow">
                SOLD OUT
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Download Brochure */}
      <div className="flex justify-center md:justify-end max-w-7xl mx-auto px-2">
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
