import { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import Navbar from "../components/Navbar";
import ReactLoading from "react-loading";

const ContactForm = () => {
  useEffect(() => {
    document.title = "Contact Us";
  });

  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  // Errors
  const [emptyError, setEmptyError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  //
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setSenderEmail("");
    setSenderName("");
    setMessage("");
    setSubject("");
  };

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

  const submitEmail = (e) => {
    e.preventDefault();
    if (
      validateInput(senderName) ||
      validateInput(senderEmail) ||
      validateInput(message)
    ) {
      setEmptyError(true);
    } else {
      setEmptyError(false);
      if (validateEmail(senderEmail)) {
        setEmailError(false);
        setLoading(true);
        fetch("/.netlify/functions/contact-us", {
          method: "POST",
          body: JSON.stringify({
            senderName: senderName,
            senderEmail: senderEmail,
            subject: subject,
            message: message,
          }),
        }).then((response) => {
          if (response.ok) {
            setLoading(false);
            window.alert("Message Sent.");
            resetForm();
          } else {
            setLoading(false);
            alert("Message failed to send. Check your internet connection");
          }
        });
      } else {
        setEmailError(true);
      }
    }
  };

  return (
    <div className="antialiased h-screen">
      <Navbar />
      <div className="flex w-full min-h-screen bg-black/90 md:bg-black/80 justify-center items-center relative">
        {loading && (
          <div className="absolute w-full h-full bg-black/70 z-30 flex justify-center items-center">
            <ReactLoading type="bubbles" color="red" height={100} width={100} />
          </div>
        )}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-black/0 md:bg-black/70 w-full max-w-4xl p-5 sm:p-8 rounded-lg shadow-lg text-white overflow-hidden">
          <div className="flex flex-col md:flex-1 space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
              <p className="pt-2 text-white text-sm md:text-md lg:text-base">
                We&apos;d love to hear from you! Whether you have a question,
                suggestion, or just want to say hello, we&apos;re here to help.
                Feel free to reach out using the contact information below or by
                filling out the form. We&apos;ll get back to you as soon as
                possible.
              </p>
            </div>
            <div className="flex flex-col space-y-4 sm:space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <a href="https://wa.me/+2349025845139">
                  <BsWhatsapp
                    name="call"
                    className="text-green-300 text-xl"
                  ></BsWhatsapp>
                </a>
                <a href="https://wa.me/+2349025845139" className="hover:text-green-200">
                  <span>+234 (0) 902 584 5139</span>
                </a>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <a href="mailto:support@otakutv.co">
                  <MdOutlineMail
                    name="mail"
                    className="text-red-400 mt-0.5 text-xl"
                  ></MdOutlineMail>
                </a>
                <a href="mailto:support@otakutv.co" className="hover:text-red-200">
                  <span>support@otakutv.co</span>
                </a>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="https://facebook.com/otaku.tv.nig">
                <BsFacebook
                  name="logo-facebook"
                  className="hover:text-blue-600"
                ></BsFacebook>
              </a>
              <a href="https://x.com/otakutvng">
                <RiTwitterXFill
                  name="logo-twitter"
                  className="hover:text-blue-400"
                ></RiTwitterXFill>
              </a>
              <a href="https://www.instagram.com/otaku.tv_ng/">
                <BsInstagram
                  name="logo-instagram"
                  className="hover:text-pink-500"
                ></BsInstagram>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute invisible md:visible z-0 w-40 h-40 bg-red-600 rounded-full -right-28 -top-28"></div>
            <div className="absolute invisible md:visible z-0 w-40 h-40 bg-red-600 rounded-full -left-28 -bottom-16"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-full">
              <form className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="" className="text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-black/40"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="" className="text-sm">
                      Your Email
                    </label>
                    {emailError && (
                      <span className="pl-8 duration-300 text-orange-600 text-xs">
                        Please Enter a Valid email
                      </span>
                    )}
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-black/40"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Email Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-black/40"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Your Message
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    rows="4"
                    value={message}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-black/40"
                  ></textarea>
                </div>
                {emptyError && (
                  <p className="text-orange-600 text-xs duration-300">
                    Please fill in all fields
                  </p>
                )}
                <button
                  onClick={submitEmail}
                  className="inline-block self-end bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
