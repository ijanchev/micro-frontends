import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const element = document.getElementById("__root__");
  if (element) mount(element);
}

export { mount };
