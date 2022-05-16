import React from "react";

const Loader = ({ loading }) => {
  return (
    <>
      {loading ? (
        <div className="spinner-border text-success m-5 text-center" role="status">
          <span className="sr-only"></span>
        </div>
      ): ""}
    </>
  );
};

export default Loader;
