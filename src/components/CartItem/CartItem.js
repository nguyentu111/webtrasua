import images from "~/assets/images/bavarage";
import classNames from "classnames/bind";
import styles from "./CartItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import QuantityBtns from "../QuantityBtns/QuantityBtns";
import { useState, useEffect } from "react";
import BookBavarage from "../Modal/BookBavarage/BookBavarage";
import { useCart, useDispatchCart } from "~/context/cartContext";
import axios from "axios";
const cx = classNames.bind(styles);

function CartItem(props) {
  // const item = useCart()?.find((item) => item.id === props.item.id);
  const dispatch = useDispatchCart();

  const [quantity, setQuantity] = useState();
  const [openModel, setOpenModel] = useState(false);
  // console.log(item);
  // const [fix, setFix] = useState(false);
  let toppingDes = props.item.toppings.reduce((acc, curr) => {
    return acc + curr.tp.name + ", ";
  }, "");
  const [data, setData] = useState();
  useEffect(() => {
    setQuantity(props.item.qty);
    axios
      .get(
        "https://backendwebtrasualaravel-production-6fb6.up.railway.app/api/drinks",
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      )
      .then((result) => {
        const getData = result.data.data.find((i) => {
          return i.id == props.item.id;
        });
        return setData(getData);
      })
      .catch((e) => {});
  }, []);
  return (
    <>
      <div className={cx("wapper")}>
        <div className={cx("img-wrapper")}>
          <img src={data?.imageSource} alt="" className={cx("img")} />
        </div>
        <div className={cx("info")}>
          <div className={cx("name")}>{data?.name}</div>
          <div className={cx("options")}>Kích cỡ: {props.item.size.name}</div>
          <div className={cx("options")}>
            Topping: {toppingDes.slice(0, -2) || "Không"}
          </div>
          <div className={cx("bot")}>
            <div className={cx("price")}>{props.item.price} ₫</div>
            {/*  */}
            <QuantityBtns
              id={props.item.idcart}
              value={quantity}
              setValue={setQuantity}
              setItems={props.setItems}
            />
          </div>
        </div>
        <div className={cx("actions")}>
          <button
            className={cx("edit")}
            onClick={() => {
              setOpenModel(true);
              // setFix(true);
            }}
          >
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button
            className={cx("delete")}
            onClick={() => dispatch({ type: "DEL", item: props.item })}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>

      {data && (
        <BookBavarage
          data={data}
          // id={item.id}
          openModel={openModel}
          setOpenModel={setOpenModel}
          isFix={true}
          // setFix={setFix}
          itemFix={props.item}
          setValue={setQuantity}
          setItems={props.setItems}
        />
      )}
    </>
  );
}

export default CartItem;
