import React from "react";
import "./Input.css";

const Input = props => (
    <form>
    <input className={props.class} placeholder={props.placeholder}
      type={props.type}
    />
    <button type={props.buttonType} ><img className={props.buttonClass} src={props.source} alt=""/></button>
  </form>
);

export default Input;
