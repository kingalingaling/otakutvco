import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "/assets/logo.png";
import { BiMenu, BiSolidMicrophone, BiSolidParty } from "react-icons/bi";
import { AiOutlineClose, AiTwotoneHome } from "react-icons/ai";
import { FaCalendarDay, FaCloudDownloadAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState();
  const navigate = useNavigate();
  const menuItems = [
    { item: "Home", icon: <AiTwotoneHome size={20} />, link: "/" },
    {
      item: "Otaku Connect",
      icon: <BiSolidParty size={20} />,
      link: "/otakuconnect",
    },
    {
      item: "Otaku Scoop",
      icon: <BiSolidMicrophone size={20} />,
      link: "https://linktr.ee/otakuscoop",
    },
    {
      item: "Anime Downloads",
      icon: <FaCloudDownloadAlt size={20} />,
      link: "https://t.me/otakutvanime/",
    },
    // {
    //   item: "Sosu Onegai",
    //   icon: <BiSolidUserAccount size={20} />,
    //   link: "https://sosu.otakutv.co/",
    // },
    {
      item: "OtakuTv Events",
      icon: <FaCalendarDay size={20} />,
      link: "https://events.otakutv.co",
    },
  ];
  
  return (
    <nav className=" pt-2 w-full sticky top-0 z-50 mx-auto shadow-lg shadow-black/10 bg-white">
      <div className="mx-auto flex justify-between items-center max-w-[90%]">
        <img
          className="py-2 h-[50px] md:h-[70px] w-auto"
          src={Logo}
          alt=""
          onClick={() => navigate("/")}
        />
        <div className="hidden lg:block">
          <ul className="flex justify-between items-center">
            {menuItems.map((i) => (
              <NavLink key={i.link} to={i.link}>
                <div
                  className={`${
                    active == i.item ? "text-red-500" : ""
                  } group flex flex-col mx-8 duration-300 items-center cursor-pointer`}
                  onClick={() => setActive(i.item)}
                >
                  <span className="text-xl" key={i.item}>
                    {i.icon}
                  </span>
                  <p>{i.item}</p>
                  <div
                    className={`${
                      active == i.item ? "bg-red-500" : ""
                    } mt-1 h-0.5 w-16`}
                  ></div>
                  <div
                    className={`${
                      active == i.item ? "group-hover:hidden" : ""
                    } group-hover:bg-red-500 duration-300 h-0.5 w-16`}
                  ></div>
                </div>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="flex justify-center lg:hidden items-center">
          <BiMenu
            size={40}
            onClick={() => setNav(!nav)}
            className="ml-3 pointer-cursor hover:text-red-600"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div
          className="fixed w-full h-screen z-10 top-0 left-0 duration-300"
          onClick={() => setNav(!nav)}
        ></div>
      ) : (
        ""
      )}

      {/* Side drawer Menu */}
      <div
        className={
          nav
            ? "fixed text-white top-0 right-0 w-[250px] md:w-[300px] h-screen backdrop-blur-xl backdrop-filter z-10 duration-300"
            : "hidden"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute text-black left-4 top-4 cursor-pointer"
          onClick={() => {
            setNav(!nav);
          }}
        />
        <h2 className="text-2xl text-black p-3 ml-12 mt-0.5 font-bold">Menu</h2>
        <nav>
          <ul className="flex flex-col p-4">
            {menuItems.map((i) => (
              <span
                className="flex py-4 text-xl justify-between cursor-pointer hover:text-red-500"
                onClick={() => {
                  navigate(i.link);
                }}
                key={i.item}
              >
                {i.icon}
                {i.item}
              </span>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
