import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";

export default function Layout() {
  return (
    <div className="bg-gray-800">
      <Container className="bg-gray-900 h-full grid py-[40px] grid-cols-12 space-x-4 rounded-2xl">
        <div className="md:col-span-1 flex justify-center border h-screen">
          <Sidebar />
        </div>
        <div className="md:col-span-11 grid grid-cols-11 gap-4">
          <Outlet />
        </div>
      </Container>
    </div>
  );
}
