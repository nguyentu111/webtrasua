import {
  faArrowRight,
  faBagShopping,
  faCartPlus,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ClickAwayListener, Drawer } from "@mui/material";
import classNames from "classnames/bind";
import React, { useState } from "react";
import CartItem from "../CartItem/CartItem";
import ModalCoupon from "../Modal/ModalCoupon/ModalCoupon";
import styles from "./Cart.module.scss";
import { ArrowRight } from "~/assets/Icons";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useCart } from "~/context/cartContext";
const cx = classNames.bind(styles);
function Cart() {
  const [open, setOpen] = useState(false);
  const [openModalCoupon, setOpenModalCoupon] = useState(false);
  const anchor = "right";

  const items = useCart()
  const [it, setItems] = useState(items.length)
  const sum = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.qty,
    0,
  );
  return (
    <div className={cx("wrapper")}>
      <button
        onClick={() => setOpen(true)}
        className={cx("btn-cart")}
        data-count={sum}
      >
        <AddShoppingCartIcon />
      </button>

      <Drawer
        anchor={anchor}
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{ hideBackdrop: true }}
      >
        <ClickAwayListener
          onClickAway={() => {
            setOpen(false);
          }}
        >
          <div className={cx("content")}>
            <div className={cx("header")}>
              <span className={cx("bag-icon")}>
                <FontAwesomeIcon icon={faBagShopping} />
              </span>
              <span className={cx("title")}>Giỏ hàng của bạn ({sum} món)</span>
            </div>
            <div className={cx("body")}>
              {
                items.map((i) => {
                  return <CartItem item={i} setItems={setItems}/>
                })
              }

            </div>
            <div className={cx("check-out")}>
              <div className={cx("summary-price")}>
                <div className={cx("total-money")}>
                  <span className={cx("label")}>Tổng tiền tạm tính</span>
                  <span className={cx("price")}> {items.reduce(
                    (accumulator, currentValue) => accumulator + currentValue.price*currentValue.qty,
                    0,
                  )}&nbsp;đ</span>
                </div>
                <div className={cx("total-money")}>
                  <span className={cx("label")}>Mã giảm giá</span>
                  <button onClick={() => setOpenModalCoupon(true)}>
                    <span className={cx("icon")}>
                      {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                      <ArrowRight width="1.2rem" height="1.2rem" />
                    </span>
                  </button>
                </div>
                <div className={cx("total-money")}>
                  <span className={cx("label")}>Tổng tiền (Đã có VAT)</span>
                  <span className={cx("price-strong")}>{items.reduce(
                    (accumulator, currentValue) => accumulator + currentValue.price*currentValue.qty,
                    0,
                  )} &nbsp;đ</span>
                </div>
              </div>
              <button className={cx("check-out-btn")}>THANH TOÁN</button>
            </div>
            <ModalCoupon
              openModel={openModalCoupon}
              setOpenModel={setOpenModalCoupon}
            />
          </div>
        </ClickAwayListener>

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
  );
}

export default Cart;
