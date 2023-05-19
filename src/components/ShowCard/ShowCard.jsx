import { Link } from "react-router-dom";

const ShowCard = ({ id, img, name, network, status }) => {

  return (
    <Link
      to={`show/${id}`}
      style={{ backgroundImage: `url(${img})` }}
      className="w-72 h-[25rem] drop-shadow-2xl hover:rotate-12 hover:scale-110  ease-in-out z-0 hover:z-50 duration-300 hover:cursor-pointer bg-cover bg-center rounded-lg"
    >
      <div className=" w-full h-40 mt-[90%] p-3 opacity-100  to-madder bg-gradient-to-t from-red-700  from-10% overflow-visible rounded-b-lg inline-block align-bottom">
        <p className="font-sans w-full text-md text-white font-bold flex my-2 flex-row justify-between">
          {name}
          <span className="font-sans text-sm justify-end text-green-300 my-auto font-normal">
            {status}
          </span>
        </p>
        <p className="font-sans text-sm text-gray-300 font-normal">{network}</p>
      </div>
    </Link>
  );
};

export default ShowCard;
