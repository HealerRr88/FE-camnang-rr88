import MenuItem from "./MenuItem";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance"; // import axiosInstance nếu có

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axiosInstance.get("/api/categories");
        setCategories(res.data);
      } catch (err) {
        console.error("Lỗi load categories", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="md:p-4 bg-[#EFF6FF] overflow-y-auto h-full">
      <div className="md:p-4 p-2 bg-[#2B8DFE] h-full md:rounded-3xl shadow-lg shadow-blue-500/50 text-white">
        <img src="/logo.png" alt="RR88 logo" className="mb-4" />
        <input
          type="text"
          placeholder="Tìm Kiếm Hướng Dẫn"
          className="w-full mb-4 p-2 border rounded-full text-black"
        />
        <ul className="space-y-2 text-sm font-bold">
          {categories.map((item, idx) => (
            <MenuItem key={idx} item={{
              title: item.name,
              path: `/category/${item.id}`,
              breadcrumb: item.name
            }} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
