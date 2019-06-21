import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const players = [
  { id: 1, name: "Vinay", score: 50 },
  { id: 2, name: "Tolu", score: 30 },
  { id: 3, name: "Maleek", score: 40 },
  { id: 4, name: "Abass", score: 35 }
];
ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
