import OCLogoLight from "/assets/oc-logo.png";
import { useNavigate } from "react-router-dom";

const GetTickets = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 lg:px-0">
      <div className="bg-red-600 mx-auto p4 flex flex-col items-stretch">
        <div className="flex justify-center md:justify-between items-center md:w-[50%] mx-auto">
          <img src={OCLogoLight} alt="" className="w-[100px] md:w-[200px]" />
          <div className="w-8 md:hidden"></div>
          <button
            onClick={() => navigate("/otakuconnect")}
            className="font-bold text-lg md:text-xl bg-white border border-white rounded-lg w-32 h-10 md:w-44 md:h-16 hover:bg-black hover:text-white duration-300"
          >
            Get Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetTickets;
