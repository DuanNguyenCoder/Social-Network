import React from "react";
import classNames from "classnames/bind";
import style from "./acountItem.module.scss";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(style);

const AccountItem = () => {
  return (
    <div className={cx("account-item")}>
      <img
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0ce6400e4cd9c83d1ed72365a05e7f6f~c5_100x100.jpeg?x-expires=1676548800&x-signature=C84wAR%2Bti1j%2FU0PB5gOH%2B3jpmtc%3D"
        alt=""
        className={cx("account-image")}
      />
      <div className={cx("container")}>
        <div>
          <span className={cx("account-name")}>nameAccount</span>
          <spn className={cx("account-icon")}>
            <FontAwesomeIcon icon={faCircleCheck} />
          </spn>
        </div>
        <p className={cx("account-description")}>description</p>
      </div>
    </div>
  );
};

export default AccountItem;
