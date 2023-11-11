import Cards from "../components/Cards";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Navbar from "../components/Navbar";
import AnimeDownloads from "../components/AnimeDownloads";
import OtakuScoop from "../components/OtakuScoop";
// import BlogPosts from "../components/BlogPosts";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import CountUp from "../components/CountUp";
import GetTickets from "../components/GetTickets";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>OtakuTv - Everything Anime</title>
        <meta
          name="description"
          content="Join our community of over 40,000 anime enthusiasts to connect with fellow weebs and share your favorite moments"
        />
        <meta
          name="keywords"
          content="anime, manga, community, otaku connect, discussion, otakutv, otaku"
        />
        <meta property="og:title" content="OtakuTv - Everything Anime" />
        <meta
          property="og:description"
          content="Join our community of over 40,000 anime enthusiasts to connect with fellow weebs and share your favorite moments"
        />
        <meta property="og:image" content="/assets/images/og/otakutv-og.jpg" />
        <meta property="og:url" content="https://otakutv.co" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OtakuTv - Everything Anime" />
        <meta
          name="twitter:description"
          content="Join our community of over 40,000 anime enthusiasts to connect with fellow weebs and share your favorite moments"
        />
        <meta name="twitter:image" content="/assets/images/og/otakutv-og.jpg" />
      </Helmet>
      <Navbar />
      <Hero />
      <GetTickets />
      <Cards />
      <div className="w-full p-4 lg:max-w-[60%] flex justify-between mx-auto">
        <div className="flex flex-col items-center w-1/3">
          <CountUp targetNumber={5} step={1} interval={50} />
          <p className="font-bold text-xl text-center">Serivces</p>
        </div>
        <div className="flex flex-col items-center w-1/3">
          <div className="flex font-bold text-red-600 text-xl md:text-2xl lg:text-4xl">
            <CountUp targetNumber={35000} step={100} interval={4} />+
          </div>
          <p className="font-bold text-xl text-center">Members</p>
        </div>
        <div className="flex flex-col items-center w-1/3">
          <div className="flex font-bold text-red-600 text-xl md:text-2xl lg:text-4xl">
            <CountUp targetNumber={13000} step={50} interval={4} />+
          </div>
          <p className="font-bold text-xl text-center">Anime</p>
        </div>
      </div>
      <Highlights />
      <OtakuScoop />
      <AnimeDownloads />
      {/* <BlogPosts /> */}
      <Feedback />
      <Footer />
    </div>
  );
};

export default Home;
