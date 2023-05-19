import Logo from "../Logo";
import InputSearch from "../InputSearch/InputSearch";
const Navbar = ({ setSearch,setCurrentPage }) => {
  return (
    <nav className="container mx-auto p-4 justify-between  z-50  top-0 flex flex-row gap-3 ">
      <div className="flex flex-row gap-3">
        <Logo />
      </div>
      {/*componente de la busqueda */}
      <InputSearch setSearch={setSearch} setCurrentPage={setCurrentPage}></InputSearch>
          {/*componente de la busqueda */}
    </nav>
  );
};

export default Navbar;
