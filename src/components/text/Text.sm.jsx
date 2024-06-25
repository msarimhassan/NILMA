"use client";

import React from "react";

const TextSm = ({ classes, text, color }) => {
  return (
    <h1
      className={`text-base md:text-sm ${color || "text-heading"} ${
        classes || ""
      }`}
    >
      {text}
    </h1>
  );
};

export default TextSm;
