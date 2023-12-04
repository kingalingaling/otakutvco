import locationImg from "/assets/images/locations/rango.webp";
import locationImgLg from "/assets/images/locations/rango-lg.webp";
import { useState, useEffect, useCallback } from "react";
import { MdCancel } from "react-icons/md";
import { formatCurrency } from "../utilities/formatCurrency";
import { db } from "../config/firebase";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
// Paystack
import { usePaystackPayment } from "react-paystack";
import PaystackConfig from "../config/paystack";

const lagosOrdersRef = collection(db, "lagos-tickets");

const Lagos = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [cost, setCost] = useState(0);
  const [finalCost, setFinalCost] = useState();
  const [tier, setTier] = useState("");
  const [tickets, setTickets] = useState([]);
  const [order, setOrder] = useState([""]);
  const [selectedTiers, setSelectedTiers] = useState([]);

  // Errors
  const [error, setError] = useState(false);
  const [cartError, setCartError] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [ticketError, setTicketError] = useState(false);
  const [repeatEmailError, setRepeatEmailError] = useState(false);

  const location =
    "Rango Rooftop Lounge, 26 Prince Adelowo Adedeji Street, Lekki Phase 1 - 106104, Lagos";
  const time = "12:00 PM";
  const day = "December 23rd, 2023";

  const calcCost = useCallback(() => {
    const tierCosts = {
      Genin: 3500,
      Hashira: 5000,
      "Special Grade": 10000,
    };
    const totalCost = selectedTiers.reduce((total, tier) => {
      return total + (tierCosts[tier.tier] || 0) * tier.quantity;
    }, 0);
    setCost(totalCost);
    const finCost = Math.round((cost + 100 + 0.015 * cost) / 10) * 10;
    setFinalCost(finCost);
  }, [selectedTiers, cost]);

  useEffect(() => {
    document.title = "Otaku Connect Lagos";

    const total_order = tickets.map((ticket) => {
      return [ticket.tier, ticket.quantity].join(": ");
    });
    setOrder(total_order);
    calcCost();
  }, [tickets, calcCost]);

  const validateInput = (input) => {
    if (input.trim().length === 0) {
      console.error(`Empty Field - ${input}`);
      return true;
    } else {
      return false;
    }
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const checkEmails = (email, repeatEmail) => {
    if (email.trim() == repeatEmail.trim()) {
      return true;
    } else {
      return false;
    }
  };

  const removeFromCart = (id, tier) => {
    setTickets((prevState) => prevState.filter((item) => item.id !== id));
    setSelectedTiers((prevTiers) =>
      prevTiers.filter((type) => type.tier !== tier)
    );

    calcCost(); // Calculate cost after removing from cart
  };

  const handleOptionChange = (option) => {
    setTier(option);
  };

  const navigate = useNavigate();

  const onSuccess = () => {
    //implementation for after success call
    onSubmitOrder();
    setTickets([]);
    console.log("success");
  };

  const onClose = () => {
    // navigate("/otakuconnect/order-failed");
    //Implementation for when dialog closes
    console.log("closed");
  };

  const config = PaystackConfig(email, finalCost);
  const initializePayment = usePaystackPayment(config);

  const handleCheckout = () => {
    if (validateInput(fname) || validateInput(lname) || validateInput(email)) {
      setEmpty(true);
    } else {
      setEmpty(false);
      if (validateEmail(email)) {
        setError(false);
        console.log("email is valid");
        if (checkEmails(email, repeatEmail)) {
          setRepeatEmailError(false);
          if (tickets.length > 0) {
            initializePayment(onSuccess, onClose);
            setTicketError(false);
          } else {
            setTicketError(true);
          }
        } else {
          setRepeatEmailError(true);
        }
      } else {
        setError(true);
      }
    }
  };

  const addToCart = (tier, quantity) => {
    if (tier === "" || quantity <= 0) {
      setCartError(true);
      return;
    }

    setTickets((prevList) => {
      const existingEntry = prevList.find((item) => item.tier === tier);

      if (existingEntry) {
        return prevList.map((item) =>
          item.tier === tier
            ? { ...item, quantity: Number(item.quantity) + Number(quantity) }
            : item
        );
      } else {
        const rand_id = Math.floor(Math.random() * 100);
        return [...prevList, { id: rand_id, tier: tier, quantity: quantity }];
      }
    });

    setSelectedTiers((prevTiers) => [
      ...prevTiers,
      { tier: tier, quantity: quantity },
    ]);
    setCartError(false);
    setTicketError(false);

    calcCost(); // Calculate cost after adding to cart
  };

  const onSubmitOrder = async () => {
    try {
      const newDocRef = await addDoc(lagosOrdersRef, {
        first_name: fname,
        last_name: lname,
        email: email.trim(),
        tickets: order,
        cost: cost,
        status: "confirmed",
        event: "Otaku Connect Lagos",
        date: serverTimestamp(),
      });

      const newDocId = newDocRef.id;
      const docSnap = await getDoc(doc(db, "lagos-tickets", newDocId));
      const documentFb = { id: newDocId, ...docSnap.data() };
      console.log(documentFb);
      await sendEmail(documentFb);
      navigate("/otakuconnect/order-completed");
    } catch (err) {
      console.error(err);
    }
  };

  const request = new XMLHttpRequest();

  const sendEmail = async (documentFinal) => {
    try {
      request.open("POST", "/.netlify/functions/send-email");
      request.send(
        JSON.stringify({
          ...documentFinal,
          day: day,
          time: time,
          locay: location,
        })
      );
      console.log("Initiate email sending");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-tr from-orange-400 via-red-300 to-blue-500 min-h-screen flex items-center justify-center py-16 md:p-15">
        <div className="bg-black/95 rounded-lg shadow-2xl w-full lg:w-2/3 text-white md:flex md:flex-col">
          <img
            src={locationImg}
            className="rounded-t-lg h-[300px] object-cover md:hidden"
          />
          <img
            src={locationImgLg}
            className="rounded-t-lg h-[300px] object-cover hidden md:block"
            alt={`Otaku Connect '23 - ${location}`}
          />
          <div className="p-6 min-h-full flex flex-col">
            <h1 className="flex-none font-bold text-2xl md:text-xl text-white mb-2">
              Experience Otaku Connect &apos;23 Lagos
            </h1>
            <p className="flex-none text-white mb-2">
              Get ready to dive into a world of creativity, inspiration, and
              shared enthusiasm. Secure your spot for Otaku Connect &apos;23 and
              be part of the ultimate otaku experience!
            </p>
            <div className="flex flex-col justify-between md:flex-row">
              <div className="w-full md:w-[50%] md:h-[80%] flex flex-col md:justify-between">
                <div>
                  <label htmlFor="fname" className="font-bold text-xs">
                    First Name
                  </label>
                  <input
                    className="border text-black outline-orange-400 rounded-lg border-gray-500 py-1 px-2 w-full"
                    type="text"
                    name="fname"
                    id=""
                    onChange={(e) => setFname(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lname" className="font-bold text-xs">
                    Last Name
                  </label>
                  <input
                    className="border text-black outline-orange-400 rounded-lg border-gray-500 py-1 px-2 w-full"
                    type="text"
                    name="lname"
                    id=""
                    onChange={(e) => setLname(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-bold text-xs">
                    Recipient Email (PLEASE DOUBLECHECK)
                    {error && (
                      <span className="ml-5 text-red-500 text-xs">
                        !!!Email is invalid
                      </span>
                    )}
                  </label>
                  <input
                    className="border text-black outline-orange-400 rounded-lg border-gray-500 py-1 px-2 w-full"
                    type="text"
                    name="email"
                    id=""
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="repeatEmail" className="font-bold text-xs">
                    <span className="text-orange-400">
                      Repeat Recipient Email
                    </span>
                    {repeatEmailError && (
                      <span className="ml-5 text-red-500 text-xs">
                        Emails don&apos;t match. Check this with your sharingan
                      </span>
                    )}
                  </label>
                  <input
                    className="border text-black outline-orange-400 rounded-lg border-gray-500 py-1 px-2 w-full"
                    type="text"
                    name="repeatEmail"
                    id=""
                    onChange={(e) => setRepeatEmail(e.target.value)}
                    required
                  />
                </div>
                {empty && (
                  <p className="mt-2 text-sm text-red-600">
                    All fields are required. Please ensure you have filled in
                    the correct information to avoid errors
                  </p>
                )}
              </div>
              <div className="p-4">
                <div className="flex flex-wrap justify-center">
                  <label
                    className={
                      tier == "Genin"
                        ? "bg-orange-600 scale-110 text-white font-bold py-2 px-4 rounded-full cursor-pointer mr-2 my-2"
                        : "bg-transparent border hover:scale-110 border-white hover:border-orange-600 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer mr-2 my-2 duration-300"
                    }
                  >
                    <input
                      type="radio"
                      name="options"
                      className="hidden"
                      autoComplete="off"
                      onClick={() => handleOptionChange("Genin")}
                    />
                    Genin
                  </label>
                  <label
                    className={
                      tier == "Hashira"
                        ? "bg-red-600 scale-110 text-white font-bold py-2 px-4 rounded-full cursor-pointer m-2"
                        : "bg-transparent border hover:scale-110 border-white hover:border-red-600 duration-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer m-2"
                    }
                  >
                    <input
                      type="radio"
                      name="options"
                      className="hidden"
                      autoComplete="off"
                      onClick={() => handleOptionChange("Hashira")}
                    />
                    Hashira
                  </label>
                  <label
                    className={
                      tier == "Special Grade"
                        ? "bg-blue-600 scale-110 text-white font-bold py-2 px-4 rounded-full cursor-pointer my-2 ml-2"
                        : "bg-transparent border hover:scale-110 border-white hover:border-blue-600 duration-300 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer my-2 ml-2"
                    }
                  >
                    <input
                      type="radio"
                      name="options"
                      className="hidden"
                      autoComplete="off"
                      onClick={() => handleOptionChange("Special Grade")}
                    />
                    Special Grade
                  </label>
                </div>
                {/* Ticket Details */}
                {tier == "Genin" && (
                  <div className="border duration-300 rounded-md border-black/50 py-5 px-10">
                    <h4 className="font-black">{formatCurrency(3500)}</h4>
                    <p className="font-bold">Ticket provides:</p>
                    <ul className="list-disc">
                      <li>Access to the event</li>
                    </ul>
                  </div>
                )}
                {tier == "Hashira" && (
                  <div className="border duration-300 rounded-md border-black/50 py-5 px-10">
                    <h4 className="font-black">{formatCurrency(5000)}</h4>
                    <p className="font-bold">Ticket provides:</p>
                    <ul className="list-disc">
                      <li>Access to the event</li>
                      <li>Free Cocktail</li>
                      <li>Vouchers/Coupons</li>
                    </ul>
                  </div>
                )}
                {tier == "Special Grade" && (
                  <div className="border duration-300 rounded-md border-black/50 py-5 px-10">
                    <h4 className="font-black">{formatCurrency(10000)}</h4>
                    <p className="font-bold">Ticket provides:</p>
                    <ul className="list-disc">
                      <li>Everything entailed in Hashira</li>
                      <li>Access to Movie Showing</li>
                      <li>Otaku Mystery Gift Bag</li>
                    </ul>
                  </div>
                )}
                {/* Ticket Details End */}
                {/* Ticket Number */}
                <div className="mt-2 flex flex-col justify-between md:flex-row">
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="ticketNum"
                      className="font-bold text-sm block mb-1"
                    >
                      Number of Tickets
                    </label>
                    <input
                      className="border text-black outline-orange-400 rounded-lg border-gray-500 h-10 py-1 px-2 w-full"
                      type="number"
                      name="ticketNum"
                      id=""
                      min={1}
                      onChange={(e) => setQuantity(e.target.value)}
                      required
                    />
                  </div>
                  <p className="font-black text-lg">{formatCurrency(cost)}</p>
                </div>
                {cartError && (
                  <p className="text-red-600 pt-2 font-bold text-sm">
                    Please Select a Ticket Tier and quantity of tickets
                  </p>
                )}
              </div>
            </div>

            {/* Tickets */}
            {tickets && (
              <div className="h-10 mt-5 text-sm flex items-center w-full md:px-16">
                {tickets.map((ticket) => (
                  <p
                    key={ticket.id}
                    className="bg-black/70 text-white px-4 py-1 mx-1 flex rounded-lg w-fit"
                  >
                    {ticket.tier}: {ticket.quantity}{" "}
                    <MdCancel
                      className="mt-0.5 ml-2 cursor-pointer"
                      onClick={() => {
                        removeFromCart(ticket.id, ticket.tier);
                      }}
                    />
                  </p>
                ))}
              </div>
            )}
            {/* Tickets End */}
            {ticketError && (
              <p className="text-red-500 font-bold mt-2">
                Please Select a Ticket Tier and add it to cart
              </p>
            )}

            {/* CTA Buttons */}
            <div className="mt-5 mx-auto w-full md:w-[70%] h-full flex justify-between items-center">
              <button
                onClick={() => addToCart(tier, Number(quantity))}
                className="w-fit text-white	shadow-md rounded-md py-2 px-4 bg-red-600 hover:bg-red-500/90 font-bold transition duration-200"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleCheckout()}
                className="w-fit text-white	shadow-md rounded-md py-2 px-4 bg-green-600 hover:bg-green-500/90 font-bold transition duration-200"
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lagos;
