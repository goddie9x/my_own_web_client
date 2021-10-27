import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import Particles from "react-particles-js";

ReactDOM.render(
  <React.StrictMode>
    <Particles
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: false,
            },
          },
          size: {
            value: 10,
            random: true,
          },
          move: {
            direction: "bottom",
            out_mode: "out",
          },
          line_linked: {
            enable: false,
          },
        },
        polygon: {
          enable: true,
          type: "inside",
          move: {
            radius: 150,
          },
          url: "path/to/svg.svg",
        },
      }}
    />{" "}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
