import { useNavigate } from "react-router-dom";
import compHero from "/assets/images/competitions/competitions.svg";

const Competitions = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-black/90 py-16 flex flex-col md:flex-row text-white justify-center items-center">
      {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-3 text-center md:text-left">
        Otaku Connect &apos;23 Competitions
      </h2> */}
      <p className="px-7 md:w-1/2 md:text-lg lg:text-xl">
        Discover our engaging competitions designed to spark creativity and
        offer a chance to win fantastic prizes, including up to 50,000 Naira.
        Unleash your talents and join the fun!
      </p>
      <div className="md:w-1/2 flex flex-col px-7">
        <img src={compHero} className="h-[200px]" alt="" />
        <button
          onClick={() => {
            navigate("/otakuconnect/competitions");
          }}
          className="px-5 py-2 w-full lg:w-2/3 lg:mx-auto mt-5 bg-black text-white font-bold text-lg rounded-lg border border-white hover:bg-white hover:text-black duration-300"
        >
          View Competitions
        </button>
      </div>
    </div>
  );
};

export default Competitions;
