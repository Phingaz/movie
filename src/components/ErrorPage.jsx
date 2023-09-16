import { Link } from "react-router-dom";
import error from "./asset/error.gif";
export const ErrorPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container h-[100svh] px-6 py-12 mx-auto flex items-center flex-col justify-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Something went wrong
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Something seems to be broken, try again in a few minutes as our bots
            and engineers are working on it.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <button
              onClick={() => window.location.reload()}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
            >
              <span>Refresh</span>
            </button>

            <Link
              to="/"
              className="w-1/2 px-5 py-2 text-center text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
            >
              Take me home
            </Link>
          </div>
        </div>

        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <img
            className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover "
            src={error}
            alt="error"
          />
        </div>
      </div>
    </section>
  );
};
