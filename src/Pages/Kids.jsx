import React from "react";
import StoreCategory from "./StoreCategory";
import kid_banner from "../Components/Assets/banner_kids.png";

const KidsPage = () => {
  return (
    <div>
      <StoreCategory banner={kid_banner} category={"kid"} />
    </div>
  );
};
export default KidsPage;
