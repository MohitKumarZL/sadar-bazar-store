import React from "react";
import StoreCategory from "./StoreCategory";
import men_banner from "../components/Assets/banner_mens.png";

const MenPage = () => {
  return (
    <div>
      <StoreCategory banner={men_banner} category={"men"} />
    </div>
  );
};

export default MenPage;
