import Sidebar from "./Sidebar";

const MobileSidebar = ({ open, onClose }) => {
    return (
      <>
        {open && <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose}></div>}
        <div className={`fixed top-0 left-0 w-72 h-full bg-white z-50 shadow transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
          <Sidebar />
        </div>
      </>
    );
  };
  
  export default MobileSidebar;
  