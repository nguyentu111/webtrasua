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
const cx = classNames.bind(styles);
function CartItem(props) {
  const [quantity, setQuantity] = useState();
  console.log("ql:"+quantity)
  const [openModel, setOpenModel] = useState(false);
  const [fix, setFix] = useState(false)
  const dispatch = useDispatchCart()
  const items = useCart()
  useEffect(() => {
    setQuantity(props.item.qty)
  }, [props.item.qty])
  console.log(props.item)
  return (
    <>
      <div className={cx("wapper")}>
        <div className={cx("img-wrapper")}>
          <img src={images.trasua} alt="" className={cx("img")} />
        </div>
        <div className={cx("info")}>
          <div className={cx("name")}>Trà đào phúc long</div>
          <div className={cx("options")}>
            Kích cỡ: {props.item.size}, Ngọt: {props.item.sugar[1]}, Trà: {props.item.tea[1]}, Đá: {props.item.ice[1]},
            Đào: {props.item.pea[1]}
          </div>
          <div className={cx("bot")}>
            <div className={cx("price")}>50.000 ₫</div>
            {/*  */}
            <QuantityBtns id={props.item.idcart} value={quantity} setValue={setQuantity} setItems={props.setItems} />
          </div>
        </div>
        <div className={cx("actions")}>
          <button className={cx("edit")} onClick={() => { setOpenModel(true); setFix(true)}}>
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button className={cx("delete")} onClick={() => dispatch({ type: 'DEL', item: props.item })}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
      <BookBavarage openModel={openModel} setOpenModel={setOpenModel} isFix={fix} setFix={setFix} itemFix={props.item} setValue={setQuantity} setItems={props.setItems} />
    </>
  );
}

export default CartItem;
