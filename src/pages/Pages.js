import React from "react";
import { Card } from "../components/card/Card";
import { Home } from "./Home";
import "./Page.css";
export const Pages = () => {
  return (
    <div style={{ top: "8%" }}>
      <Home />
      <Card />
      <Testdiv />
    </div>
  );
};
const Testdiv = () => {
  return (
    <>
      <div className="box">
        <div>
          <div
            className="click"
            onClick={() => {
              if (
                document.getElementsByClassName("hidden")[0].style.display ==
                "block"
              ) {
                document.getElementsByClassName("hidden")[0].style.display =
                  "None";
              } else {
                document.getElementsByClassName("hidden")[0].style.display =
                  "block";
              }
            }}
          ></div>
          <div className="hidden"></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};
