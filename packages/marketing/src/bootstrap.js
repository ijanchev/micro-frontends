import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./components/App";
import AppProviders from "./components/AppProviders";

const mount = (el, { onNavigate, defaultHistory, initialPath } = {}) => {
  const memoryHistory = createMemoryHistory({
    initialEntries: [initialPath || "/"],
  });
  const history = defaultHistory || memoryHistory;
  //on navigate will be called in the parent app if we navigate in the child app
  //will be caled by the history listener
  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(
    <AppProviders history={history}>
      <App />
    </AppProviders>,
    el
  );

  return {
    //function to update the history object in the child app, called form parent app
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
