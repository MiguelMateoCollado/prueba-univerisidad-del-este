import { useState } from "react";
import { useCallback } from "react";
import Logo from "../Logo";
import InputSearch from "../InputSearch/InputSearch";
import LinkSidebar from "./SiderbarComponents/LinkSidebar";
import { BiMenu } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Sidebar = ({ setSearch, setCurrentPage }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleClicked = useCallback(() => {
    setSidebarOpen((value) => !value);
  }, [sidebarOpen]);
  return (
    <div className="flex flex-row">
      <nav
        className={`bg-rich-black ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full absolute"
        } duration-300 ease-in-out  h-screen p-4 lg:hidden  phone-sm:max-sm:w-full w-2/4`}
      >
        <div>
          <div className="flex flex-row">
            <Logo />
            <div
              className={`w-full flex flex-row justify-end phone-sm:max-md:p-2`}
            >
              <button
                onClick={handleClicked}
                className="bg-rich-black text-white p-2 rounded-full "
              >
                <AiOutlineCloseCircle size={25} />
              </button>
            </div>
          </div>
       
        </div>
      </nav>
      <div
        className={`w-full phone-sm:w-full ${
          sidebarOpen ? "invisible absolute" : ""
        } flex flex-row justify-end p-5`}
      >
        <button
          onClick={handleClicked}
          className="bg-rich-black text-white lg:hidden p-2  rounded-full "
        >
          <BiMenu size={25} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
