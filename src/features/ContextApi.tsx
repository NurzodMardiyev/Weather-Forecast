import React, { createContext, useState, ReactNode, useEffect } from "react";

type LocationType = {
  lat: number;
  lon: number;
} | null;

type Wind = {
  speed: number;
  deg: number;
  gust?: number;
};
type weatherType = {
  description: "string";
  icon: string;
};
type tempType = {
  temp: any;
  feels_like: number;
  pressure: number;
};
type Clouds = {
  all: number;
};
type currenLocWeathType = {
  base: string;
  clouds: Clouds;
  cod: number;
  name: string;
  weather: weatherType[];
  main: tempType;
  wind: Wind;
};
type WeatherContextType = {
  location: LocationType;
  setLocation?: React.Dispatch<React.SetStateAction<LocationType>>;
  currentLocWeath: currenLocWeathType | null;
  setCurrentLocWeath: React.Dispatch<
    React.SetStateAction<currenLocWeathType | null>
  >;
  error: string | null;
  setError?: React.Dispatch<React.SetStateAction<string | null>>;
};

export const WeatherContext = createContext<WeatherContextType>({
  location: null,
  currentLocWeath: null,
  setCurrentLocWeath: () => {},
  error: null,
});

type Props = {
  children: ReactNode;
};

export const ContextApiWeather: React.FC<Props> = ({ children }) => {
  const [currentLocWeath, setCurrentLocWeath] =
    useState<currenLocWeathType | null>(null);
  const [location, setLocation] = useState<LocationType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  // console.log(location);

  return (
    <WeatherContext.Provider
      value={{ location, currentLocWeath, setCurrentLocWeath, error }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
