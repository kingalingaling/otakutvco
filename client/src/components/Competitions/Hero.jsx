import compHero from "/assets/images/competitions/float.svg";

const Hero = () => {
  return (
    <div className="w-full lg:h-screen flex flex-col md:flex-row md:justify-center mb-16 items-center px-4 md:pt-0 md:px-16">
      <div className="md:w-1/2">
        <h1 className="text-3xl py-3 lg:text-5xl font-semibold mb-1 w-full">
          Participate in Otaku Connect &apos;23 Competitions
        </h1>
        <p className="text-xl md:text-xl lg:text-2xl w-full">
          Compete and stand a chance to win exciting prizes,
          including up to 50,000 Naira in cash! Engage in various activities
          such as dancing, signature competitions, drawing, and gaming.
        </p>
      </div>
      <img src={compHero} alt="" className=" w-full md:w-1/2 mt-8 md:mt-0" />
    </div>
  );
};

export default Hero;
