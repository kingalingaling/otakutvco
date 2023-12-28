// import shuttlersLogo from "/assets/shuttlers-logo.webp";
import { Link } from "react-router-dom";

const ShuttlerComponent = () => {
  return (
    <div className="w-full bg-black text-white pt-4">
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center py-3">
        <div className="flex justify-between items-center w-full mb-5">
          {/* <img src={shuttlersLogo} alt="" className="w-24" /> */}
          <p className="w-2/3 md:text-lg mx-auto text-center">Not sure how to get to either venue?<br />Reserve a seat and ride with fellow Otaku to the event</p>
        </div>
        <div className="w-full flex justify-center lg:w-1/2">
          <Link to={"/otakuconnect/abuja-transport"} target="_blank">
            <button className="bg-green-500 text-black px-5 md:px-4 lg:px-5 py-2 md:text-lg font-black rounded-lg hover:bg-white hover:text-green-600 duration-300">
              Abuja Transport
            </button>
          </Link>
          {/* <Link
            target="_blank"
            to={
              "/otakuconnect/lagos-transport"
            }
          >
            <button className="bg-green-500 text-black px-5 md:px-4 lg:px-5 py-2 md:text-lg font-black rounded-lg hover:bg-white hover:text-green-600 duration-300">
              Lagos Transport
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ShuttlerComponent;
