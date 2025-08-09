import { useWeekForecast } from "../features/queries";

export type ForecastItem = {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
};

export default function TodayForecast() {
  const { data, isLoading } = useWeekForecast();

  if (isLoading) return <div>..Loading</div>;
  return (
    <>
      {data?.list.slice(0, 6).map((item: ForecastItem, i: number) => (
        <div
          key={i}
          className={`px-[20px] my-3 flex flex-col items-center col-span-1 ${
            i == 5 ? "border-none" : "border-r"
          } border-[#7b7b7b] gap-1`}
        >
          <p className="uppercase text-[14px] text-[#9399A2] font-bold">
            {new Date(item.dt_txt).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </p>

          <img
            className="w-16 h-16"
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt={item.weather[0].description}
          />

          <p className="text-[26px] font-bold text-white">
            {Math.round(item.main.temp)}°C
          </p>
        </div>
      ))}
    </>
  );
}
