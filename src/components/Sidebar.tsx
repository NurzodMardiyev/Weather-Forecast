import { Link, useLocation } from "react-router-dom";
import umbrella from "../../public/images/umbrella.png";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { RiMenuSearchFill } from "react-icons/ri";
import { FaMap } from "react-icons/fa6";

export default function Sidebar() {
  const location = useLocation();

  // console.log(location.pathname);
  return (
    <div className="bg-[#202B3B] rounded-xl flex flex-col h-full py-[20px] px-[10px]">
      <Link to="/">
        <img src={umbrella} alt="Umbrella" className="w-[70px]" />
      </Link>
      <div className="mt-[30px] text-white">
        <Link
          to="/app"
          className={`flex flex-col items-center  mb-6 ${
            location.pathname === "/app" ? "font-semibold" : ""
          }`}
        >
          <TiWeatherPartlySunny className="text-[30px] mb-1" />
          Weather
        </Link>
        <Link
          to="cities"
          className={`flex flex-col items-center  mb-6 ${
            location.pathname === "/cities" ? "font-semibold" : ""
          }`}
        >
          <RiMenuSearchFill className="text-[30px] mb-1" />
          Cities
        </Link>
        <Link
          to="sitting"
          className={`flex flex-col items-center  mb-6 ${
            location.pathname === "/sitting" ? "font-semibold" : ""
          }`}
        >
          <FaMap className="text-[30px] mb-1" />
          Map
        </Link>
      </div>
    </div>
  );
}
