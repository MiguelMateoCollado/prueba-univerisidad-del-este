import { HiSearch } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { SearchContext } from "../../routes/mainPage";
const InputSearch = ({ setSearch, setCurrentPage }) => {
  const search = useContext(SearchContext);
  //se utiliza para manejar el input de busqueda y se utiliza para la request
  const [name, setName] = useState("");
  //se utiliza para manejar el input de busqueda y se utiliza para la request

  //esta funcion realiza la busqueda en la API
  const handleChange = async (e) => {
    e.preventDefault();
    //Si el input no contiene ningun valor al enviar reinicio todo y muestra el feed principal
    if (e.target.showname.value === "") {
      search.setValue("");
      setCurrentPage(1);
      return setSearch([]);
    }
    //Si el input no contiene ningun valor al enviar reinicio todo y muestra el feed principal

    //actualiza la pagina al momento de enviar
    setCurrentPage(1);
    //actualiza la pagina actual al momento de enviar

    // realiza el request para obtener los datos necesarios
    let finded = await axios.get(
      `https://www.episodate.com/api/search?q=${name.toLowerCase()}`
    );
    // realiza el request para obtener los datos necesarios

    // actualiza el valor del context global
    search.setValue(e.target.showname.value);
    // actualiza el valor del context global

    //actualiza los valores encontrados al estado search
    await setSearch(finded.data);
    //actualiza los valores encontrados
  };
  //esta funcion realiza la busqueda en la API

  // resetea al momento de presionar la X
  const reset = (e) => {
    setCurrentPage(1);
    setName("")
    search.setValue("");
    return setSearch([]);
  };
  // resetea al momento de presionar la X
  return (
    <div className="w-1/2  justify-end phone-sm:max-lg:w-full  items-center relative my-auto flex flex-row">
      <form
        onSubmit={(e) => handleChange(e)}
        className="w-full flex flex-row justify-end"
      >
        {/*recibe */}
        <input
          type="text"
          id="showname"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Buscar..."
          className="w-2/4 focus:w-3/4 justify-end placeholder:text-white focus:bg-madder phone-sm:max-lg:focus:w-full phone-sm:max-lg:w-full selection:bg-rich-black focus:border-0 focus:opacity-100 text-white tracking-wider font-semibold outline-none p-2  duration-300 ease-in-out h-10 bg-madder opacity-50 shadow-sm rounded-md"
        />
        {search.value.length === 0 ? (
          <button
            className="w-10 absolute my-2 ml-[65%] text-white hover:text-crayola-blue cursor-pointer"
            type="submit"
            onSubmit={(e) => handleChange(e)}
          >
            <HiSearch size={25} />
          </button>
        ) : (
          <AiOutlineClose
            onClick={reset}
            id="close"
            className="w-10 absolute my-2 ml-[65%] text-white hover:text-crayola-blue cursor-pointer"
            size={25}
          />
        )}
      </form>
    </div>
  );
};

export default InputSearch;
