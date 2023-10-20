import Navbar from "../components/Navbar";
import lost from "/assets/images/lost.svg";

const PageNotFound = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full md:w-[70%] mx-auto h-[100vh] font-bold flex flex-col justify-center items-center">
        <img src={lost} alt="" className="w-[400px]" />
        <p className="mt-4 px-8 text-center text-xl">Looks like you got lost</p>
        <p className="px-8 text-center text-xl">Navbar to the Rescue!!</p>
      </div>
    </div>
  );
};

export default PageNotFound;
