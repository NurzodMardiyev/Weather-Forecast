import { useContext, useEffect, useState } from "react";
import CountriesInfo from "../components/CountriesInfo";
import SevenDaysInfo from "../components/SevenDaysInfo";
import { useCurrentLocation } from "../hooks/CurrentLocation";
import { WeatherContext } from "../features/ContextApi";

export default function MainApp() {
  const { fetchWeather, location } = useCurrentLocation();
  // const [weather, setWeather] = useState<any>(null);

  const { setCurrentLocWeath } = useContext(WeatherContext)!;

  useEffect(() => {
    if (location) {
      fetchWeather().then((data) => setCurrentLocWeath(data));
    }
  }, [location]);
  return (
    <>
      <div className="md:col-span-7">
        <CountriesInfo />
      </div>
      <div className="md:col-span-4">
        <SevenDaysInfo />
      </div>
    </>
  );
}
