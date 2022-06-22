import React from "react";

const Button = ({opSymbol, onClick}) => {
  return (
    <>
      <li className="list-group-item d-flex">
        <button
          type="button"
          onClick={onClick}
          className="btn btn-secondary mt-3 w-50 p-3 "
        >
          {opSymbol}
        </button>
      </li>
    </>
  );
};

export default Button;
