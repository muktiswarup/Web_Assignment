import React from "react";

const Welcome = () => {
  return (
    <section className="bg-[#fcf9f6] w-full py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Left: Big Outlined Text */}
        <div className="w-full lg:w-1/3 mb-10 lg:mb-0 flex justify-center lg:justify-start">
          <h1
            className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-light leading-tight tracking-wider text-center lg:text-left"
            style={{
              fontFamily: "Montserrat, Arial, sans-serif",
              letterSpacing: "0.05em",
              color: "#48483f",
              WebkitTextStroke: "1.5px #48483f",
              WebkitTextFillColor: "transparent",
              lineHeight: "1.05",
              fontWeight: 300,
            }}
          >
            LEAP INTO<br />
            THE SKY<br />
            WITH<br />
            CRESCENT
          </h1>
        </div>

        {/* Center: Welcome Content */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left px-2 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#48483f] mb-4">
            WELCOME TO <span className="font-bold text-[#232323]">CRESCENT</span>
          </h2>
          <p className="text-[#48483f] text-sm sm:text-base md:text-lg mb-4">
            Situated in the heart of Serilingampalle, Hyderabad, Candeur Crescent, is the embodiment of luxury and a refined lifestyle for the residents.
          </p>
          <p className="text-[#48483f] text-sm sm:text-base md:text-lg mb-4">
            To establish a new standard for highrise apartments, Candeur Crescent, is designed to change the city skyline of Hyderabad.
          </p>
          <p className="font-bold text-[#232323] text-base sm:text-lg mb-3">
            RERA No. : <span className="font-extrabold">P02500004515</span>
          </p>
          <button className="mt-2 px-6 py-2 border-2 border-[#232323] rounded-full text-[#232323] font-semibold hover:bg-[#232323] hover:text-white transition">
            Enquire Now
          </button>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <img
            src="./right_glb.png"
            alt="crescent buildings"
            className="w-[260px] sm:w-[300px] md:w-[340px] h-auto object-contain rounded-full"
            style={{
              boxShadow: "0 0 0 0 #fff",
              background: "transparent",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
