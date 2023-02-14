import React from "react";
import classNames from "classnames/bind";
import style from "./defaultLayout.module.scss";
import Header from "../components/header/header";
import Sidebar from "./sideBar/index";

const cx = classNames.bind(style);

const DefaultLayout = ({ children }) => {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
