import React from "react";
import FactsCategory from "./FactsCategory";
import FactsList from "./FactsList";
import Loader from "../Loader";

const MainSection = ({
  category,
  facts,
  isLoading,
  setCurrCategory,
  setFacts,
}) => {
  return (
    <main className="main">
      <FactsCategory cate={category} setCurrCategory={setCurrCategory} />

      {isLoading ? (
        <Loader />
      ) : (
        <FactsList category={category} facts={facts} setFacts={setFacts} />
      )}
    </main>
  );
};

export default MainSection;
