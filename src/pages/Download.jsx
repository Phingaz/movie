import { Wrapper } from "../components/utitlity/Wrapper";
import Main from "../Context";
import { useContext, useState, useEffect } from "react";
import { Loader } from "../components/utitlity/Loader";
import { BackButton } from "../components/utitlity/BackButton";

import OutputIcon from "@mui/icons-material/Output";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import SearchIcon from "@mui/icons-material/Search";
import { NextPage } from "../components/utitlity/NextPage";

export const Download = () => {
  const { movie, url, increasePage, reducePage, downloadPage, setDownloadPage } =
    useContext(Main);

  const input = url === "movie" ? movie.original_title : movie?.name;

  const [searchInput, setsearchInput] = useState(input ? input : "");
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [limit, setLimit] = useState(10);
  const [site, setSite] = useState("piratebay");
  const [success, setSuccess] = useState(false);

  const supportedSites = [
    "1337x",
    "piratebay",
    "magnetdl",
    // "bitsearch",
    "limetorrent",
    // "torlock",
    // "zooqle",
    // "tgx",
    // "nyaasi",
    // "kickass",
    // "libgen",
    // "yts",
    // "torrentfunk",
    // "glodls",
    // "torrentproject",
    // "ybt",
  ];

  useEffect(() => {
    fetchData(downloadPage);
  }, [downloadPage]);

  const fetchData = async (page) => {
    setIsPending(true);
    try {
      const req = await fetch(
        `https://torrent-api-py-nx0x.onrender.com/api/v1/search?site=${site}&query=${searchInput}&limit=${limit}&page=${page}`
      );
      if (req.status !== 200)
        throw Error("Could not fetch the data from that site");
      const data = await req.json();
      setData(data);
      setIsPending(false);
      setSuccess(true);
    } catch (error) {
      setError(error);
      setSuccess(false);
      setIsPending(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    setSuccess(false);
    await fetchData(downloadPage, limit, searchInput, site);
    history.replaceState(null, null, "/download");
  };

  const pagination = [];
  for (let i = 1; i < data.length; i++) {
    pagination.push(i);
  }

  return (
    <Wrapper>
      {isPending ? (
        <Loader />
      ) : (
        <>
          <div className="bg-white w-screen z-[1] pt-[100px] min-h-screen">
            <section className="flex flex-col gap-5 w-[min(90%,1300px)] mx-auto py-2">
              <div className="flex justify-between">
                <h1 className="text-3xl font-bold text-red-900">
                  Magnet Links
                </h1>
                <BackButton />
              </div>
              <div className="grid grid-cols-1 gap-[1.5rem] gap-y-3 mb-5">
                <div className="flex flex-col justify-between items-center gap-5">
                  <form
                    onSubmit={handleSubmit}
                    className="h-[50px] flex-auto rounded-lg bg-transparent border-2 border-slate-300 flex justify-between items-center b px-2 hover:border-slate-400 transition-all duration-300 ease-in-out w-full"
                  >
                    <input
                      className="w-full h-full bg-transparent outline-none font-normal"
                      name="search"
                      value={searchInput}
                      onChange={(e) => setsearchInput(e.target.value)}
                      autoComplete="off"
                    />
                    <span className="link">
                      <SearchIcon onClick={handleSubmit} className="t" />
                    </span>
                  </form>

                  <div className="flex w-full justify-between gap-2">
                    <div className="flex flex-col gap-2 w-[35%] h-[50px] z-[2]">
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="flex justify-between text-rose-800 font-bold bg-rose-100 hover:bg-rose-300 focus:ring-2 focus:outline-none focus:ring-rose-300  rounded-lg text-sm px-5 py-2.5 text-center  items-center transition-all duration-300 ease-in-out h-full"
                        type="button"
                        onClick={() => setOpen(!open)}
                      >
                        {site}{" "}
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
                        } z-1 justify-center bg-rose-100 rounded-lg shadow w-full`}
                      >
                        <ul className="flex flex-col gap-1 text-sm  text-gray-700 w-full p-2">
                          {supportedSites.map((el) => (
                            <li
                              key={el}
                              className={`grid place-content-center font-semibold text-red-700 py-2 bg-red-200 hover:bg-rose-300 cursor-pointer transition-all duration-300 ease-in-out rounded-lg px-2`}
                              value={el}
                              onClick={() => {
                                setSite(el);
                                setOpen(!open);
                              }}
                            >
                              {el}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <input
                      name="limit"
                      className="flex w-[10%] h-[50px] bg-transparent outline-none font-normal rounded-lg border-2 border-slate-300 justify-between items-center b px-2 hover:border-slate-400 transition-all duration-300 ease-in-out text-xs"
                      value={limit}
                      onChange={(e) => setLimit(e.target.value)}
                    />
                    <button
                      className="btn text-white w-[40%]"
                      onClick={handleSubmit}
                    >
                      Search
                    </button>
                  </div>
                </div>
                {success ? (
                  data?.data?.map((el, i) => (
                    <div
                      key={i}
                      className="flex md:flex-row flex-col md:justify-between md:items-center md:gap-2 gap-1 border b transition-all hover:s hover:rounded-lg z-0 p-2 rounded-xl b bg-rose-50 bg-opacity-40 "
                    >
                      <p className="flex-wrap bre text-sm font-semibold flex-[7] text-red-950">
                        {el.name}
                      </p>
                      <p className="flex-wrap text-sm bre font-semibold flex-[3]">
                        Seeders: {el.seeders}
                      </p>
                      <p className="flex-wrap text-sm bre font-semibold flex-[3]">
                        Leechers: {el.leechers}
                      </p>
                      <p className="flex-wrap bre text-xs font-semibold flex-[2]">
                        Size: {el.size}
                      </p>
                      <p className="flex-wrap bre text-xs font-semibold flex-[3]">
                        Date: {el.date}
                      </p>
                      <a
                        className="bre flex justify-center gap-3 items-center flex-[1] rounded-md text-rose-800 link hover:text-rose-600 px-1 md:py-0 py-1"
                        href={el.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>
                          <OutputIcon />
                        </span>
                      </a>
                      <a
                        className="bre flex justify-center gap-3 items-center flex-[1]  rounded-md text-rose-800 link hover:text-rose-600 "
                        href={el.magnet}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>
                          <CloudDownloadIcon />
                        </span>
                      </a>
                    </div>
                  ))
                ) : (
                  <p>{error?.message}</p>
                )}
              </div>

              {data?.total_pages && (
                <NextPage
                  reducePage={() => reducePage(setDownloadPage)}
                  page={downloadPage}
                  total_pages={data?.total_pages}
                  increasePage={() => increasePage(setDownloadPage)}
                />
              )}
            </section>
          </div>
        </>
      )}
    </Wrapper>
  );
};
