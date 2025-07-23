import React from "react";

const Buttons = ({ text, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#14b8a6] text-gray-100 px-4 py-2 rounded-md hover:bg-[#0d9488] transition-colors duration-300 font-semibold`}
    >
      {text}
    </button>
  );
};

export default Buttons;
