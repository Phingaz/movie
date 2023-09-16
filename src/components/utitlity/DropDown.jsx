/* eslint-disable react/prop-types */
import { useState } from "react";
import Main from "../../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const DropDown = ({ options }) => {
  const [open, setOpen] = useState(false);
  const { option, setOption } = useContext(Main);

  let title = "";

  switch (option) {
    case "now_playing":
      title = "Now Playing";
      break;
    case "popular":
      title = "Popular";
      break;
    case "upcoming":
      title = "Upcoming";
      break;
    case "top_rated":
      title = "Top rated";
      break;
    case "on_the_air":
      title = "On The Air";
      break;
    case "airing_today":
      title = "Airing Today";
      break;
    default:
      break;
  }

  return (
    <div className="flex flex-col gap-2 w-40">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="flex justify-between text-rose-800 font-bold bg-rose-100 hover:bg-rose-300 focus:ring-2 focus:outline-none focus:ring-rose-300  rounded-lg text-sm px-5 py-2.5 text-center  items-center transition-all duration-300 ease-in-out"
        type="button"
        onClick={() => setOpen(!open)}
      >
        {title}{" "}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdown"
        className={`${
          open ? "flex animate-show" : "hidden"
        } z-1 justify-center bg-rose-200 rounded-lg shadow w-full`}
      >
        <ul className="flex flex-col text-sm  text-gray-700 w-full py-2">
          {options?.map((el) => (
            <li key={el.id} className={`${open ? "animate-show" : ""} px-2`}>
              <Link
                onClick={() => {
                  setOption(el.path);
                  setOpen(!open);
                }}
                className="grid place-content-center capitalize font-semibold text-rose-900 py-2 hover:bg-rose-300 cursor-pointer transition-all duration-300 ease-in-out rounded-lg"
              >
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
