import OCLogoDark from "/assets/oc-logo-dark.png";

const OtakuConnect2023 = ({ navigate }) => {
  return (
    <div className="w-full bg-red-50 p-5 text-sm md:text-md">
      <div className="md:w-[90%] lg:w-[85%] mx-auto flex flex-col md:flex-row">
        <div className="md:w-[60%] ">
          <h2 className="text-xl md:text-3xl lg:text-4xl">
            Otaku Connect 2023
          </h2>
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
        <img src={OCLogoDark} alt="" className="h-auto md:h-[300px] md:mt-10 w-[40%] mx-auto lg:h-auto lg:-mt-10" />
      </div>
      <div className="md:w-[90%] lg:w-[80%] mx-auto pt-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center w-full">
          Otaku Connect 2023 Locations
        </h2>
        <div className="flex flex-col justify-center md:flex-row md:justify-between gap-10">
          <div className="flex flex-col w-full md:w-[50%]">
            <img src="" alt="" className="w-full" />
            <div className="w-full">
              <h3 className="font-bold text-lg md:text-xl text-center w-full">
                Abuja
              </h3>
              <p className="text-justify">
                The capital of Nigeria, Center of Unity and home to over 3.6
                million people. Abuja is Known for comprising of people from
                different backgrounds. <br />
                We&apos;ll be live at{" "}
                <span className="font-bold">Venue Locaiton</span>, Abuja for
                Otaku Connect &apos;23 on the 30th December 2023 from 10AM.{" "}
                <br />
              </p>
            </div>
            <button
              onClick={() => navigate("/otakuconnect/abuja")}
              className="px-5 py-2 w-[50%] mx-auto mt-3 bg-red-500 text-white font-bold text-lg rounded-lg border border-red-500 hover:bg-white hover:text-red-500 duration-300"
            >
              Get Tickets
            </button>
          </div>
          {/* Lagos */}
          <div className="flex flex-col w-full md:w-[50%]">
            <img src="" alt="" className="w-full" />
            <div className="w-full">
              <h3 className="font-bold text-lg md:text-xl text-center w-full">
                Lagos
              </h3>
              <p className="text-justify">
                With a population of over 23 million people, it&apos;s the
                country&apos;s commercial center and the second most populous
                city in Africa.
                <br />
                We&apos;ll be live at{" "}
                <span className="font-bold">Venue Locaiton</span>, Lagos for
                Otaku Connect &apos;23 on the 30th December 2023 from 10AM.
                <br />
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
      </div>
    </div>
  );
};

export default OtakuConnect2023;
