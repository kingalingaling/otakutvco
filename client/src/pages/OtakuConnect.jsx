import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Expectations from "../components/OtakuConnect/Expectations";
import Hero from "../components/OtakuConnect/Hero";
import OtakuConnect2023 from "../components/OtakuConnect/OtakuConnect2023";
import Partners from "../components/OtakuConnect/Partners";
import Review from "../components/OtakuConnect/Review";
import Summary from "../components/OtakuConnect/Summary";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
// import Competitions from "../components/OtakuConnect/Competitions";
import Dance from "../components/OtakuConnect/Dance";

const OtakuConnect = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <Helmet>
        <title>Otaku Connect &apos;23</title>
        <meta
          name="description"
          content="Otaku Connect returns to Abuja and Lagos Nigeria for the 2023 edition!
          An annual Anime Fest organized by OtakuTv for the weebs of Nigeria
          Cosplay, Ramen, Anime Trivia, Charades, Movies and more!!! 
          "
        />
        <meta
          name="keywords"
          content="anime, otaku connect, otakutv, otaku, manga, weeb, fest, otaku fest, community"
        />
        <meta property="og:title" content="Otaku Connect '23" />
        <meta
          property="og:description"
          content="Otaku Connect returns to Abuja and Lagos Nigeria for the 2023 edition!
          An annual Anime Fest organized by OtakuTv for the weebs of Nigeria
          Cosplay, Ramen, Anime Trivia, Charades, Movies and more!!!"
        />
        <meta property="og:image" content="/assets/images/og/OC-og.jpg" />
        <meta property="og:url" content="https://otakutv.co/otakuconnect" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Otaku Connect '23" />
        <meta
          name="twitter:description"
          content="Otaku Connect returns to Abuja and Lagos Nigeria for the 2023 edition!
          An annual Anime Fest organized by OtakuTv for the weebs of Nigeria
          Cosplay, Ramen, Anime Trivia, Charades, Movies and more!!!"
        />
        <meta name="twitter:image" content="/assets/images/og/OC-og.jpg" />
      </Helmet>
      <Navbar />
      <Hero navigate={navigate} />
      <Summary />
      <Review />
      <OtakuConnect2023 navigate={navigate} />
      <Expectations />
      <Dance bgColor={'bg-red-50'} />
      {/* <Competitions /> */}
      <Partners />
      <Footer />
    </div>
  );
};

export default OtakuConnect;