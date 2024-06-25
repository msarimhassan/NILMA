"use client";

import React from "react";

const Text9Xl = ({ classes, text, color }) => {
  return (
    <h1
      className={`text-6xl md:text-9xl ${color || "text-heading"} ${
        classes || ""
      }`}
    >
      {text}
    </h1>
  );
};

export default Text9Xl;
