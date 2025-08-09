import { useQuery } from "react-query";
import DayForecast from "./DayForecast";
import { useWeekForecast } from "../features/queries";
import { useMemo } from "react";

export default function SevenDaysInfo() {
  const { data, isLoading } = useWeekForecast();

  // 7 kunlikga filtrlash
  const dailyData = useMemo(() => {
    if (!data?.list) return [];

    // faqat dt_txt soat 12:00:00 bo'lganlarini olish
    const filtered = data.list.filter((item: { dt_txt: string }) =>
      item.dt_txt.includes("12:00:00")
    );

    // faqat 7 ta olish
    return filtered.slice(0, 7);
  }, [data]);

  if (isLoading) <div>..Loading</div>;
  return (
    <div>
      <div className="rounded-2xl bg-[#202B3B] p-[30px]">
        <h3 className="uppercase text-[14px] text-[#9399A2] font-semibold mb-1">
          7 Days Info
        </h3>

        <div>
          <DayForecast dailyData={dailyData} />
        </div>
      </div>
    </div>
  );
}
