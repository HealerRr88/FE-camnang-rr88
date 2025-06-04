import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Breadcrumb from "./components/Breadcrumb";
import ChuongTrinhThienNguyen from "./pages/ChuongTrinhThienNguyen";
import SuKien from "./pages/SuKien";
import { useState } from "react";
import MobileSidebar from "./components/MobileSidebar";
import Home from "./pages/Home";
// import TaiAppIOS from "./pages/TaiAppIOS";
// import TaiAppAndroid from "./pages/TaiAppAndroid";
// import DangKyDienThoai from "./pages/DangKyDienThoai";
// import DangKyMayTinh from "./pages/DangKyMayTinh";

const componentMap = {
  ChuongTrinhThienNguyen,
  SuKien
};

const renderRoutes = (items) =>
  items.flatMap((item) => {
    if (item.children) return renderRoutes(item.children);
    if (item.path && item.component) {
      const PageComponent = componentMap[item.component];
      return <Route key={item.path} path={item.path} element={<PageComponent />} />;
    }
    return [];
  });

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-[#EFF6FF]">
        {/* Nút toggle sidebar chỉ trên mobile */}
        <div className="md:hidden flex justify-between items-center px-4 py-2 bg-[#2B8DFE] text-white">
          <Link to="/" className="text-white font-bold">
            <img src="/logo.png" alt="RR88" className="h-6" />
          </Link>
          <button className="text-white bg-transparent" onClick={() => setMobileMenuOpen(true)}>☰</button>
        </div>

        {/* Sidebar desktop */}
        <div className="hidden md:block md:w-1/5 border-r border-gray-300">
          <Sidebar />
        </div>

        {/* Sidebar mobile trượt ra */}
        <MobileSidebar open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

        {/* Nội dung */}
        <div className="flex-1 overflow-y-auto">
          {/* <Breadcrumb /> */}
          <Routes>
            {/* Route động từ API categories */}
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<ChuongTrinhThienNguyen />} />
            <Route path="/category/:id/video/:videoId" element={<ChuongTrinhThienNguyen />} />
            {/* <Route path="/su-kien/:id" element={<SuKien />} /> */}

            {/* Redirect
            <Route path="/chuong-trinh-thien-nguyen" element={<Navigate to="/chuong-trinh-thien-nguyen/1" replace />} />
            <Route path="/su-kien" element={<Navigate to="/su-kien/1" replace />} /> */}

          </Routes>
        </div>
      </div>
    </Router>
  );
}
