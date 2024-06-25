"use client";

import React from "react";

const Text5Xl = ({ classes, text, color }) => {
  return (
    <h1
      className={`text-3xl md:text-5xl ${color || "text-heading"} ${
        classes || ""
      }`}
    >
      {text}
    </h1>
  );
};

export default Text5Xl;
