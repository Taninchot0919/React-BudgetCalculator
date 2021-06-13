import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className={`bg-${type}-500 text-center text-xl py-2`}>
      <p className="text-white">{text}</p>
    </div>
  );
};

export default Alert;
