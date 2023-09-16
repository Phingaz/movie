import styled from "./Header.module.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import tv from "../asset/tv.png";
import Main from "../../Context";
import { useContext } from "react";
import { DropDownNav } from "./DropDownNav";
import { SearchInput } from "../utitlity/SearchInput";

export const Header = () => {
  const { input, url, handleSubmit, handleChange } = useContext(Main);

  const [sh, setSh] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [name, setName] = useState("John");
  const navigate = useNavigate();

  const shoNa = () => {
    setSh((p) => !p);
  };

  return (
    <header className={styled.header}>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "flex justify-center items-center gap-4 left-2 link t"
            : "flex justify-center items-center gap-4 left-2 link t"
        }
      >
        <img src={tv} width={"40px"} />
        <p className="text-2xl font-semibold t">MovieBox</p>
      </NavLink>

      <button
        onClick={shoNa}
        className={`${styled.nav_btn} ${sh && styled.openb}`}
      >
        <span className={styled.ham}></span>
        <span className={styled.ham}></span>
        <span className={styled.ham}></span>
      </button>

      <nav
        className={`flex-1 md:flex md:justify-center md:items-center t ${
          styled.nav
        } ${sh ? styled.open : styled.close}`}
      >
        <form
          onSubmit={() => {
            handleSubmit;
            navigate(`/${url}/search`);
          }}
          className="md:w-6/12 w-full md:mx-auto h-[50px] rounded-lg bg-transparent border-2 border-slate-300 md:px-5 px-2 flex justify-between items-center b"
        >
          <SearchInput
            input={input}
            handleChange={handleChange}
            handleSubmit={() => {
              handleSubmit;
              navigate(`/${url}/search`);
            }}
          />
        </form>

        <div className="flex">
          {isLoggedIn ? (
            <DropDownNav name={name} />
          ) : (
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "flex justify-center items-center gap-4"
                  : "flex justify-center items-center gap-4"
              }
            >
              <p className="font-normal text-lg link">Sign in</p>
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};
