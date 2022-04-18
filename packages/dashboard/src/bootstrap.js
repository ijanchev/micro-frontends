import { createApp } from "vue";
import Dashboard from "./Dashboard.vue";

const mount = (el) => {
  const App = createApp(Dashboard);
  App.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const element = document.getElementById("__root__");
  if (element) mount(element);
}

export { mount };
