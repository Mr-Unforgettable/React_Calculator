import React from "react";
import OutputScreenRow1 from "./outputScreenRow1";
import OutputScreenRow2 from "./outputScreenRow2";

const OutputScreen = (props) => {
  return (
    <div className="screen">
      <OutputScreenRow1 value={props.question} />
      <OutputScreenRow2 value={props.answer} />
    </div>
  );
};

export default OutputScreen;
