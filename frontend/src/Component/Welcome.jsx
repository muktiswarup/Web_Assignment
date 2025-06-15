import React from "react";

const Welcome = () => {
  return (
    <section className="bg-[#fcf9f6] w-full py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left: Big outlined text */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1
            className="text-[48px] md:text-[64px] font-light leading-[1.1] tracking-wider text-left"
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
        {/* Center: Welcome and description */}
        <div className="flex-1 flex flex-col items-center md:items-start mt-10 md:mt-0 px-0 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#48483f] mb-4 text-center md:text-left">
            WELCOME TO <span className="font-bold text-[#232323]">CRESCENT</span>
          </h2>
          <p className="text-[#48483f] text-base md:text-lg mb-4 text-center md:text-left">
            Situated in the heart of Serilingampalle, Hyderabad, Candeur Crescent, is the embodiment of luxury and a refined lifestyle for the residents.
          </p>
          <p className="text-[#48483f] text-base md:text-lg mb-4 text-center md:text-left">
            To establish a new standard for highrise apartments, Candeur Crescent, is designed to change the city skyline of Hyderabad.
          </p>
          <p className="font-bold text-[#232323] text-lg mb-2 text-center md:text-left">
            RERA No. : <span className="font-extrabold">P02500004515</span>
          </p>
          <button className="mt-2 px-7 py-2 border-2 border-[#232323] rounded-full text-[#232323] font-semibold hover:bg-[#232323] hover:text-white transition">
            Enquire Now
          </button>
        </div>
        {/* Right: Building image with moon */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src="./right_glb.png"
            alt="crescent buildings"
            className="w-[340px] h-[340px] object-contain"
            style={{
              borderRadius: "50%",
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