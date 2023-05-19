import { Link } from "react-router-dom";

const LinkSidebar = ({ children }) => {
  return <Link className="w-full border-b-2 p-4 hover:bg-crayola-blue/20 text-lg hover:border-b-4 ease-in-out duration-100 tracking-wider text-white border-b-crayola-blue/25">{children}</Link>;
};

export default LinkSidebar;
