import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">{blog.title}</h2>
        <p className="text-gray-600">{blog.content}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">{blog.author}</p>
        <p className="text-sm text-gray-500">{blog.date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
