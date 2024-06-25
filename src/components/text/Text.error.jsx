import React from "react";
import { TextMd } from "../index";

const TextError = ({ text, classes = "" }) => {
  return <TextMd classes={`text-red-400 font-medium ${classes}`} text={text} />;
};

export default TextError;
