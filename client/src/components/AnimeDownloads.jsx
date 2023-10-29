import animeDownloadBackground from "/assets/images/animeDownload2.jpg";
import animeDownloadBackground2 from "/assets/images/animeDownload3.jpg";
import { LiaTelegram } from "react-icons/lia";
import { Link } from "react-router-dom";

const AnimeDownloads = () => {
  return (
    <div className="w-full h-[250px] md:h-auto max-h-[350px] md:max-h-[300px] relative group">
      {/* Overlay */}
      <div className="absolute pt-4 bg-black/70 w-full h-full z-30 font-bold text-white/80 flex justify-between items-center">
        <div className="mx-auto px-4 md:w-[85%] h-full flex flex-col md:flex-row justify-center md:justify-between items-center">
          <p className="text-center text-xs md:text-xl md:py-3 md:max-w-[50%] mb-2 md:mb-0 font-medium transition-opacity duration-500 opacity-100 group-hover:opacity-0">
            Get the latest anime episode and movie releases straight to your
            phone and at the tap of a button through our Telegram Anime download
            platform.
          </p>
          <p className="text-center text-xs md:text-xl md:py-3 md:max-w-[50%] mb-10 md:mb-0 font-medium transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute">
            No ad hassles or wrong clicks. A download catalog and clear-cut
            instructions
            Makes anime and chill almost too easy.
          </p>
          <LiaTelegram size={60} className="text-white hidden md:inline-block opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
          <Link to={"https://t.me/otakutvanime/"} target="_blank" rel="noreferrer">
            <button className="px-4 py-2 border w-48 border-white/70 text-white/70 rounded-lg hover:text-white hover:border-white hover:scale-105 duration-300">
              Start Downloading
            </button>
          </Link>
        </div>
      </div>
      <img
        className="w-full h-full md:max-h-[400px] object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
        src={animeDownloadBackground}
      ></img>
      <img
        className="w-full h-full md:max-h-[400px] object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
        src={animeDownloadBackground2}
      ></img>
    </div>
  );
};

export default AnimeDownloads;
