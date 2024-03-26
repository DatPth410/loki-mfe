import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <div style={{ flex: "1" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          Micro Frontend
        </Link>
      </div>
      <div style={{ flex: "1", textAlign: "right" }}>
        <Link to="/login" style={{ textDecoration: "none", color: "#fff" }}>
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
