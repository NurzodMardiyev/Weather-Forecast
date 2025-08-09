export default function CityForecast() {
  // console.log(searchData);

  const storedCities = JSON.parse(
    localStorage.getItem("searchedCities") || "[]"
  );

  console.log(storedCities);

  return (
    <>
      {storedCities?.map(
        (item: {
          name: string;
          weather: { icon: string; description: string }[];
          main: { temp: number };
        }) => (
          <div className="px-6 py-4 text-white mb-3 rounded-xl flex justify-between bg-[#202B3B]">
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt="Weather app"
                loading="lazy"
                className="w-[70px]"
              />
              <div>
                <h2 className="text-[30px] font-semibold">{item.name}</h2>
                <p>{item.weather[0].description}</p>
              </div>
            </div>
            <div>
              <p className="text-[30px]">{Math.round(item.main.temp)} °C</p>
            </div>
          </div>
        )
      )}
    </>
  );
}
