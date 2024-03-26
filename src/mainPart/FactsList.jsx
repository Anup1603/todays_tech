import React from "react";
import Fact from "./Fact";

const FactsList = ({ category, facts, setFacts }) => {
  if (facts.length === 0) {
    return (
      <p className="loading">
        No fact from this category yet. Create the first one ...!!
      </p>
    );
  }

  return (
    <section>
      <ul id="fact-lists">
        {facts.map((fact) => (
          <Fact
            key={fact.id}
            fact={fact}
            category={category}
            setFacts={setFacts}
          />
        ))}
      </ul>
      <p style={{ margin: "20px 0 20px 0" }}>
        There are {facts.length} Facts in Database. Add Your Own !!
      </p>
    </section>
  );
};

export default FactsList;
