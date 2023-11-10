import unity1 from "/assets/images/team2.webp";
import unity2 from "/assets/images/team1.webp";
import innovation1 from "/assets/images/light.webp";
import innovation2 from "/assets/images/senku.webp";
import inspiration1 from "/assets/images/luffy.webp";
import inspiration2 from "/assets/images/ichigo.webp";

const Cards = () => {
  return (
    <div className="p-4 w-full text-xs md:text-base lg:max-w-[60%] mx-auto my-4 grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className=" max-h-[500px] shadow-lg rounded-lg p-6 shadow-black/10 group relative">
        <div className="relative w-full md:h-[250px]">
          <img
            src={innovation1}
            alt="Light Yagami"
            className="w-full h-full transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          <img
            src={innovation2}
            alt="Senku"
            className="w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
          />
        </div>
        <h2 className="text-xl font-bold py-2">Innovation and Expression</h2>
        <p className="">
          We encourage people to be creative and expressive, discovering their
          inner talents
        </p>
      </div>

      <div className=" max-h-[500px] shadow-lg rounded-lg p-6 shadow-black/10 group relative">
        <div className="relative w-full md:h-[250px]">
          <img
            src={unity1}
            alt="Team 7"
            className="w-full h-full transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          <img
            src={unity2}
            alt="Team Kakashi"
            className="w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
          />
        </div>
        <h2 className="text-xl font-bold py-2">Unity and Networking</h2>
        <p className="">
          We also look for means to unite people, connecting them with like
          minds and encouraging them to bring out the best themselves and others
        </p>
      </div>

      <div className="max-h-[500px] shadow-lg rounded-lg p-6 shadow-black/10 group relative">
        <div className="relative w-full md:h-[250px]">
          <img
            src={inspiration1}
            alt="Luffy"
            className="w-full h-full transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          <img
            src={inspiration2}
            alt="Ichigo"
            className="w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
          />
        </div>
        <h2 className="text-xl font-bold py-2">Inspiration and Growth</h2>
        <p className="">
          We believe that shared passions have the potential to inspire and
          elevate individuals to new heights.
        </p>
      </div>
    </div>
  );
};

export default Cards;
