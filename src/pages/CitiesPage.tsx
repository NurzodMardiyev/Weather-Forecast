import { useMemo, useState } from "react";
import CitiesWeather from "../components/CitiesWeather";
import DayForecast from "../components/DayForecast";
import SearchForm from "../components/SearchForm";
import TodayForecast from "../components/TodayForecast";
import {
  searchCity,
  useSearchForCity,
  useWeekForecast,
} from "../features/queries";
import CityForecast from "../components/CityForecast";
import { Form } from "antd";
import { useMutation, useQuery } from "react-query";

export default function CitiesPage() {
  const { data, isLoading } = useWeekForecast();

  const dailyData = useMemo(() => {
    if (!data?.list) return [];

    const filtered = data.list.filter((item: { dt_txt: string }) =>
      item.dt_txt.includes("12:00:00")
    );

    return filtered.slice(0, 3);
  }, [data]);

  const { mutate: searchCityMutate } = useMutation(
    (city: string) => searchCity.SearchCityFunc(city),
    {
      onSuccess: (data) => {
        const storedCities = JSON.parse(
          localStorage.getItem("searchedCities") || "[]"
        );
        const updatedCities = [...storedCities, data];
        localStorage.setItem("searchedCities", JSON.stringify(updatedCities));
      },
    }
  );
  const handleTakeCity = (values: { city: string }) => {
    searchCityMutate(values.city);
  };

  if (isLoading) <div>..Loading</div>;
  return (
    <>
      <div className="md:col-span-7">
        <div>
          <Form onFinish={handleTakeCity}>
            <Form.Item name="city">
              <input
                className="w-full px-6 py-2 rounded-md text-white bg-[#202B3B] focus-within:border-none focus:border-none focus:outline-0 placeholder:text-[#7d7d7d]"
                placeholder="Search for sity"
              />
            </Form.Item>
          </Form>
        </div>
        <CityForecast />
      </div>
      <div className="md:col-span-4 ">
        <div>
          <CitiesWeather />
        </div>

        <div className="rounded-2xl bg-[#202B3B] p-[30px] mb-4">
          <h3 className="uppercase text-[14px] text-[#9399A2] font-semibold mb-1">
            Today's forecast
          </h3>
          <DayForecast dailyData={dailyData} />
        </div>
      </div>
    </>
  );
}
