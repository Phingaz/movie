/* eslint-disable react/prop-types */
import star from "../components/asset/Star.png";
import { MovieInfo } from "./MovieInfo";

export const Movie = ({ movieInfo }) => {
  const date = movieInfo?.release_date;

  return (
    <div className="flex-1">
      <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center mb-4 md:mb-10">
        <div className="flex flex-[2] sm:flex-row flex-col sm:justify-center sm:items-center gap-1">
          <h1
            className="font-semibold lg:text-2xl md:text-xl flex-auto"
            data-testid="movie-title"
          >
            {movieInfo.title}
            <span> &#x2022; </span>
            <span
              className="whitespace-nowrap"
              data-testid="movie-release-date"
            >
              {date}
            </span>
            <span> &#x2022; PG-13 &#x2022; </span>
            <span data-testid="movie-runtime">{movieInfo?.runtime}m</span>
          </h1>
          <div className="flex gap-1">
            {movieInfo?.genres?.map((el) => (
              <p
                key={el.id}
                className="border-red-400 border-2 bg-rose-200 p-1 font-semibold rounded-xl"
              >
                {el.name}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center gap-1">
          <img src={star} className="object-contain object-center" />
          <p className="text-gray-300">
            {movieInfo?.vote_average?.toFixed(1)}{" "}
          </p>
          <p>| {movieInfo?.vote_count?.toString().slice(0, 3)}k</p>
        </div>
      </div>
      <MovieInfo movieInfo={movieInfo} />
    </div>
  );
};
