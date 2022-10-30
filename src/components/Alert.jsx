import React from "react";
import { Outlet } from "react-router-dom";

const Alert = (props) => {
  const capi = (word) => {
    let lower = word.toLowerCase();
    return lower.chartAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.type} </strong>
        {` `}
        {props.alert.msg}
      </div>
    )
  );
};

export default Alert;
