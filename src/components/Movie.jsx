/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import star from "../components/asset/Star.png";
import m from "../components/asset/m.png";
import { MovieInfo } from "./MovieInfo";

export const Movie = ({ movieInfo, url }) => {
  const navigate = useNavigate();
  const showDate =
    url === "tv" ? movieInfo?.first_air_date : movieInfo?.release_date;
  const dateObject = new Date(showDate);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = dateObject.toLocaleDateString(undefined, options);

  const runtime = movieInfo?.runtime;
  const runTimeMin = runtime % 60;
  const runTimeHour = Math.floor(runtime / 60);

  let formattedRuntime = "";
  if (
    movieInfo &&
    movieInfo?.episode_run_time &&
    movieInfo?.episode_run_time?.length > 0
  ) {
    const runtimeInMinutes = movieInfo?.episode_run_time[0];
    formattedRuntime = `${runtimeInMinutes}m`;
  } else {
    formattedRuntime = "N/A";
  }

  return (
    <div className="flex-1">
      <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center mb-4 md:mb-10">
        <div className="flex flex-[2] sm:flex-row flex-col sm:justify-center sm:items-center gap-2 sm:gap-1">
          <h1 className="font-semibold lg:text-2xl md:text-xl text-lg flex-auto">
            {url === "tv" ? movieInfo?.name : movieInfo?.title}
            <span> &#x2022; </span>
            <span className="whitespace-nowrap">{formattedDate} &#x2022; </span>
            <span> {movieInfo?.adult ? "Adult movie" : ""} </span>
            {url === "tv" ? (
              <span>Episode runtime: {formattedRuntime}</span>
            ) : (
              <span>
                {runTimeHour}h {runTimeMin}m
              </span>
            )}
            <img
        src={m}
        className="w-[20px] aspect-square"
        onClick={() => navigate("/download")}
      ></img>
          </h1>
        </div>
        <div className="flex flex-1 justify-center items-center gap-1">
          <img src={star} className="object-contain object-center" />
          <p className="text-gray-300">
            {movieInfo?.vote_average?.toFixed(1)}{" "}
          </p>
          <p>| {movieInfo?.vote_count?.toString().slice(0, 3)}k</p>
        </div>
      </div>
      <MovieInfo movieInfo={movieInfo} url={url} />
    </div>
  );
};
