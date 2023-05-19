import { createContext, useContext, useEffect, useState } from "react";
import Paginate from "../components/Paginate/Paginate";
import Navbar from "../components/Navbar/Navbar";

import axios from "axios";
import ShowCard from "../components/ShowCard/ShowCard";
import { Outlet } from "react-router-dom";
// carga los datos por primera vez para el estado show
const fetchDataCall = async ({ api }) => {
  let apiReturn = await axios.get(api);
  return apiReturn.data;
};
// carga los datos por primera vez para el estado show

// declara el contecto para la utilizacion global de search
export const SearchContext = createContext();
// declara el contecto para la utilizacion global de search

const MainPage = () => {
  // estado utilizado como context global
  const [search, setSearch] = useState("");
  // estado utilizado como context global

  // estado que almacena los shows para el feed principal
  const [shows, setShows] = useState([]);
  // estado que almacena los shows para el feed principal

  // estado de la pagina actual de la paginacion
  const [currentPage, setCurrentPage] = useState(1);
  // estado de la pagina actual de la paginacion

  // estado de los shows buscados
  const [searchShows, setSearchShows] = useState([]);
  // estado de los shows buscados

  useEffect(() => {
    // funcion callback que utiliza la funcion declara fuera para hacer el request
    const fetchData = async (api) => {
      let response = await fetchDataCall({
        api: api,
      });
      setShows(response);
    };
    // funcion callback que utiliza la funcion declara fuera para hacer el request

    // activa la funcion con la url de la API
    fetchData(`https://www.episodate.com/api/most-popular`);
  }, []);

  return (
    <SearchContext.Provider value={{ value: search, setValue: setSearch }}>
      <div>
        <Navbar setSearch={setSearchShows} setCurrentPage={setCurrentPage} />
        {/* Sesion condicional denpendiente de la cantidad de objetos en el estado SeachShows */}
        <section className="container my-10 justify-center mx-auto flex flex-row flex-wrap gap-10">
          {searchShows?.length === 0
            ? shows?.tv_shows?.map((show) => {
                return (
                  <ShowCard
                    id={show.id}
                    key={show.id}
                    name={show.name}
                    network={show.network}
                    status={show.status}
                    img={show.image_thumbnail_path}
                  />
                );
              })
            : searchShows?.tv_shows?.map((show) => {
                return (
                  <ShowCard
                    id={show.id}
                    key={show.id}
                    name={show.name}
                    network={show.network}
                    status={show.status}
                    img={show.image_thumbnail_path}
                  />
                );
              })}
        </section>
        {/* Sesion condicional denpendiente de la cantidad de objetos en el estado SeachShows */}
        <Outlet />
        <Paginate
          shows={shows}
          setSearch={setSearchShows}
          searchShows={searchShows}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setShows={setShows}
        />
      </div>
    </SearchContext.Provider>
  );
};

export default MainPage;
