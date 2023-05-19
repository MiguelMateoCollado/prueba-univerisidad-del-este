import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
const fetchDataCall = async ({ api }) => {
  let apiReturn = await axios.get(api);
  return apiReturn.data;
};
const ShowPage = () => {
  const params = useParams();
  const [show, setShow] = useState([]);
  let tvShow = show.tvShow;
  useEffect(() => {
    // funcion callback que utiliza la funcion declara fuera para hacer el request
    const fetchData = async (api) => {
      let response = await fetchDataCall({
        api: api,
      });
      setShow(response);
    };
    // funcion callback que utiliza la funcion declara fuera para hacer el request

    // activa la funcion con la url de la API
    fetchData(` https://www.episodate.com/api/show-details?q=${params.showId}`);
  }, []);
  console.log(show);
  if (show.length !== 0) {
    return (
      <div className="bg-madder w-2/4 h-[40rem]  phone-sm:max-sm:h-[55rem] phone-sm:max-sm:my-10  phone-sm:max-sm:w-[90%] phone-sm:max-sm:flex-col sm:max-lg:w-[90%] lg:max-xl:w-[90%] container flex flex-row mx-auto mt-36 shadow-xl">
        <div
          style={{
            backgroundImage: `url(${tvShow.image_thumbnail_path})`,
          }}
          className="w-2/6  sm:max-xl:w-3/6 phone-sm:max-sm:w-full phone-sm:max-sm:h-[50%] xl:w-3/6  drop-shadow-lg bg-white h-full bg-cover bg-center"
        ></div>
        <div className="text-2xl font-bold  text-white phone-sm:max-sm:h-4/6 phone-sm:max-sm:w-full xl:w-5/6 sm:max-xl:w-5/6 p-8 w-1/2 my-auto">
          <div className="border-b-2 border-white">
            <p className="tracking-wider text-yellow-500">{tvShow.name}</p>
            <p
              className={`text-xs font-normal  
               h-auto
               scroll-smooth ho overflow-hidden my-2`}
            >
              {tvShow.description}
            </p>
        
          </div>
          <div className="border-b-2 border-white">
            <p className="text-sm tracking-wider">Genres</p>
            <p className="text-xs font-normal my-2">
              {tvShow.genres.map((genre) => `| ${genre} `)}
            </p>
          </div>
          <div className="border-b-2 flex flex-row justify-between  border-white ">
            <span>
              <p className="text-sm tracking-wider">Station</p>
              <p className="text-xs font-normal  my-2">{tvShow.network}</p>
            </span>
            <span>
              <p className="text-sm tracking-wider">Start Date</p>
              <p className="text-xs font-normal my-2">{tvShow.start_date}</p>
            </span>
            <span>
              <p className="text-sm tracking-wider">Status</p>
              <p className="text-xs font-normal  my-2">{tvShow.status}</p>
            </span>
          </div>
          <div className="w-full">
            <p className="text-sm tracking-wider">Status</p>
            <ReactStarsRating
              className="flex flex-row my-2 gap-1"
              count={10}
              size={12}
              isEdit={false}
              value={Math.round(tvShow.rating)}
            />
          </div>
          <div className="flex flex-row justify-end items-end w-auto h-auto ">
            <Link to="/">
              <BiArrowBack className="cursor-pointer hover:text-red-400 ease-in-out duration-150" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default ShowPage;
