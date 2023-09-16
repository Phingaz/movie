/* eslint-disable react/prop-types */
import SearchIcon from "@mui/icons-material/Search";

export const SearchInput = ({ input, handleChange, handleSubmit }) => {
  return (
    <>
      <input
        name="search"
        className={`w-full h-full bg-transparent outline-none font-normal${
          input.trim().length !== 0 && `text-slate-900 t`
        } ${
          input.trim().length === 0 && `text-slate-300`
        } placeholder-slate-300 placeholder-opacity-50 font-normal t`}
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="What do you want to search for?"
      />
      <div className="link">
        <SearchIcon onClick={handleSubmit} className="t" />
      </div>
    </>
  );
};
