import Logo from "/assets/logo.png";
import heroPlaceHolder from '/assets/videos/hero-holder.webp'
import Typed from "react-typed";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="max-w-[1640] mx-auto p-0 px-0">
      <div className="relative max-h-[90vh]">
        {/* Overlay */}
        <div className="absolute pt-4 bg-black/40 w-full pl-4 md:pl-28 h-full z-30 md:text-left font-bold text-gray-200/90 flex flex-col justify-center items-start">
          <img src={Logo} className="w-1/5 md:block" alt="" />
          <h2 className="text-lg mb-1.5 md:mb-3 md:text-2xl lg:text-4xl">
            Your One Stop Site <br />
            For Everything Anime
          </h2>
          <div>
            <Typed
              className="md:text-2xl lg:text-4xl"
              strings={[
                "Podcast",
                "Downloads",
                "Otaku Connect",
                "Sauce",
                "Blogs",
              ]}
              typeSpeed={60}
              backSpeed={80}
              loop
            />
          </div>
          <Link to={"https://linktr.ee/otakutv"} target="_blank" rel="noreferrer">
            <button
              className="p-3 mt-6 md:mt-3 bg-transparent font-bold md:text-2xl lg:text-2xl hover:bg-red-700 hover:border-red-700 border border-white rounded-md duration-300"
            >
              Join our Community
            </button>
          </Link>
        </div>
        <video
          className="inset-0 w-full h-[80vh] md:h-[77vh] lg:h-auto lg:max-h-[90vh] object-cover"
          autoPlay
          loop
          muted
          poster={heroPlaceHolder}
        >
          <source src="/assets/videos/hero-vid-alt.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
