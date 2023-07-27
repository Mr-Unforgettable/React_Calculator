import React from "react";

const OutputScreenRow2 = (props) => {
  return (
    <div className="screen-row">
      <input type="text" placeholder="0" readOnly value={props.value} />
    </div>
  );
};

export default OutputScreenRow2;
