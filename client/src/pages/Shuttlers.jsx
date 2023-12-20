import Navbar from "../components/Navbar";
import { useEffect, useState, useCallback, useMemo } from "react";
import { db } from "../config/firebase";
import { setDoc, doc, collection, addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
// Paystack
import { usePaystackPayment } from "react-paystack";
import PaystackConfig from "../config/paystack";

const lagosShuttlersRef = collection(db, "lagos-shuttlers");

const Shuttlers = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");
  const [cost, setCost] = useState(0);
  const [pickup, setPickup] = useState("");
  const [numTickets, setNumTickets] = useState(0);

  // Loading
  const [loading, setLoading] = useState(false);

  // Errors
  const [fnameEror, setFnameError] = useState(false);
  const [lnameEror, setLnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [repeatEmailError, setRepeatEmailError] = useState(false);
  const [ticketError, setTicketError] = useState(false);

  const fees = useMemo(
    () => ({
      Ajah: 3700,
      "Ojota/Yaba": 4000,
      Ogba: 4000,
      "Abule-ebga/Iyana Ipaja": 4400,
      Festac: 4400,
      UNILAG: 4000,
      "Ikorodu Garage": 4400,
      "Ikeja/Maryland": 4000,
      Surulere: 3700,
    }),
    []
  );

  const handleOptionChange = (event) => {
    const newOption = event.target.value;
    setPickup(newOption);
    updateTotalCost(newOption, numTickets);
  };

  const handleNumTicketsChange = (event) => {
    const newNumTickets = parseInt(event.target.value, 10);
    setNumTickets(newNumTickets);
    updateTotalCost(pickup, newNumTickets);
  };

  const updateTotalCost = useCallback(
    (selectedOption, numTickets) => {
      const newTotalCost = fees[selectedOption] * numTickets;
      setCost(newTotalCost);
    },
    [fees]
  );

  useEffect(() => {
    updateTotalCost(pickup, numTickets);
  }, [numTickets, pickup, updateTotalCost]);

  const validateInput = (input) => {
    if (input.trim().length === 0) {
      console.error(`Empty Field - ${input}`);
      return false;
    } else {
      return true;
    }
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const checkEmails = (email, repeatEmail) => {
    if (email.trim() === repeatEmail.trim()) {
      return true;
    } else {
      return false;
    }
  };

  const ref = `SH-${new Date().getTime().toString()}`;
  const config = PaystackConfig(email, cost, ref);
  const initializePayment = usePaystackPayment(config);

  const navigate = useNavigate();

  const onSuccess = () => {
    //implementation for after success call
    onSubmitOrder();
    navigate("/otakuconnect/order-completed");
    console.log("success");
  };

  const onClose = () => {
    // navigate("/otakuconnect/order-failed");
    //Implementation for when dialog closes
    console.log("closed");
  };

  const handlePurchase = () => {
    if (validateInput(firstName)) {
      setFnameError(false);
      if (validateInput(lastName)) {
        setLnameError(false);
        if (validateEmail(email) && validateInput(email)) {
          setEmailError(false);
          if (checkEmails(email, repeatEmail)) {
            setRepeatEmailError(false);
            if (cost <= 0) {
              setTicketError(true);
            } else {
              setTicketError(false);
              initializePayment(onSuccess, onClose);
            }
          } else {
            setRepeatEmailError(true);
          }
        } else {
          setEmailError(true);
        }
      } else {
        setLnameError(true);
      }
    } else {
      setFnameError(true);
    }
  };

  const onSubmitOrder = async (retryCount = 3) => {
    try {
      setLoading(true);
      const docData = {
        id: ref,
        first_name: firstName,
        last_name: lastName,
        email: email.trim(),
        pickup: pickup,
        cost: cost,
        status: "confirmed",
        quantity: numTickets,
        date: serverTimestamp(),
      };

      console.log("Setting doc");
      await addDoc(lagosShuttlersRef,docData)
      console.log("Done");

      const emailDoc = {
        first_name: firstName, 
        email: email,
        pickup: pickup,
        cost: cost,
        pickupTime: "9:30Am",
        quantity:numTickets
      }
      
      sendEmail(emailDoc)

      setLoading(false);
    } catch (err) {
      console.error("Error submitting order", err.message || err);

      // Retry if the error indicates the document was not found
      if (
        err.message === "Document not found after creation" &&
        retryCount > 0
      ) {
        console.log(
          `Retrying document creation, ${retryCount} attempts remaining...`
        );
        // Call onSubmitOrder again with one less retry count
        await onSubmitOrder(retryCount - 1);
      } else {
        console.log(
          "Please contact support for ticket confirmation if you don't receive your tickets"
        );
      }
    }
  };

  const request = new XMLHttpRequest();

  const sendEmail = async (documentFinal) => {
    try {
      request.open(
        "POST",
        "/.netlify/functions/send-email"
      );
      request.send(
        JSON.stringify({
          ...documentFinal
        })
      );
      console.log("Initiate email sending");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="m-0 antialiased h-full md:h-screen bg-black text-base w-full">
      <Navbar />
      {loading && (
        <div className="fixed w-full h-full bg-black/70 z-30 flex justify-center items-center">
          <ReactLoading type="bubbles" color="red" height={100} width={100} />
        </div>
      )}
      <div className="container flex flex-col justify-center items-center md:mt-20 p-4">
        <div>
          <h1 className="font-black text-white text-2xl text-center">Otaku Connect 2023 Transport</h1>
          <p className="font-bold italic text-white mt-3 mb-6 text-center">Buses take off at 9:30AM</p>
        </div>
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap justify-center items-center -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-black border rounded-full py-3 mb-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Jane"
              />
              {fnameEror && (
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-black border mb-3 border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
              />
              {lnameEror && (
                <p className="text-red-500 text-xs italic mt-3">
                  Please fill out this field as well.
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourmail@mail.com"
              />
              {emailError && (
                <p className="text-red-500 text-xs italic">
                  Invalid email address
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                onChange={(e) => setRepeatEmail(e.target.value)}
                placeholder="repeatyourmail@mail.com"
              />
              {repeatEmailError && (
                <p className="text-red-500 text-xs italic">
                  Email addresses don&apos;t match
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Pickup Location
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  value={pickup}
                  onChange={handleOptionChange}
                >
                  <option></option>
                  {Object.keys(fees).map((tier) => (
                    <option key={tier} value={tier}>
                      {tier}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Number of Bus Tickets
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="number"
                min={1}
                onChange={handleNumTicketsChange}
                placeholder=""
              />
            </div>

            <div className="w-full md:my-auto md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
              <p className="text-2xl text-center font-bold text-white">
                {cost > 0 ? cost : 0}
              </p>
            </div>
          </div>

          <div className="w-full px-3 mb-6 mt-7 md:mb-0">
            {ticketError && (
              <p className="text-sm text-orange-500 mb-3">
                You have to buy at least 1 ticket
              </p>
            )}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full">
                <button
                  className="shadow-none bg-green-700 hover:bg-green-400 duration-300 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-10 rounded-full"
                  type="button"
                  onClick={() => handlePurchase()}
                >
                  Get Tickets
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shuttlers;
