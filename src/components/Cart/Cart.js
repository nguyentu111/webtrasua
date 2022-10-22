import {
  faArrowRight,
  faBagShopping,
  faCartPlus,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer } from "@mui/material";
import classNames from "classnames/bind";
import React, { useState } from "react";
import images from "~/assets/images/bavarage";
import CartItem from "../CartItem/CartItem";
import ModalCoupon from "../Modal/ModalCoupon/ModalCoupon";
import styles from "./Cart.module.scss";
const cx = classNames.bind(styles);
function Cart() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const anchor = "right";
  const handleClick = () => {
    console.log("click");
  };
  return (
    <>
      <div className={cx("wrapper")}>
        <button onClick={() => setOpen(true)} className={cx("btn-cart")}>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
        <Drawer anchor={anchor} open={open} onClose={() => setOpen(true)}>
          <div className={cx("content")}>
            <div className={cx("header")}>
              <span className={cx("bag-icon")}>
                <FontAwesomeIcon icon={faBagShopping} />
              </span>
              <span className={cx("title")}>Giỏ hàng của bạn (1 món)</span>
            </div>
            <div className={cx("body")}>
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
            <div className={cx("check-out")}>
              <div className={cx("summary-price")}>
                <div className={cx("total-money")}>
                  <span className={cx("label")}>Tổng tiền tạm tính</span>
                  <span className={cx("price")}> 310.000&nbsp;đ</span>
                </div>
                <div className={cx("total-money")}>
                  <span className={cx("label")}>Mã giảm giá</span>
                  <button onClick={() => setOpenModal(true)}>
                    <span className={cx("icon")}>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </button>
                </div>
                <div className={cx("total-money")}>
                  <span className={cx("label")}>Tổng tiền (Đã có VAT)</span>
                  <span className={cx("price-strong")}> 310.000&nbsp;đ</span>
                </div>
              </div>
              <button className={cx("check-out-btn")}>THANH TOÁN</button>
            </div>
          </div>
          <button
            className={cx("close")}
            onClick={() => {
              setOpen(false);
            }}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </Drawer>
      </div>
      <ModalCoupon openModel={openModal} setOpenModel={setOpenModal} />
    </>
  );
}

export default Cart;
