import React from "react";
import { mount } from "marketing/api";
import { useHistory } from "react-router-dom";

const MarketingApp = () => {
  const ref = React.useRef(null);
  const history = useHistory();

  React.useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      /*
        function onNavigate(location) - will be called if the user is making navigation in the child app
      */
      onNavigate: ({ pathname: nextPathname }) => {
        const {
          location: { pathname: currentPathname },
        } = history;
        if (currentPathname !== nextPathname) history.push(nextPathname);
      },
      initialPath: history.location.pathname,
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;
