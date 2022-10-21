import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoList from "~/assets/images/logo";
import Search from "../../../components/Search/Search";
// import Search from "/Search";
import styles from "./Header.module.scss";
import Message from "./Message/Message";
import ModalSignin from "./ModalSignin/ModalSignin";

const cx = classnames.bind(styles);

function Header() {
  const [openModel, setOpenModel] = useState(false);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("content_left")}>
          <Link to="/">
            <img className={cx("logo")} src={logoList.logo1} alt="logo1" />
          </Link>

          <Search />
        </div>
        <div className={cx("content_right")}>
          <div className={cx("delevery")}>
            <img
              src={logoList.deleveryLogo}
              alt="deleverylogo"
              className={cx("delevery_logo")}
            />
            <div className={cx("delevery_menu")}>
              <div className={cx("delevery_menu_top")}>Giao hàng</div>
              <div className={cx("delevery_menu_bottom")}>
                Ho Chi Minh City, Viet Nam
              </div>
            </div>
          </div>
          {/* //icon và menu mesage // */}
          <Message />
          {/*  */}
          <button className={cx("btn_user")} onClick={() => setOpenModel(true)}>
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>
      {/* modal */}
      <ModalSignin openModel={openModel} setOpenModel={setOpenModel} />
    </div>
  );
}

export default Header;
