import images from "~/assets/images/bavarage";
import classNames from "classnames/bind";
import styles from "./CartItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import QuantityBtns from "../QuantityBtns/QuantityBtns";
import { useState } from "react";
import BookBavarage from "../Modal/BookBavarage/BookBavarage";
const cx = classNames.bind(styles);
function CartItem() {
  const [quantity, setQuantity] = useState(1);
  const [openModel, setOpenModel] = useState(false);
  return (
    <>
      <div className={cx("wapper")}>
        <div className={cx("img-wrapper")}>
          <img src={images.trasua} alt="" className={cx("img")} />
        </div>
        <div className={cx("info")}>
          <div className={cx("name")}>Trà đào phúc long</div>
          <div className={cx("options")}>
            Kích cỡ: M, Ngọt: Bình thường, Trà: Bình thường, Đá: Bình thường,
            Đào: Bình thường
          </div>
          <div className={cx("bot")}>
            <div className={cx("price")}>50.000 ₫</div>
            {/*  */}
            <QuantityBtns value={quantity} setValue={setQuantity} />
          </div>
        </div>
        <div className={cx("actions")}>
          <button className={cx("edit")} onClick={() => setOpenModel(true)}>
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button className={cx("delete")}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
      <BookBavarage openModel={openModel} setOpenModel={setOpenModel} />
    </>
  );
}

export default CartItem;
