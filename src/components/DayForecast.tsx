type Weather = {
  main: string;
  icon: string;
};
type Main = {
  temp_max: number;
  temp_min: number;
};
type Day = {
  dt_txt: string;
  weather: Weather[];
  main: Main;
  dt: number;
};

type Props = {
  dailyData: Day[];
};
export default function DayForecast({ dailyData }: Props) {
  return (
    <div>
      {dailyData.map((day: Day, i: number) => {
        const date = new Date(day.dt_txt);
        const dayName = date.toLocaleDateString("en-US", {
          weekday: "long",
        });
        const weatherMain = day.weather[0].main;
        const icon = day.weather[0].icon;
        const tempMax = Math.round(day.main.temp_max);
        const tempMin = Math.round(day.main.temp_min);

        return (
          <div
            key={day.dt}
            className={`${
              i === 4 ? "border-none" : "border-b"
            } flex justify-between py-8  border-[#9399A2]`}
          >
            {/* Kun nomi */}
            <p className="text-[#9399A2]">{dayName}</p>

            {/* Icon + ob-havo nomi */}
            <div className="flex items-center gap-2">
              <img
                src={`https://openweathermap.org/img/wn/${icon}.png`}
                alt={weatherMain}
                className="w-8 h-8"
              />
              <p className="font-semibold text-white">{weatherMain}</p>
            </div>

            {/* Temp */}
            <p className="text-[#9399A2]">
              <span className="text-white font-semibold">{tempMax}</span>/
              {tempMin}
            </p>
          </div>
        );
      })}
    </div>
  );
}
