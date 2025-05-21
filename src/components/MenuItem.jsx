import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";

const containsPath = (item, currentPath) => {
  if (item.path === currentPath) return true;
  if (item.children) {
    return item.children.some((child) => containsPath(child, currentPath));
  }
  return false;
};

const MenuItem = ({ item, depth = 0 }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const hasChildren = Array.isArray(item.children);
  const shouldBeOpen = containsPath(item, currentPath);
  const [open, setOpen] = useState(shouldBeOpen);

  useEffect(() => {
    setOpen(shouldBeOpen);
  }, [shouldBeOpen]);

  const isActive = item.path === currentPath;

  return (
    <div className={`ml-${depth * 2} mb-1`}>
      <div
        className="flex items-center px-2 py-1 rounded-full shadow cursor-pointer hover:bg-white hover:text-[#2B8DFE] font-bold"
        onClick={() => hasChildren && setOpen(!open)}
      >
        {hasChildren &&
          (open ? <ChevronDown size={20} /> : <ChevronRight size={20} />)}

        {item.path ? (
          <Link
            to={item.path}
            className={`ml-2 p-2 rounded-full md:text-sm text-xs w-full hover:text-blue-600 ${
              isActive ? "bg-white text-[#2B8DFE] font-bold" : "text-white"
            }`}
          >
            {item.title}
          </Link>
        ) : (
          <span className="ml-2 p-2 md:text-sm text-xs">{item.title}</span>
        )}
      </div>

      {open && hasChildren && (
        <div className="ml-4">
          {item.children.map((child, idx) => (
            <MenuItem key={idx} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
