import Game from "/assets/images/game.svg";
// import VR from "/assets/images/vr.svg";
import Friends from "/assets/images/friends.svg";
import Cosplay from "/assets/images/cosplay.svg";

const Expectations = () => {
  return (
    <div className="w-full bg-white pt-6 md:pt-12 lg:pt-0 lg:bg-expect-lg lg:h-[90vh] bg-cover">
      <h2 className="w-[80%] mx-auto text-4xl font-black text-center lg:hidden">
        What to Expect
      </h2>
      <div className="p-4 w-full text-xs md:text-md lg:hidden mx-auto my-4 grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className=" max-h-[500px] shadow-lg rounded-lg p-6 shadow-black/10 group relative">
          <div className="relative w-full md:h-[250px]">
            <img
              src={Friends}
              alt="Friends"
              className="w-full h-[80px] md:h-full"
            />
          </div>
          <h2 className="text-lg text-center font-bold py-2 md:hidden">
            Meetups and Interations
          </h2>
          <h2 className="text-lg text-center font-bold py-2 hidden md:block lg:hidden">
            Meetups/Interations
          </h2>
          <p className="">
            Make friends, learn and maybe even find love!! Argue about your
            favorite Anime, characters, movies and more
          </p>
        </div>

        <div className=" max-h-[500px] shadow-lg rounded-lg p-6 shadow-black/10 relative">
          <div className="relative w-full md:h-[250px]">
            <img
              src={Game}
              alt="First Image"
              className="w-full h-[80px] md:h-full"
            />
          </div>
          <h2 className="text-xl text-center font-bold py-2">Games</h2>
          <p className="">
            Play Console and Virtual Reality games from top Anime/Manga. Also
            compete with your peers or obliterate your enemies in outdoor games
          </p>
        </div>

        <div className="max-h-[500px] shadow-lg rounded-lg p-6 shadow-black/10 group relative">
          <div className="relative w-full md:h-[250px]">
            <img
              src={Cosplay}
              alt="First Image"
              className="w-full h-[80px] md:h-full"
            />
          </div>
          <h2 className="text-xl text-center font-bold py-2">Cosplays</h2>
          <p className="">
            Come as your favorite characters and meetup with people dressed up
            as theirs. How well do you know your character? Compete and stand a
            chance to win N50,000!
          </p>
        </div>
      </div>
      {/* Large Screens */}
      <div className="hidden lg:block pt-10">
        <div className="w-full h-[40vh]">
          <h2 className="w-[30%] mx-auto text-4xl font-black text-center">
            What to Expect
          </h2>
          <h3 className="w-[30%] mx-auto text-center font-black text-2xl mt-4">
            Meetups/Interations
          </h3>
          <p className="w-[30%] mx-auto text-center text-lg mt-2">
            Make friends, learn and maybe even find love!! Argue about your
            favorite Anime, characters, movies and more
          </p>
          {/* <p className="w-[50%] mx-auto text-center text-lg">
            Meet fellow fans, connect with talented creators, and dive deep into
            the heart of anime culture. With exciting contests, exclusive
            screenings, and special guest appearances, there&apos;s something for
            everyone to enjoy. Join us for a day of pure anime magic and create
            lasting memories with like-minded enthusiasts. Don&apos;t miss out on
            this epic celebration of all things anime!
          </p> */}
        </div>
        <div className="w-full h-[30vh] my-auto px-16 flex justify-between">
          <div className="w-[30%] text-lg">
            <h3 className="font-black w-full text-2xl">Games</h3>
            <p className="w-full">
              Play Console and Virtual Reality games from top Anime/Manga. Also
              compete with your peers or obliterate your enemies in outdoor
              games
            </p>
          </div>
          <div className="w-[30%] text-lg text-right">
            <p className="w-full">
              <h3 className="font-black text-2xl">Cosplays</h3>
              Come as your favorite characters and meetup with people dressed up
              as theirs. How well do you know your character? Compete and stand
              a chance to win N50,000!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expectations;
