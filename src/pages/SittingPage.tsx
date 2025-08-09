import { Segmented } from "antd";
import "../App.css";
export default function SittingPage() {
  return (
    <>
      <div className="md:col-span-7">
        <Segmented options={["Dark", "Light"]} block className="bg-gray-800" />
      </div>
      <div className="md:col-span-4"></div>
    </>
  );
}
