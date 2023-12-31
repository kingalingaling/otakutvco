import OCLogoDark from "/assets/oc-logo-dark.png";
import abujaFlyer from "/assets/images/locations/abuja-flyer.jpg";
import lagosFlyer from "/assets/images/locations/lagos-flyer.jpg";
import Timer from "../Timer";

const OtakuConnect2023 = ({ navigate }) => {
  return (
    <div className="w-full bg-red-50 p-5 text-sm md:text-md lg:text-lg">
      <div className="md:w-[90%] lg:w-[85%] mx-auto flex flex-col md:flex-row">
        <div className="md:w-[60%] ">
          <h1 className="text-xl md:text-3xl lg:text-4xl">
            Otaku Connect 2023
          </h1>
          <div className="bg-red-500 my-1.5 h-0.5 w-[200px]"></div>
          <p className="text-justify">
            Building on the success of previous editions, Otaku Connect &apos;23
            promises an even more exhilarating experience for fans of Japanese
            Pop-culture. Prepare to be captivated by an extensive array of
            immersive exhibits, showcasing the latest and greatest in Anime and
            Manga culture. <br />
            <br />
            From exclusive merchandise to rare collectibles, there&apos;s
            something for every avid enthusiast. Experience a new level of
            excitement with an expanded Virtual Reality gaming section, and
            participate in the epic cosplay competition with even more
            incredible prizes, including cash rewards and exclusive merchandise.
            Rub shoulders with internet sensations and influencers who&apos;ve
            left their mark on the anime community. <br />
            <br />
            Don&apos;t miss out on the anime event of the year! Mark your
            calendars for Otaku Connect 2023 and be part of an unforgettable
            celebration of Japanese Pop-culture.
          </p>
        </div>
        <img
          src={OCLogoDark}
          alt=""
          className="h-auto md:h-[300px] md:mt-10 w-[40%] mx-auto lg:h-auto lg:-mt-10"
        />
      </div>
      <div className="w-full mx-auto pt-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 w-full">
          Otaku Connect 2023 Locations
        </h2>
        <div className="flex flex-col justify-center md:justify-between">
          {/* Abuja */}
          <div className="flex flex-col md:flex-row w-full mb-6 lg:mb-12">
            <img src={abujaFlyer} alt="" className="md:w-2/5 md:h-[300px] my-auto lg:h-auto" />
            <div className="w-full md:pl-8 flex flex-col">
              <h3 className="font-bold text-lg md:text-2xl lg:text-3xl text-center w-full mb-2">
                Abuja
              </h3>
              <p className="text-justify w-full lg:text-lg">
                The capital of Nigeria, Center of Unity and home to over 3.6
                million people. Abuja is Known for comprising of people from
                different backgrounds. <br />
                We&apos;ll be live at{" "}
                <span className="font-bold">La Vida Local</span>, Abuja for
                Otaku Connect &apos;23 on the 30th December 2023 from 10AM.
                <br />
              </p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8008015180785!2d7.398131375019553!3d9.081903690981585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e75bb7af6ec87%3A0x9e6d89c9b2aeb8c5!2sLa%20vida%20local!5e0!3m2!1sen!2sng!4v1697667428448!5m2!1sen!2sng" className="w-full my-4 md:my-0 md:p-5 h-auto lg:h-[300px]"></iframe>
              <div className="flex flex-col items-center">
                <Timer eventDate={"2023-12-30T10:00:00"} />
                <p className="text-center mt-3 font-bold text-xl">
                  To Otaku Connect 2023 Abuja
                </p>
              </div>
              <button
                onClick={() => navigate("/otakuconnect/abuja")}
                className="px-5 py-2 w-[50%] mx-auto mt-3 bg-red-500 text-white font-bold text-lg rounded-lg border border-red-500 hover:bg-white hover:text-red-500 duration-300"
              >
                Get Tickets
              </button>
            </div>
          </div>
          {/* Lagos */}
          <div className="flex flex-col md:flex-row-reverse w-full mb-6">
            <img src={lagosFlyer} alt="" className="md:w-2/5 md:h-[300px] my-auto lg:h-auto" />
            <div className="w-full md:pr-8 flex flex-col">
              <h3 className="font-bold text-lg md:text-2xl lg:text-3xl text-center w-full mb-2">
                Lagos
              </h3>
              <p className="text-justify w-full">
                With a population of over 23 million people, it&apos;s the
                country&apos;s commercial center and the second most populous
                city in Africa.
                <br />
                We&apos;ll be live at{" "}
                <span className="font-bold">Rango Hotel</span>, Lagos for Otaku
                Connect &apos;23 on the 23rd December 2023 from 10AM.
                <br />
              </p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6215168561644!2d3.4549869749921984!3d6.442621493548669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf587f99db33d%3A0xeeeadacbd4cc9ee9!2sRango%20Rooftop%20Lounge!5e0!3m2!1sen!2sng!4v1697666158803!5m2!1sen!2sng" className="w-full my-4 md:my-0 md:p-5 h-auto lg:h-[300px]"></iframe>
              <div className="flex flex-col items-center">
                <Timer eventDate={"2023-12-23T10:00:00"} />
                <p className="text-center mt-3 font-bold text-xl">
                  To Otaku Connect 2023 Lagos
                </p>
              </div>
              <button
              onClick={() => navigate("/otakuconnect/lagos")}
                className="px-5 py-2 w-[50%] mx-auto mt-3 bg-red-500 text-white font-bold text-lg rounded-lg border border-red-500 hover:bg-white hover:text-red-500 duration-300"
              >
                Get Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtakuConnect2023;
