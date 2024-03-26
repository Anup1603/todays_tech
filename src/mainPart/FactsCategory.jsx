import React from "react";

const FactsCategory = ({ cate, setCurrCategory }) => {
  return (
    <aside>
      <ul>
        <li key="all">
          <button
            className="btn btn-all-categories"
            onClick={() => setCurrCategory("all")}
          >
            All
          </button>
        </li>

        {cate.map((cate) => (
          <li key={cate.name}>
            <button
              className="btn btn-category"
              style={{ backgroundColor: cate.color }}
              onClick={() => setCurrCategory(cate.name)}
            >
              {cate.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default FactsCategory;
