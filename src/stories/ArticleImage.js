import React from "react";
import "./ArticleImage.css";

const ArticleImage = props => (
  <img src={props.source} className={props.class} alt=""/>
);

export default ArticleImage;
