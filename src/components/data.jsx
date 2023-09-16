import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import VideoCameraBackRoundedIcon from "@mui/icons-material/VideoCameraBackRounded";
import LiveTvRoundedIcon from "@mui/icons-material/LiveTvRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <HomeRoundedIcon className="text-gray-500" />,
    path: "/",
  },
  {
    id: 2,
    name: "Movies",
    icon: <VideoCameraBackRoundedIcon className="text-gray-500" />,
    path: "/movies",
  },
  {
    id: 3,
    name: "Tv Series",
    icon: <LiveTvRoundedIcon className="text-gray-500" />,
    path: "/",
  },
  {
    id: 4,
    name: "Upcoming",
    icon: <CalendarMonthRoundedIcon className="text-gray-500" />,
    path: "/",
  },
];

export const loggedInLinks = [
  {
    id: 1,
    name: "Movies",
    path: "/",
  },
  {
    id: 2,
    name: "Tv Series",
    path: "/tvseries",
  },
  {
    id: 3,
    name: "Favorites",
    path: "/favorites",
  },
];

export const fetchList = [
  { id: 1, name: "Now Playing", path: "now_playing" },
  { id: 2, name: "Popular", path: "popular" },
  { id: 3, name: "Upcoming", path: "upcoming" },
  { id: 4, name: "Top Rated", path: "top_rated" },
];

export const fetchListTv = [
  { id: 1, name: "Airing Today", path: "airing_today" },
  { id: 2, name: "On The Air", path: "on_the_air" },
  { id: 3, name: "Popular", path: "popular" },
  { id: 4, name: "Top Rated", path: "top_rated" },
];

export const moveiGenreId = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];
