import React from "react";

const OutputScreenRow1 = (props) => {
  return (
    <div className="screen-row">
      <input type="text" placeholder="Input" readOnly value={props.value} />
    </div>
  );
};

export default OutputScreenRow1;
