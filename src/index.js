import React, { StrictMode } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Calculator from "./components/calculator";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Calculator />
    </StrictMode>
);
// ReactDOM.render(<Calculator />, document.getElementById("root"));