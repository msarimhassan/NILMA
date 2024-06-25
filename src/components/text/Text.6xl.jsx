"use client";

import React from "react";

const Text6Xl = ({ classes, text, color }) => {
  return (
    <h1
      className={`text-4xl md:text-6xl ${color || "text-heading"} ${
        classes || ""
      }`}
    >
      {text}
    </h1>
  );
};

export default Text6Xl;
