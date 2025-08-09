import Container from "../components/Container";
import umbrella from "../../public/images/umbrella.png";
import { Link } from "react-router-dom";

export default function HeroPage() {
  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center">
      <Container className="flex justify-between items-center border h-screen rounded-2xl bg-[#0B131E]">
        <div className="w-1/2 min-h-[80%] border flex justify-center items-center rounded-2xl bg-[#202B3B]">
          <img src={umbrella} alt="Umbrella" className="inline-block w-full" />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="flex flex-col justify-center items-center ">
            <img src={umbrella} alt="Umbrella" className="w-[100px]" />
            <h1 className="text-[34px] font-bold text-white my-6">
              Forecast Weather App
            </h1>
            <Link
              to="/app"
              className="px-10 py-3 rounded-xl bg-[#0095FF] text-white"
            >
              Get Start
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
