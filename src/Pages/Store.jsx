import React from "react";
import Mainview from "../components/Mainview/Mainview";
import Popular from "../components/Popular/Popular";
import SpecEdition from "../components/Specialedition/SpecEdition";
import NewCollection from "../components/NewCollection/NewCollection";
import NewsLetter from "../components/Newsletter/NewsLetter";

export const Store = () => {
  return (
    <div>
      <Mainview />
      <Popular />
      <SpecEdition />
      <NewCollection />
      <NewsLetter />
    </div>
  );
};
export default Store;
