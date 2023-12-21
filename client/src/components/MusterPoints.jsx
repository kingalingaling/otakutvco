import { MdCancel } from "react-icons/md";
import { useState } from "react";

const MusterPoints = () => {
  const [open, setOpen] = useState(true);
  return (
    open && (
      <div className="w-full z-50 fixed flex justify-center items-center">
        {/* Dialog */}
        <div className="bg-white text-black fixed flex flex-col justify-around text-center items-center rounded-xl p-4 w-[90%] md:w-[40%] lg:w-[30%] mx-auto">
          <div className="text-center">
            <h2 className="font-bold text-lg mb-3">Muster/Pickup Points</h2>
            <div className="text-xs lg:text-md">
            <ul>
              <li className="mb-2">
                <strong>Ajah</strong>
                <br />
                Excess foods, Lekki-Epe expressway, Ajah.
              </li>

              <li className="mb-2">
                <strong>Ojota/Yaba</strong>
                <br />
                - Maryland Bus Stop (Ojota) or
                <br />
                - Lagos Presbyterian Church (Yaba)
              </li>

              <li className="mb-2">
                <strong>Ogba</strong>
                <br />
                Excellence Hotel, Ogba
              </li>

              <li className="mb-2">
                <strong>Festac</strong>
                <br />
                Festival Mall
              </li>

              <li className="mb-2">
                <strong>Unilag</strong>
                <br />
                MRS Filling Station
              </li>

              <li className="mb-2">
                <strong>Ikorodu</strong>
                <br />
                Ikorodu Garage, Forte Oil Filling station
              </li>

              <li className="mb-2">
                <strong>Ikeja/Maryland</strong>
                <br />
                Maryland Mall
              </li>

              <li className="mb-2">
                <strong>Surulere</strong>
                <br />
                National Stadium, Surulere
              </li>
            </ul>
            </div>
          </div>
        </div>
        <div
          onClick={() => setOpen(false)}
          className="w-full h-screen bg-black/50 flex justify-center items-center p-5"
        >
          <MdCancel
            onClick={() => setOpen(false)}
            size={35}
            className="absolute cursor-pointer right-3 top-3 text-white/70"
          />
        </div>
      </div>
    )
  );
};

export default MusterPoints;
