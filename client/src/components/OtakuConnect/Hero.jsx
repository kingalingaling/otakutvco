import OCLogo from "/assets/oc-logo.png";

const Hero = ({ navigate }) => {
  return (
    <div className="max-w-[1640] mx-auto p-0">
      <div className="relative max-h-[90vh]">
        {/* Overlay */}
        <div className="absolute pt-4 md:pt-0 bg-black/20 w-full h-full z-30 font-bold text-gray-200/90 flex flex-col justify-center items-center">
          <h1 className="text-center w-full"><img src={OCLogo} className="w-2/5 mx-auto lg:-mt-8 lg:w-1/4 md:block" alt="Otaku COnnect 2023" /></h1>
          <h2 className="text-2xl text-white font-bold mb-1.5 text-center px-[10%] lg:px-0 md:mb-3 lg:mb-1 md:text-3xl lg:text-6xl">
            The Biggest Anime/Weeb Convention in Nigeria
          </h2>
          <h2 className="text-xl text-white font-bold mb-1.5 md:mb-3 md:text-2xl lg:text-4xl">
            Get Tickets!
          </h2>
          {/* Mobile View */}
          <div className="flex justify-between w-[80%] md:hidden">
            <button
              onClick={() => navigate("/otakuconnect/abuja")}
              className="px-6 py-2 mt-6 bg-red-600 duration-300 hover:bg-white hover:text-red-500 rounded-md"
            >
              Abuja
            </button>
            <button
              onClick={() => navigate("/otakuconnect/lagos")}
              className="px-6 py-2 mt-6 bg-red-600 duration-300 hover:bg-white hover:text-red-500 rounded-md"
            >
              Lagos
            </button>
          </div>
          {/* Large View */}
          <div className="justify-between hidden md:flex md:w-[70%] lg:w-[50%] md:text-lg lg:text-2xl">
            <button
              onClick={() => navigate("/otakuconnect/abuja")}
              className="p-3 mt-2 bg-red-600 duration-300 hover:bg-white hover:text-red-500 rounded-md"
            >
              Otaku Connect Abuja
            </button>
            <button
              onClick={() => navigate("/otakuconnect/lagos")}
              className="p-3 mt-2 bg-red-600 duration-300 hover:bg-white hover:text-red-500 rounded-md"
            >
              Otaku Connect Lagos
            </button>
          </div>
        </div>
        <video
          className="inset-0 w-full h-[50vh] md:h-[60vh] lg:h-auto lg:max-h-[90vh] object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/assets/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
