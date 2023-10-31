import scoop from "/assets/images/scoop1-small.png";
import { Link } from "react-router-dom";

const OtakuScoop = () => {
  return (
    <div className="bg-black/5 w-full">
      <div className="p-4 md:max-w-[85%] mx-auto mt-4 flex flex-col md:flex-row justify-between">
        <div className="md:w-[50%] my-auto mx-auto text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-3 text-center md:text-left">
            Otaku Scoop
          </h2>
          <p className="pb-8 hidden md:block">
            Dive into our episodes and let our passionate hosts guide you
            through a journey filled with laughter, insights, and the joy of
            shared fandom. Whether you&apos;re a seasoned otaku or just taking
            your first steps into this mesmerizing universe, our podcasts cater
            to fans of all levels.
          </p>
          <p className="">
            Join the conversation, discover hidden gems, and connect with a
            community that celebrates the magic of anime. Subscribe now and
            embark on a thrilling adventure with us on Otaku Scoop.
            Your next favorite anime awaits!
          </p>
          <Link to={"https://linktr.ee/otakuscoop"}>
            <button className="mt-5 border border-red-500 rounded-md hover:bg-red-500 hover:text-white py-2 px-4 duration-300 font-bold">
              Listen Now
            </button>
          </Link>
        </div>
        <img src={scoop} alt="" className="md:h-[300px] lg:w-[500px] lg:h-[470px]" />
      </div>
    </div>
  );
};

export default OtakuScoop;
