import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ResponsivePagination from "react-responsive-pagination";
import { dropEllipsis } from "react-responsive-pagination/narrowBehaviour";
import { SearchContext } from "../../routes/mainPage";
import "react-responsive-pagination/themes/minimal.css";
const Paginate = ({
  shows,
  setShows,
  setCurrentPage,
  currentPage,
  searchShows,
  setSearch,
}) => {
  const search = useContext(SearchContext);

  const totalPages = 42;
  const totalPagesSearch = searchShows.pages;

  //Al otogar un nombre por medio del input actualiza la barra de navegacion para que coincida con la misma ruta y se pueda cambiar de la pagina
  async function handlePageChangeSearch(page) {
    setCurrentPage(page);
    let value = await search.value;
    let json = await axios.get(
      `https://www.episodate.com/api/search?q=${value}&page=${page}`
    );
    await setSearch(json.data);
  }

  async function handlePageChange(page) {
    setCurrentPage(page);
    let json = await axios.get(
      `https://www.episodate.com/api/most-popular?page=${page}`
    );
    await setShows(json.data);
  }

  return (
    <div className="lg:px-[10rem]  sm:max-lg:px-[5rem] py-10">
      {searchShows.length !== 0 ? (
        <ResponsivePagination
          narrowBehaviour={dropEllipsis}
          current={currentPage}
          total={totalPagesSearch}
          onPageChange={(page) => handlePageChangeSearch(page)}
        />
      ) : (
        <ResponsivePagination
          narrowBehaviour={dropEllipsis}
          current={currentPage}
          total={totalPages}
          onPageChange={(page) => handlePageChange(page)}
        />
      )}
    </div>
  );
};

export default Paginate;
