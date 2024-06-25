"use client";

import React from "react";

const Text2Xl = ({ classes, text, color }) => {
  return (
    <h1
      className={`text-lg md:text-2xl ${color || "text-heading"} ${
        classes || ""
      }`}
    >
      {text}
    </h1>
  );
};

export default Text2Xl;
