import { useContext } from "react";
import { WeatherContext } from "../features/ContextApi";

export default function CitiesWeather() {
  const { currentLocWeath } = useContext(WeatherContext)!;

  // console.log(currentLocWeath);
  return (
    <div className="px-[30px] flex justify-between items-center text-white mb-3">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-[30px] font-bold">{currentLocWeath?.name}</p>
          <span>
            Change of rain:{" "}
            <span className="font-bold">
              {currentLocWeath?.weather[0].description}
            </span>{" "}
          </span>
        </div>
        <div>
          <p className="text-[44px] font-black inline-block relative">
            {Math.ceil(currentLocWeath?.main.temp)}{" "}
            <span className="absolute text-[20px] top-0 right-[-20px] font-semibold ">
              o
            </span>
          </p>
        </div>
      </div>
      <div className="w-[180px]">
        <img
          src={`https://openweathermap.org/img/wn/${currentLocWeath?.weather[0].icon}@2x.png`}
          alt="Weather icon"
          className="w-full"
        />
      </div>
    </div>
  );
}
