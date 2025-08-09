import { useContext } from "react";

import {
  WiBarometer,
  WiCloud,
  WiStrongWind,
  WiThermometer,
} from "react-icons/wi";
import TodayForecast from "./TodayForecast";
import CitiesWeather from "./CitiesWeather";
import { WeatherContext } from "../features/ContextApi";
import { Form } from "antd";
import { searchCity } from "../features/queries";
import { useMutation } from "react-query";

export default function CountriesInfo() {
  const { currentLocWeath, setCurrentLocWeath } = useContext(WeatherContext)!;

  const { mutate: searchCityMutate } = useMutation(
    (city: string) => searchCity.SearchCityFunc(city),
    {
      onSuccess: (data) => {
        console.log(data);
        setCurrentLocWeath(data);
      },
    }
  );
  console.log(currentLocWeath);
  const handleTakeCity = (values: { city: string }) => {
    searchCityMutate(values.city);
  };

  if (!currentLocWeath) return null;
  return (
    <div>
      <Form onFinish={handleTakeCity}>
        <Form.Item name="city">
          <input
            className="w-full px-6 py-2 rounded-md text-white bg-[#202B3B] focus-within:border-none focus:border-none focus:outline-0 placeholder:text-[#7d7d7d]"
            placeholder="Search for sity"
          />
        </Form.Item>
      </Form>
      <div>
        <CitiesWeather />
      </div>
      <div className="rounded-2xl bg-[#202B3B] p-[30px] mb-3">
        <h3 className="uppercase text-[14px] text-[#9399A2] font-semibold mb-1">
          Todays Forecast
        </h3>
        <div className="grid grid-cols-6 ">
          <TodayForecast />
        </div>
      </div>
      <div className="rounded-2xl bg-[#202B3B] p-[30px]">
        <h3 className="uppercase text-[14px] text-[#9399A2] font-semibold mb-1">
          Air conditionals
        </h3>
        <div className="grid grid-cols-6 gap-4 text-white">
          {/* Real Feel */}
          <div className="col-span-3 flex gap-2 items-center">
            <WiThermometer className="text-[30px]" />
            <div>
              <p className="text-[20px]">Real Feel</p>
              <p className="text-[26px] font-bold">
                {Math.round(currentLocWeath?.main.feels_like)}°C
              </p>
            </div>
          </div>

          {/* Wind */}
          <div className="col-span-3 flex gap-2 items-center">
            <WiStrongWind className="text-[30px]" />
            <div>
              <p className="text-[20px]">Wind</p>
              <p className="text-[26px] font-bold">
                {Math.round(currentLocWeath?.wind.speed)} m/s
              </p>
            </div>
          </div>

          {/* Chance of Rain */}
          <div className="col-span-3 flex gap-2 items-center">
            <WiBarometer className="text-[30px]" />
            <div>
              <p className="text-[20px]">Pressure</p>
              <p className="text-[26px] font-bold">
                {Math.round(currentLocWeath.main?.pressure)} hPa
              </p>
            </div>
          </div>

          {/* UV Index */}
          <div className="col-span-3 flex gap-2 items-center">
            <WiCloud className="text-[30px]" />
            <div>
              <p className="text-[20px]">Clouds</p>
              <p className="text-[26px] font-bold">
                {Math.round(currentLocWeath.clouds?.all)} %
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
