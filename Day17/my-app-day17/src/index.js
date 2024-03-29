import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Demo1 from "./componets/Demo1";
import Accordion from "./componets/Accordion";
import GroupAccordion from "./classCopmonets/GroupAccordion";
import Tabs from "./tabs/Tabs";
import M3 from "./m3/M3";
import Cities from "./m5/Cities";
import Login from "./m6/Login";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Login />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
