import React from "react";
import { mount } from "marketing/api";

const MarketingApp = () => {
  const marketingAppRef = React.useRef(null);

  React.useEffect(() => {
    mount(marketingAppRef.current);
  }, []);

  return <div ref={marketingAppRef}></div>;
};

export default MarketingApp;
