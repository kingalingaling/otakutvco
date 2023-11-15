import { NavLink } from "react-router-dom";
import dancePic from "/assets/images/competitions/dance-alt.png";

const Dance = ({ bgColor }) => {
  return (
    <div className={`w-full ${bgColor} py-16`}>
      <div className="md:w-[90%] lg:w-[85%] mx-auto flex flex-col md:flex-row">
        <div className="flex flex-col md:flex-row md:justify-between w-full  px-5">
          <img
            src={dancePic}
            alt="Otaku Connect '23 Dance Competition"
            className="mx-auto md:max-h-[300px] md:max-w-[300px] lg:max-w-[500px] lg:max-h-[500px]"
          />
          <div className="w-full md:pl-8 md:w-2/3 flex flex-col justify-center items-center">
            <h3 className="font-bold text-lg md:text-2xl md:pt-0 lg:text-3xl text-center w-full mb-2">
              Dance Performance
            </h3>
            <p className="w-full text-justify lg:text-lg">
              Showcase your exceptional dancing skills, seamlessly intertwined
              with the vibrant rhythms of K-pop music. Otaku Connect &apos;23
              invites you to be a part of this thrilling experience, offering
              you the opportunity to perform live on stage. Unleash your passion
              for dance and join us at Otaku Connect &apos;23 for a celebration
              of talent and creativity. Click below to register
            </p>
            <NavLink
              to={"https://forms.gle/RUFTfH151ZnDbN5M8"}
              className={"mx-auto w-1/2"}
            >
              <button className="px-5 py-2 w-full mt-5 bg-red-500 text-white font-bold text-lg rounded-lg border border-red-500 hover:bg-white hover:text-red-500 duration-300">
                Register
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dance;
