import React from "react";
import classnames from "classnames/bind";
import style from "./button.module.scss";
import { Link } from "react-router-dom";
const cx = classnames.bind(style);

const Button = ({ primary, outline, children, to, href, onClick }) => {
  let Comp = "button";

  const classes = cx("wrapper", {
    primary,
    outline,
  });

  const props = {
    onClick,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  console.log(props);
  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  );
};

export default Button;
