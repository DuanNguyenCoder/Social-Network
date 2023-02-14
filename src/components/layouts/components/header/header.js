import React, { useEffect, useState } from "react";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "../../../../components/poper/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./header.module.scss";
import classNames from "classnames/bind";
import Image from "../../../../assets/images/index";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import AccountItem from "../../../AccountItem";
import Button from "../../../../components/button/index";

const cx = classNames.bind(style);
const Header = () => {
  const [searchResult, setSearchResult] = useState([1, 2, 3]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult([1, 2, 3]);
  //   }, 2000);
  // }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={Image.logo} alt="tiktok" />
        </div>
        <Tippy
          interactive="true"
          visible={searchResult.length > 0}
          render={(attr) => (
            <div className={cx("search-result")} tabIndex="-1" {...attr}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <span className={cx("other-search")}>
                  Các kết quả tìm kiếm dành cho "X"
                </span>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              className={cx("search-input")}
              placeholder="Search any thing..."
              type="text"
              name=""
            />
            <button className={cx("loading")} type="">
              <FontAwesomeIcon icon={faSpinner} />
            </button>
            <button className={cx("clear")} type="">
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <span className={cx("span-between")} />
            <button className={cx("search-btn")} type="">
              <FontAwesomeIcon size="lg" icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("action")}>
          <Button>upload</Button>
          <Button>login</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
