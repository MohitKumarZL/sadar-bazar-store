import React from "react";
import Mainview from "../Components/Mainview/Mainview";
import Popular from "../Components/Popular/Popular";
import SpecEdition from "../Components/Specialedition/SpecEdition";
import NewCollection from "../Components/NewCollection/NewCollection";
import NewsLetter from "../Components/Newsletter/NewsLetter";

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
