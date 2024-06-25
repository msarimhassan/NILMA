"use client";

import React from "react";

const TextLabel = ({
  classes = "",
  text,
  color = "text-labels",
  htmlFor,
  isRequired = false,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 text-[16px] ${color || "text-labels"} ${classes}`}
    >
      {text} {isRequired && <span className="text-red-500">*</span>}
    </label>
  );
};

export default TextLabel;
