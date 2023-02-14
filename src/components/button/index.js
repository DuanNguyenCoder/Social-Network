import React from "react";
import classnames from "classnames/bind";
import style from "./button.module.scss";

const cx = classnames.bind(style);

const Button = ({ children, to, href, onClick }) => {
  let Comp = "button";
  const classes = cx("wrapper");

  const props = {
    onClick,
  };

  return (
    <Comp className={classes}>
      <span>{children}</span>
    </Comp>
  );
};

export default Button;
