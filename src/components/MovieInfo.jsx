/* eslint-disable react/prop-types */

export const MovieInfo = ({ movieInfo, url }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const revenue = formatter.format(movieInfo?.revenue);
  const budget = formatter.format(movieInfo?.budget);

  return (
    <div className="flex flex-col sm:flex-row gap-5 justify-between mb-5 sm:mb-0">
      <div className="flex-[7] flex flex-col gap-4 text-sm justify-between">
        <div className="flex gap-2 flex-col">
          <p className="text-rose-900 text-lg font-semibold tracking-tighter">
            Overview:{" "}
            <span className="text-rose-700 text-justify text-base">
              {movieInfo.overview}
            </span>
          </p>

          <div className="flex gap-1">
            <p className="text-rose-900 text-lg font-semibold tracking-tighter">
              Genres:
            </p>
            {movieInfo?.genres?.map((el) => (
              <span
                key={el.id}
                className="text-rose-700 text-justify text-base bg-rose-200 py-1 px-2 ml-1 rounded-xl font-semibold"
              >
                {el.name}
              </span>
            ))}
          </div>
          {url === "tv" ? (
            <>
              {" "}
              <p className="text-rose-900 text-lg font-semibold tracking-tighter">
                Status:
                <span className="text-rose-700 text-justify text-base">
                  {" "}
                  {movieInfo?.status}
                </span>
              </p>
              <p className="text-rose-900 text-lg font-semibold tracking-tighter">
                Number of Seasons:
                <span className="text-rose-700 text-justify text-base">
                  {" "}
                  {movieInfo?.seasons?.length}
                </span>
              </p>
              <p className="text-rose-900 text-lg font-semibold tracking-tighter">
                Number of Episodes:
                <span className="text-rose-700 text-justify text-base">
                  {" "}
                  {movieInfo?.number_of_episodes}
                </span>
              </p>
            </>
          ) : (
            <>
              <p className="text-rose-900 text-lg font-semibold tracking-tighter">
                Status:
                <span className="text-rose-700 text-justify text-base">
                  {" "}
                  {movieInfo?.status}
                </span>
              </p>
              <p className="text-rose-900 text-lg font-semibold tracking-tighter">
                Revenue:
                <span className="text-rose-700 text-justify text-base">
                  {" "}
                  {revenue} USD
                </span>
              </p>
              <p className="text-rose-900 text-lg font-semibold tracking-tighter">
                Budget:
                <span className="text-rose-700 text-justify text-base">
                  {" "}
                  {budget} USD
                </span>
              </p>
            </>
          )}
          <p className="text-rose-900 text-lg font-semibold tracking-tighter">
            Languages:
            {movieInfo?.spoken_languages?.map((el) => (
              <span
                key={el.name}
                className="text-rose-700 text-justify text-base bg-rose-200 py-1 px-2 ml-1 rounded-xl"
              >
                {el.name}
              </span>
            ))}
          </p>
        </div>
      </div>
      {/* <div className="flex-[3] flex flex-col gap-3 items-center">
        {url === "tv" ? (
          <>
            <button className="bg-rose-700 text-white py-2 rounded-lg w-full font-semibold">
              See Showtimes
            </button>
            <button className="bg-rose-200 text-black py-2 rounded-lg w-full font-semibold border-rose-700 border-[1px]">
              More watch options
            </button>
          </>
        ) : (
          <button className="btn w-full text-white">
            Similar
          </button>
        )}
        <div className="grid grid-cols-3 gap-1 rounded-md">
          <img
            src={s}
            className="object-contain object-center rounded-tl-lg rounded-bl-lg"
          />
          <img src={s} className="object-contain object-center" />
          <img
            src={s}
            className="object-contain object-center rounded-tr-lg rounded-br-lg"
          />
        </div>
      </div> */}
    </div>
  );
};
