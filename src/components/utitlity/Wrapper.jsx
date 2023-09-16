/* eslint-disable react/prop-types */
import { Header } from "../Navs/Header";
import { Footer } from "./Footer";

export const Wrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
