import { MdCancel } from "react-icons/md";
import { useState } from "react";
import shuttlersLogo from "/assets/shuttlers-logo.webp";
import { Link } from "react-router-dom";

const ShuttlerModal = () => {
  const [open, setOpen] = useState(true);
  return (
    open && (
      <div className="w-full z-50 fixed flex justify-center items-center">
        {/* Dialog */}
        <div className="bg-black text-white fixed flex flex-col justify-around text-center items-center rounded-xl p-4 w-[90%] md:w-[40%] lg:w-[30%] mx-auto">
          <div className="text-center font-bold">
            <img
              src={shuttlersLogo}
              alt="Shuttlers Logo"
              className="w-24 mx-auto mb-3"
            />
            <p>
              Together with Shuttlers, We&apos;ve arranged transportation at
              a subsidized cost
            </p>
            <p className="py-4">
              Reserve a seat and ride with fellow Otaku to the event
            </p>
          </div>
          <div className="flex justify-between items-center w-full">
            <Link to={"google.com"} target="_blank">
              <button className="bg-green-500 text-black px-5 py-2 md:text-lg font-black rounded-xl hover:bg-white hover:text-green-600 duration-300">
                Abuja Transport
              </button>
            </Link>
            <Link
              target="_blank"
              to={
                "https://my.shuttlers.africa/dashboard/events/join-waitlist/054ac1e7-9aa6-4546-a5ae-8a9d2b25462c "
              }
            >
              <button className="bg-green-500 text-black px-5 py-2 md:text-lg font-black rounded-xl hover:bg-white hover:text-green-600 duration-300">
                Lagos Transport
              </button>
            </Link>
          </div>
        </div>
        <div
          onClick={() => setOpen(false)}
          className="w-full h-screen bg-white/40 flex justify-center items-center p-5"
        >
          <MdCancel
            onClick={() => setOpen(false)}
            size={45}
            className="absolute cursor-pointer right-3 top-3 text-black/70"
          />
        </div>
      </div>
    )
  );
};

export default ShuttlerModal;
