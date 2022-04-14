import React from "react";
import { mount } from "auth/api";
import { useHistory } from "react-router-dom";

const AuthApp = () => {
  const ref = React.useRef(null);
  const history = useHistory();

  React.useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      /*
        function onNavigate(location) - will be called if the user is making navigation in the child app, to update the history object in the parent App
      */
      onNavigate: ({ pathname: nextPathname }) => {
        const {
          location: { pathname: currentPathname },
        } = history;
        if (currentPathname !== nextPathname) history.push(nextPathname);
      },
      initialPath: history.location.pathname,
    });
    //onParentNavigate will be called if we change the navigation in the parent App to update the history object in the child app
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
