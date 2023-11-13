import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Dance from "../components/Competitions/Dance";
import Hero from "../components/Competitions/Hero";
import Footer from "../components/Footer";

const Competitions = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Competitions - Otaku Connect &apos;23</title>
        <meta
          name="description"
          content="Otaku Connect '23 Competitions are live!!! Show your illustration, design, dance skills and more and you could win up to 50,000 Naira"
        />
        <meta
          name="keywords"
          content="anime, otaku connect, otaku connect '23, otakutv, otaku, manga, weeb, fest, otaku fest, competition"
        />
        <meta property="og:title" content="Competitions - Otaku Connect '23" />
        <meta
          property="og:description"
          content="Otaku Connect '23 Competitions are live!!! Show your illustration, design, dance skills and more and you could win up to 50,000 Naira"
        />
        <meta property="og:image" content="/assets/images/og/OCs-og.jpg" />
        <meta property="og:url" content="https://otakutv.co/otakuconnect" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Competitions - Otaku COnnect '23" />
        <meta
          name="twitter:description"
          content="Otaku Connect '23 Competitions are live!!! Show your illustration, design, dance skills and more and you could win up to 50,000 Naira"
        />
        <meta name="twitter:image" content="/assets/images/og/OC-og.jpg" />
      </Helmet>
      <Navbar />
      <Hero />
      <Dance />
      <Footer />
    </div>
  );
};

export default Competitions;
