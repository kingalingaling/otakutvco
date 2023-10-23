// import Logo from "/assets/logo.png";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white py-4 pt-4">
      <div className=" max-w-[90%] mx-auto grid grid-cols-4 gap-4 text-xs md:text-sm">
        <h1 className="font-bold col-span-2 text-red-600 text-xl">OtakuTV</h1>
        <h2 className="font-bold">Other Services</h2>
        <h2 className="font-bold">Company</h2>
        <p className="col-span-2">
          Unwind and Immerse Yourself in the Ultimate Otaku Experience - Your
          All-in-One Destination for the Latest Releases, Vibrant Community
          Interaction, Exclusive Content, and a Whole Lot of Otaku Fun!
        </p>
        <div className="flex flex-col">
          <a
            href="https://t.me/otakutvanime"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-400"
          >
            Anime Downloads
          </a>
          <a
            href="https://sosu.otakutv.co"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-400"
          >
            Sosu-Onegai
          </a>
          <a
            href="https://otakutv.co/otakuscoop/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-400"
          >
            Otaku Scoop
          </a>
        </div>
        <div className="flex flex-col">
          <a href="/" className="hover:text-red-400">
            Home
          </a>
          <a href="/about" className="hover:text-red-400">
            About Us
          </a>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <a href="https://www.facebook.com/otaku.tv.nig" className="mx-2 hover:text-blue-600 cursor-pointer">
          <BsFacebook size={25} />
        </a>
        <a
          href="https://x.com/otakutvng"
          className="mx-2 hover:text-blue-400 cursor-pointer"
        >
          <RiTwitterXFill size={25} />
        </a>
        <a href="https://instagram.com/otaku.tv_ng" className="mx-2 cursor-pointer hover:text-pink-500">
          <BsInstagram size={25} />
        </a>
      </div>
      <div className="mx-auto flex justify-center">
        <p className="text-sm ml-2">Copyright &copy; 2023 OtakuTv&trade;</p>
      </div>
    </div>
  );
};

export default Footer;
