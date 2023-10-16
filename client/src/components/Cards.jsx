import unity1 from "/assets/images/unity1.svg";
import unity2 from "/assets/images/unity2.svg";
import innovation1 from "/assets/images/innovation1.svg";
import innovation2 from "/assets/images/innovation2.svg";
import inspiration1 from "/assets/images/inspiration1.svg";
import inspiration2 from "/assets/images/inspiration2.svg";

const Cards = () => {
  return (
    <div className="p-4 w-full text-xs md:text-md lg:max-w-[60%] mx-auto my-4 grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className=" max-h-[500px] shadow-lg rounded-lg p-6 shadow-black/10 group relative">
        <div className="relative w-full md:h-[250px]">
          <img
            src={innovation1}
            alt="First Image"
            className="w-full h-full transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          <img
            src={innovation2}
            alt="Second Image"
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
            alt="First Image"
            className="w-full h-full transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          <img
            src={unity2}
            alt="Second Image"
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
            alt="First Image"
            className="w-full h-full transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          <img
            src={inspiration2}
            alt="Second Image"
            className="w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
          />
        </div>
        <h2 className="text-xl font-bold py-2">Inspiration and Growth</h2>
        <p className="">
          We encourage people to be creative and expressive, discovering their
          inner talents
        </p>
      </div>
    </div>
  );
};

export default Cards;
