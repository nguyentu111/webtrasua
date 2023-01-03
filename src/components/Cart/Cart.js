import {
  faArrowRight,
  faBagShopping,
  faCartPlus,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ClickAwayListener, Drawer } from "@mui/material";
import classNames from "classnames/bind";
import React, { useState, useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import ModalCoupon from "../Modal/ModalCoupon/ModalCoupon";
import styles from "./Cart.module.scss";
import { ArrowRight } from "~/assets/Icons";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector } from "react-redux";
import { useCart, useDispatchCart } from "~/context/cartContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import ChooseShippingAddress from "../Modal/ChooseShippingAddress/ChooseShippingAddress";
import ModalSignin from "../Modal/ModalSignin/ModalSignin";
const cx = classNames.bind(styles);
function Cart() {
  const currentUser = useSelector((state) => state.user.current);
  console.log({ currentUser });

  const [open, setOpen] = useState(false);
  const [openAddressModel, setOpenAddressModel] = useState(false);
  const [openModelSignin, setOpenModelSignin] = useState(false);
  const [addressChoosed, setAddressChoosed] = useState(
    currentUser?.information?.addresses[0]?.id
  );
  const [openModalCoupon, setOpenModalCoupon] = useState(false);
  const anchor = "right";
  const items = useCart();
  const dispatch = useDispatchCart();
  const [it, setItems] = useState(items.length);
  const [a, setA] = useState(0);
  useEffect(() => {
    setA((prev) => prev + 1);
  }, [open]);

  const sum = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.qty,
    0
  );

  const pay = () => {
    if (!currentUser?.information) {
      setOpenModelSignin(true);
      return;
    }
    setOpenAddressModel(true);
  };
  const handleConfirmBooking = () => {
    const clone = [...items];
    const filteredArr = clone.reduce((acc, current) => {
      const x = acc.find((item) => item.size.id === current.size.id);
      if (!x) {
        const newCurr = {
          ...current,
          qty: current.qty,
          toppings: [],
        };
        for (let i = 0; i < current.qty; i++) {
          newCurr.toppings.push(current.toppings);
        }
        return acc.concat([newCurr]);
      } else {
        const currData = x.toppings.filter((d) => d == current.toppings);

        if (!currData.length) {
          for (let i = 0; i < current.qty; i++) {
            x.toppings.push(current.toppings);
          }

          x.qty += current.qty;
          return acc;
        } else {
          return acc;
        }
      }
    }, []);

    const arr = [];
    filteredArr.forEach((element) => {
      const temp_Tp = element.toppings.filter((i) => {
        return i.length != 0;
      });
      element.toppings.forEach((i, idx) => {
        if (i.length != 0) temp_Tp[idx] = i;
      });
      temp_Tp.forEach((i, idx) => {
        if (i.length != 0) temp_Tp[idx] = i;
      });

      for (let e of temp_Tp.keys()) {
        temp_Tp[e] = {
          quan: 1,
          topping: temp_Tp[e].map((tp) => {
            return { topping_id: tp.tp.id };
          }),
        };
      }

      arr.push({
        ...element,
        drink_detail_id: element.size.id,
        topping_list: temp_Tp,
        quantity: element.qty,
      });
    });

    const re = [];
    arr.forEach((element) => {
      const { idcart, size, id, toppings, qty, ...res } = element;
      re.push(res);
    });
    const post_Order = {
      staff_id: null,
      branch_id: 1,
      shipping_id: 1,
      customer_id: +currentUser.information.id,
      address_id: +addressChoosed,
      note: null,
      created_at: Date.now(),
      paid: 0,
      order_detail: re,
    };
    console.log({ post_Order });
    var config = {
      method: "post",
      url: "https://backendwebtrasualaravel-production-6fb6.up.railway.app/api/admin/orders",
      headers: {
        Authorization: "Bearer " + currentUser.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(post_Order),
    };

    // axios(config)
    //   .then(function (response) {
    //     console.log(response.data);
    //     if (response.data.status === "success") {
    //       toast.success("Order thành công");
    //       setOpenAddressModel(false);
    //     } else toast.error("Order thất bại, hãy thử lại sau");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  return (
    <div className={cx("wrapper")}>
      <Toaster position="bottom-left" />
      <button
        onClick={() => setOpen(true)}
        className={cx("btn-cart")}
        data-count={sum}
      >
        <AddShoppingCartIcon />
      </button>

      <Drawer anchor={anchor} open={open} onClose={() => setOpen(false)}>
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
              {items.map((i) => {
                return <CartItem item={i} setItems={setItems} key={i.idcart} />;
              })}
            </div>
            <div className={cx("check-out")}>
              <div className={cx("summary-price")}>
                <div className={cx("total-money")}>
                  <span className={cx("label")}>Tổng tiền tạm tính</span>
                  <span className={cx("price")}>
                    {" "}
                    {items.reduce(
                      (accumulator, currentValue) =>
                        accumulator + currentValue.price * currentValue.qty,
                      0
                    )}
                    &nbsp;đ
                  </span>
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
                  <span className={cx("price-strong")}>
                    {items.reduce(
                      (accumulator, currentValue) =>
                        accumulator + currentValue.price * currentValue.qty,
                      0
                    )}{" "}
                    &nbsp;đ
                  </span>
                </div>
              </div>
              <button onClick={() => pay()} className={cx("check-out-btn")}>
                THANH TOÁN
              </button>
            </div>
            <ModalCoupon
              openModel={openModalCoupon}
              setOpenModel={setOpenModalCoupon}
            />
            <ChooseShippingAddress
              openModel={openAddressModel}
              setOpenModel={setOpenAddressModel}
              handleConfirm={handleConfirmBooking}
              setAddressChoosed={setAddressChoosed}
            />
            <ModalSignin
              openModel={openModelSignin}
              setOpenModel={setOpenModelSignin}
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
