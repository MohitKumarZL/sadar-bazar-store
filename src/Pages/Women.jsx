import React from "react";
import StoreCategory from "./StoreCategory";
import women_banner from "../Components/Assets/banner_women.png";

const WomenPage = () => {
  return (
    <div>
      <StoreCategory banner={women_banner} category={"women"} />
    </div>
  );
};
export default WomenPage;
