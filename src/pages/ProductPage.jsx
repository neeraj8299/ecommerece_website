import React from "react";
import FilterScreen from "../components/filterScreen";
import ProductListScreen from "../components/productListScreen";
import TopNavBar from "../components/topNavBar";
import TopSubNavBar from "../components/topSubNavBar";

export default function ProductPage() {
  return (
    <>
      <TopNavBar />
      <TopSubNavBar />
      <ProductListScreen />
      <FilterScreen />
    </>
  );
}
