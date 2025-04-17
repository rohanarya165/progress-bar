import React from "react";

function Progress({ progress }) {
  return (
    <div>
      <div className="outer">
        <div
          className="inner"
          style={{
            backgroundColor: "green",
            width: `${progress}%`,
            transition: "width 0.5s ease-in-out",
            textAlign: "center",
            padding: "4px 0",
          }}
        ></div>
      </div>
      <p style={{ color: "green" }}>{progress}%</p>
    </div>
  );
}

export default Progress;
