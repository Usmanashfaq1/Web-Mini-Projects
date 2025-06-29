import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const MainLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen dark:bg-gray-900 dark:text-white ">
      <Header />
      <main className="flex">
        <SideBar />
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
export default MainLayout;
