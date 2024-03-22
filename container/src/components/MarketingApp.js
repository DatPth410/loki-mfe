import React from "react";
import { mount } from "marketing/MarketingApp";
import { useRef } from "react";
import { useEffect } from "react";

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref}></div>;
};

export default MarketingApp;
