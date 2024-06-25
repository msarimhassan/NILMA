"use client";

import React from "react";

const TextXl = ({ classes, text, color }) => {
  return (
    <h1
      className={`text-md md:text-xl ${color || "text-heading"} ${
        classes || ""
      }`}
    >
      {text}
    </h1>
  );
};

export default TextXl;
