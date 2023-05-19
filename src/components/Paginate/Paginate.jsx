import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ResponsivePagination from "react-responsive-pagination";
import { SearchContext } from "../../routes/mainPage";
//import "react-responsive-pagination/themes/bootstrap.css";
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
          className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200"
          current={currentPage}
          total={totalPagesSearch}
          onPageChange={(page) => handlePageChangeSearch(page)}
        />
      ) : (
        <ResponsivePagination
          className="lg:w-3/5 w-full  flex flex-row items-center justify-between mx-auto border-t border-gray-200"
          pageLinkClassName=" "
          pageItemClassName="text-lg p-2 font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent "
          activeItemClassName="border-madder border-t-2"
          navClassName="hover:text-madder text-[30px] py-auto  text-lg p-2 flex items-center text-gray-600 hover:text-indigo-700 cursor-pointer"
          current={currentPage}
          total={totalPages}
          disabledItemClassName
          onPageChange={(page) => handlePageChange(page)}
        />
      )}
    </div>
  );
};

export default Paginate;
