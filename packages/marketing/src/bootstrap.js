import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import AppProviders from "./components/AppProviders";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (el, { onNavigate, defaultHistory, initialPath } = {}) => {
  const memoryHistory = createMemoryHistory({
    initialEntries: [initialPath || "/"],
  });
  const history = defaultHistory || memoryHistory;
  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(
    <AppProviders history={history}>
      <App />
    </AppProviders>,
    el
  );

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname: currentPathname } = history.location;
      if (currentPathname !== nextPathname) history.push(nextPathname);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const element = document.getElementById("__root__");
  //in dev mode we will create browser history instead of memory history
  const defaultHistory = createBrowserHistory();
  if (element) mount(element, { defaultHistory });
}

export { mount };
