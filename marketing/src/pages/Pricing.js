import React from "react";
import Footer from "../components/Footer";
import PricingOption from "../components/PricingOption";

const Pricing = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        Choose Your Plan
      </h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <PricingOption title="Free" />
        <PricingOption title="Pro" />
        <PricingOption title="Enterprise" />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
