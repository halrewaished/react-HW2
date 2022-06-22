import React from "react";

const Output = ({total}) => {
  return (
    <>
      <li className="list-group-item d-flex">
        <input
          type="number"
          className="form-control mt-3 p-3"
          readOnly
          value={total}
        />
      </li>
    </>
  );
};

export default Output;
