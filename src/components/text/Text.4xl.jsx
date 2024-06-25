"use client";

import React from "react";

const Text4Xl = ({ classes, text, color }) => {
  return (
    <h1
      className={`text-2xl md:text-4xl ${color || "text-heading"} ${
        classes || ""
      }`}
    >
      {text}
    </h1>
  );
};

export default Text4Xl;
