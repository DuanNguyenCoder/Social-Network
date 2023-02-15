import React from "react";
import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import style from "./menu.module.scss";
import PopperWrapper from "../wraper";

const cx = classNames.bind(style);

const index = ({ children, item }) => {
  const renderItem = () => {
    return item.map((x, index) => (
      <button className={cx("option-btn")} key={index} type="">
        {x.icon} {x.title}
      </button>
    ));
  };

  return (
    <Tippy
      interactive="true"
      placement="bottom-end"
      render={(attr) => (
        <div className={cx("menu-items")} tabIndex="-1" {...attr}>
          <PopperWrapper>{renderItem()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};

export default index;
