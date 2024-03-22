import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import blogs from "../mocks/blogs";

const Landing = () => {
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
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Welcome to Our Website
        </h1>
        <p style={{ marginTop: "0.5rem", fontSize: "1.25rem" }}>
          Short description of what we offer.
        </p>
        <Link
          to="/pricing"
          style={{
            marginTop: "1rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#3490dc",
            color: "#fff",
            borderRadius: "0.375rem",
            textDecoration: "none",
            transition: "background-color 0.3s ease",
          }}
        >
          See Pricing
        </Link>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
        }}
      >
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
