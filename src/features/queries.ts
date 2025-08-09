// useWeekForecast.ts
import { useContext } from "react";
import axios from "axios";
import { WeatherContext } from "./ContextApi";
import { useQuery } from "react-query";
const api_key = import.meta.env.VITE_API_KEY;

export const useWeekForecast = () => {
  const { location } = useContext(WeatherContext)!;

  return useQuery({
    queryKey: ["weekForecast", location?.lat, location?.lon],
    queryFn: async () => {
      if (!location) return null;
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location?.lon}&units=metric&appid=2c4a0447cf99c25198a2401b1635ceae`
      );
      return data;
    },
    enabled: !!location && !! api_key, // location mavjud bo'lganda ishlaydi
  });
};

export const searchCity = {
  SearchCityFunc: async (city: string) => {
    try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c4a0447cf99c25198a2401b1635ceae&units=metric`, {
      
        headers: {
          "Content-Type": "application/json",
        },
      });

      return data;
    } catch (error) {
      console.log(error)
    }
  }}

  export const searchCityforWeek = {
  SearchCityforWeekFunc: async (city: string) => {
    try {
      const { data: forLat } = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=2c4a0447cf99c25198a2401b1635ceae`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { lat, lon } = forLat[0];

        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=2c4a0447cf99c25198a2401b1635ceae`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return data;
    } catch (error) {
      console.log(error)
    }
  }}
