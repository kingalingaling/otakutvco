// import Timer from "../Timer";
import OC_Logo from "/assets/images/otaku-connect-logo.png";

const Summary = () => {
  return (
    <div className="bg-black/90 text-white w-full hidden lg:block">
      <div className="flex justify-between items-center lg:max-w-[80%] lg:max-h-[250px] mx-auto">
        <p className="w-[30%]">
          Hosted by OtakuTv, Otaku Connect is an annual celebration of Japanese
          Pop-culture, focusing on Anime and Manga. This event provides a
          valuable platform for enthusiasts to gather, learn, network,
          socialize, and most importantly, enjoy themselves.{" "}
        </p>
        {/* <div>
          <Timer />
          <p className="text-center mt-3 font-bold text-xl">To Otaku Connect 2023 Abuja</p>
        </div> */}
        <img src={OC_Logo} alt="" className="w-[30%] pt-14" />
        <p className="w-[30%]">
          Organized in Nigeria, Otaku Connect has successfully attracted over
          3500 enthusiastic Otaku and Weebs from Nigeria and abroad. This
          dynamic gathering guarantees attendees an immersive experience,
          providing them with a unique opportunity to explore the rich world of
          Anime and Manga.
        </p>
      </div>
    </div>
  );
};

export default Summary;
