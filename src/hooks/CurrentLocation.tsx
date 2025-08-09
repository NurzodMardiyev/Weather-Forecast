import { useContext } from "react";
import axios from "axios";
import { WeatherContext } from "../features/ContextApi";

const api_key = import.meta.env.VITE_API_KEY;

export const useCurrentLocation = () => {
  const { location } = useContext(WeatherContext)!;

  const fetchWeather = async () => {
    if (!location) return null;

    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${api_key}ceae&units=metric`
      );
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return { fetchWeather, location };
};
