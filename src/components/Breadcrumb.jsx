import { useLocation, Link } from "react-router-dom";

const findBreadcrumbTrail = (items, path, trail = []) => {
  for (const item of items) {
    if (item.path === path) return [...trail, item];
    if (item.children) {
      const found = findBreadcrumbTrail(item.children, path, [...trail, item]);
      if (found.length > 0) return found;
    }
  }
  return [];
};

const Breadcrumb = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="text-sm text-gray-600 mb-4">
      <Link to="/" className="text-blue-500 hover:underline">Trang chủ</Link>
      {/* {trail.map((item, index) => (
        <span key={index}>
          {" / "}
          {index === trail.length - 1 ? (
            <span className="font-semibold">{item.breadcrumb || item.title}</span>
          ) : (
            <Link to={item.path} className="text-blue-500 hover:underline">
              {item.breadcrumb || item.title}
            </Link>
          )}
        </span>
      ))} */}
    </div>
  );
};

export default Breadcrumb;
