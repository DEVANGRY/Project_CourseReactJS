import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Demo from "./Demo";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";
import Car from "./Componets/Car";
import Motor from "./Componets/Motor";
import Student from "./Componets/Student";
import Room from "./Componets/Room";
import Hanoi from "./Componets/Hanoi";
import { Arrow } from "./Componets/Arrow";
import Computer from "./class_componets/Computer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Demo />
        <Demo2 />
        <Demo3 />
        <Car />
        <Motor brand="Honda" model="Wave alpha" color="green" year="2021" />
        <Student name="Durrty03" age="20" address="Hà nội" />
        <Room room_name="Phòng Học trực tuyến ReactJS" create="28/6/2023" />
        <Hanoi country="From Việt Nam" />
        <Arrow name="DevTUNS" />
        <Computer name="Dell-X9" />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
