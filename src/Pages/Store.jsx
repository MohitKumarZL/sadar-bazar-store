import React from "react";
import Mainview from "../Components/Mainview/Mainview";
import Popular from "../Components/Popular/Popular";
import SpecEdition from "../Components/Specialedition/SpecEdition";
import NewCollection from "../Components/NewCollection/NewCollection";
import NewsLetter from "../Components/Newsletter/NewsLetter";
import Footer from "../Components/Footer/Footer";

export const Store = () => {
  return (
    <div>
      <Mainview />
      <Popular />
      <SpecEdition />
      <NewCollection />
      <NewsLetter />
      <Footer />
    </div>
  );
};
export default Store;
