import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onPress}
      className="block p-2 m-1 text-white transition rounded-md bg-slate-500 hover:bg-slate-900 hover:-translate-y-1"
    >
      {props.children}
    </button>
  );
};

export default Button;
