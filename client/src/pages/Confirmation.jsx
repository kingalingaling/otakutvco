import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import ReactLoading from "react-loading";
import gift from "/assets/images/gift.svg";
import lost from "/assets/images/lost.svg";

const Confirmation = () => {
  useEffect(() => {
    document.title = "Confirm Tickets";
  });

  const [ready, setReady] = useState(false);
  const [ticketExists, setTicketExists] = useState(false);
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [event, setEvent] = useState(null);
  const [locay, setLocay] = useState(null);
  const [tickets, setTickets] = useState(null);
  const [time, setTime] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tickedId = queryParams.get("ticket_id");

  const navigate = useNavigate();

  const getTickets = async () => {
    const docSnapAbj = await getDoc(doc(db, "abuja-tickets", tickedId));
    if (docSnapAbj.exists()) {
      const docDetails = docSnapAbj.data();
      setReady(true);
      setFullName(`${docDetails.first_name} ${docDetails.last_name}`);
      setEvent(docDetails.event);
      setLocay(
        "La Vida Local Spar Road, behind NNPC Petrol station Life Camp, Abuja - Federal Capital Territory"
      );
      setTickets(docDetails.tickets);
      setTime("10AM, December 30, 2023");
      setEmail(docDetails.email);
      if (docDetails.status !== "confirmed") {
        setTicketExists(false);
      } else {
        setTicketExists(true);
      }
    } else {
      const docSnapLag = await getDoc(doc(db, "lagos-tickets", tickedId));
      if (docSnapLag.exists()) {
        const docDetails = docSnapLag.data();
        setReady(true);
        setFullName(`${docDetails.first_name} ${docDetails.last_name}`);
        setEvent(docDetails.event);
        setLocay(
          "Rango Rooftop Lounge, 26 Prince Adelowo Adedeji Street, Lekki Phase 1 - 106104 Lagos"
        );
        setTickets(docDetails.tickets);
        setTime("10AM, December 23, 2023");
        setEmail(docDetails.email);
        if (docDetails.status !== "confirmed") {
          setTicketExists(false);
        } else {
          setTicketExists(true);
        }
      }
    }
    setReady(true);
  };

  if (!ready) {
    getTickets();
    return (
      <div className="bg-white/50 flex justify-center items-center w-full h-screen">
        <ReactLoading type="bars" color="purple" height={100} width={50} />
      </div>
    );
  }

  if (ready && !ticketExists) {
    return (
      <div className="antialiased flex flex-col p-4 w-full justify-center items-center h-screen">
        <img
          src={lost}
          className="w-[60%] lg:w-[30%] mx-auto mb-3 lg:mb-0 lg:mx-0 lg:mr-4"
          alt="Record not Found"
        />
        <h2 className="font-bold text-xl text-center tracking-wide mx-auto w-[90%]">
          Whoops. Seems this ticket is invalid <br /> You could try scanning the
          QR again or reach out to{" "}
          <a
            href="mailto:support@otakutv.co"
            className="text-blue-500 underline cursor-pointer hover:text-red-500"
          >
            support
          </a>{" "}
          if you need assistance
        </h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-12 py-2 bg-red-600 rounded-full font-bold text-purple-100 text-lg shadow-md hover:bg-red-500"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="antialiased flex flex-col p-4 lg:flex-row w-full justify-center items-center h-screen bg-purple-500">
      <img
        src={gift}
        className="w-[60%] md:w-[40%] lg:w-[20%] mx-auto mb-3 lg:mb-0 lg:mx-0 lg:mr-4"
        alt="gift image"
      />
      <div className=" flex flex-col lg:flex-row rounded-lg bg-white shadow-md w-full overflow-hidden">
        <div className="p-4 bg-purple-900 w-full lg:w-1/3">
          <div className="text-purple-400 font-bold uppercase tracking-wider text-sm">
            {fullName}
          </div>
          <div className="text-white text-2xl">{event}</div>
          <div className="text-purple-400 mt-12 text-base font-bold">
            {locay.split(",").map((loc, index) => (
              <p className="pb-1" key={index}>
                {loc}
              </p>
            ))}
          </div>
        </div>
        <div className="p-4 w-full lg:w-2/3">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="text-purple-400 tracking-wider text-sm w-1/2">
              {email}
            </div>
            <div className="pt-1 w-1/2">
              <div className="bg-purple-900 rounded-full h-2 w-[100%]">
                <div className="h-2 bg-purple-900 w-[100%] rounded-full"></div>
              </div>
              <div className="text-xs text-purple-400 pt-2 md:pt-0 uppercase">
                {time}
              </div>
            </div>
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl pb-1.5 text-purple-900">
            {tickets.map((ticket, index) => (
              <p key={index}>{ticket}</p>
            ))}
          </div>
          <div className="flex justify-end pt-12">
            <button
              onClick={() => navigate("/")}
              className="px-12 py-2 bg-purple-900 rounded-full text-purple-100 text-lg shadow-md hover:bg-purple-800"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
