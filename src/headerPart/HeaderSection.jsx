import React from "react";

const HeaderSection = ({ showForm, setShowForm }) => {
  const openCloseForm = () => {
    setShowForm((show) => !show);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src="./logo.png"
            alt="Today I Learned"
            height="65px"
            width="65px"
          />
          <h1 className="title">Today's-Tech !!</h1>
        </div>
        <button className="btn btn-large" id="shareBtn" onClick={openCloseForm}>
          {showForm ? "close" : "share a fact"}
        </button>
      </header>
    </>
  );
};

export default HeaderSection;
