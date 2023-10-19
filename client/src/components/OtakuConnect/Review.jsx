const Review = () => {
  return (
    <div className="w-full p-5 flex flex-col-reverse lg:flex-row">
        <iframe
        className="h-[250px] md:h-[350px] mt-3 md:mt-0 lg:h-[300px] w-full lg:w-[40%]"
        src="https://www.youtube.com/embed/p9rpS8iFv2Y"
        title="YouTube Video Player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <p className="pt-2 text-sm md:text-md lg:text-lg md:pt-0 md:px-12 lg:w-[60%] mx-auto my-auto text-justify">
        Over the past three years, Otaku Connect has been held in key Nigerian
        cities including Abuja, Lagos, and Port Harcourt. Attendees were treated
        to an abundance of food, beverages, and an impressive array of cosplays.
        A wide selection of games, ranging from console and Virtual Reality to
        outdoor activities like Anime Charades and a spirited Ramen Eating
        competition, provided entertainment. The event also featured a
        captivating live band performance. Exciting competitions, including
        lotto and cosplay contests, awarded winners with both merchandise and
        cash prizes. Notable internet personalities such as Rodney, Israel the
        Creator, Layzee Loli, and a host of other influencers graced the event
        with their presence.
      </p>
    </div>
  );
};

export default Review;
