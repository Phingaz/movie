import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkIcon from "@mui/icons-material/Work";

export const Footer = () => {
  return (
    <footer className="w-[min(90%,1300px)] mx-auto pb-20 text-center">
      <p className="font-semibold text-gray-400 mb-4 ">
        © 2023 MovieBox by Prosper Pii{" "}
      </p>
      <div className="flex gap-5 justify-center items-center transition-all duration-300">
        <a
          className="link hover:scale-125 hover:text-black cursor-pointer"
          href="https://github.com/Phingaz"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          className="link hover:scale-125 hover:text-blue-800 cursor-pointer"
          href="https://www.linkedin.com/in/piinoya/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          className="link hover:scale-125 hover:text-purple-900 cursor-pointer"
          href="https://pii.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <WorkIcon />
        </a>
      </div>
      {/* <div className="flex gap-2 sm:gap-5 flex-col sm:flex-row justify-center items-center mb-4">
        <p className="font-bold">Conditions of Use</p>
        <p className="font-bold">Privacy & Policy</p>
        <p className="font-bold">Press Room</p>
      </div> */}
    </footer>
  );
};
