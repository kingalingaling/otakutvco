import { NavLink } from "react-router-dom";
import dancePic from "/assets/images/competitions/dance.webp";

const Dance = () => {
  return (
    <div className="md:w-[90%] lg:w-[85%] mx-auto flex flex-col md:flex-row">
      <div className="flex flex-col md:flex-row w-full mb-6 lg:mb-12 px-5">
        <img
          src={dancePic}
          alt="Otaku Connect '23 Dance Competition"
          className="md:h-[300px] lg:w-[500px] lg:h-[500px]"
        />
        <div className="w-full md:pl-8 flex flex-col justify-center">
          <h3 className="font-bold text-lg md:text-2xl md:pt-0 lg:text-3xl text-center w-full mb-2">
            Dance Competition
          </h3>
          <p className="w-full lg:text-lg">
            The capital of Nigeria, Center of Unity and home to over 3.6 million
            people. Abuja is Known for comprising of people from different
            backgrounds. <br />
            We&apos;ll be live at{" "}
            <span className="font-bold">La Vida Local</span>, Abuja for Otaku
            Connect &apos;23 on the 30th December 2023 from 10AM.
            <br />
          </p>
          <NavLink to={"https://forms.gle/RUFTfH151ZnDbN5M8"}>
            <button className="px-5 py-2 w-[50%] mx-auto mt-5 bg-red-500 text-white font-bold text-lg rounded-lg border border-red-500 hover:bg-white hover:text-red-500 duration-300">
              Register
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Dance;
