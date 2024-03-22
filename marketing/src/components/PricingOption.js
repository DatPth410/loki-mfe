import React from "react";
import { Link } from "react-router-dom";

const PricingOption = ({ title }) => {
  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        padding: "1rem",
        borderRadius: "0.5rem",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </h2>
      {title === "Free" ? (
        <Link
          to="/auth/signup"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#3490dc",
            color: "#fff",
            borderRadius: "0.375rem",
            textDecoration: "none",
            transition: "background-color 0.3s ease",
          }}
        >
          Sign Up for Free
        </Link>
      ) : (
        <button
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#3490dc",
            color: "#fff",
            borderRadius: "0.375rem",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Get Started
        </button>
      )}
    </div>
  );
};

export default PricingOption;
