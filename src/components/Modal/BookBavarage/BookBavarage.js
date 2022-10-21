import { Box, keyframes, Modal } from "@mui/material";
import classNames from "classnames/bind";
import styles from "./BookBavarage.module.scss";
import images from "~/assets/images/bavarage";
import { useState } from "react";
import {
  faCartFlatbedSuitcase,
  faCartPlus,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const styleModal = {
  backgroundColor: "#fff",
  position: "absolute",
  top: "50%",
  left: "40%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  width: "328px",
  borderRadius: "10px",
};
const cx = classNames.bind(styles);

function BookBavarage({ openModel, setOpenModel }) {
  const [quantity, setQuantity] = useState(0);
  return (
    <Modal
      open={openModel}
      onClose={() => setOpenModel(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box style={styleModal} alignItems="center">
        <div className={cx("wapper")}>
          <button
            className={cx("modal-close")}
            onClick={() => setOpenModel(false)}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
          <div style={{ display: "flex" }}>
            <div className={cx("content-left")}>
              <img src={images.trasua} alt="" className={cx("image")} />
            </div>
            <div className={cx("content-right")}>
              <div className={cx("name")}>Trà đào phúc long</div>
              <div className={cx("sub_name")}>Trà đào phúc long</div>
              <div className={cx("price-quantity")}>
                <span className={cx("price")}>50.000&nbsp;đ</span>
                <div className={cx("quantity")}>
                  <button className={cx("quantity-decrease-btn")}>-</button>
                  <span className={cx("quantity-value")}>{quantity}</span>
                  <button className={cx("quantity-increase-btn")}>+</button>
                </div>
              </div>
              <div className={cx("option-title")}>Chọn kích cỡ</div>
              <div className={cx("size-options")}>
                <button className={cx("size-options-btn")}>
                  <div className={cx("size-option-top")}>S</div>
                  <div className={cx("size-option-bot", "active")}>
                    0 &nbsp;đ
                  </div>
                </button>
                <button className={cx("size-options-btn")}>
                  <div className={cx("size-option-top")}>M</div>
                  <div className={cx("size-option-bot")}>+5000 &nbsp;đ</div>
                </button>
                <button className={cx("size-options-btn")}>
                  <div className={cx("size-option-top")}>L</div>
                  <div className={cx("size-option-bot")}>+15000 &nbsp;đ</div>
                </button>
              </div>
              <div className={cx("option-title")}>Ngọt</div>
              <div className={cx("options-btn")}>
                <button className={cx("option-btn")}>Ít</button>
                <button className={cx("option-btn")}>Bình thường</button>
                <button className={cx("option-btn")}>Nhiều</button>
              </div>
              <div className={cx("option-title")}>Trà</div>
              <div className={cx("options-btn")}>
                <button className={cx("option-btn")}>Ít</button>
                <button className={cx("option-btn")}>Bình thường</button>
                <button className={cx("option-btn")}>Nhiều</button>
              </div>
              <div className={cx("option-title")}>Đá</div>
              <div className={cx("options-btn")}>
                <button className={cx("option-btn")}>Ít</button>
                <button className={cx("option-btn")}>Bình thường</button>
                <button className={cx("option-btn")}>Nhiều</button>
              </div>
              <div className={cx("option-title")}>Đào</div>
              <div className={cx("options-btn")}>
                <button className={cx("option-btn")}>Bình thường</button>
                <button className={cx("option-btn")}>Không</button>
              </div>
              <div className={cx("option-title")}>Chọn topping</div>
              <div className={cx("topping")}>
                <div className={cx("topping-left")}>
                  <div className={cx("topping-name")}>Đào thêm (3 miếng)</div>
                  <div className={cx("topping-price")}>15.000&nbsp;đ</div>
                </div>
                <div className={cx("topping-right")}>
                  <button className={cx("quantity-decrease-btn")}>-</button>
                  <span className={cx("quantity")}>
                    <span className={cx("quantity-value")}>{quantity}</span>
                  </span>
                  <button className={cx("quantity-increase-btn")}>+</button>
                </div>
              </div>
            </div>
          </div>
          <button className={cx("add-to-cart")}>
            <FontAwesomeIcon icon={faCartPlus} />
            <span style={{ marginLeft: "10px" }}>
              Thêm vào giỏ hàng : 55.000 &nbsp;đ
            </span>
          </button>
        </div>
      </Box>
    </Modal>
  );
}

export default BookBavarage;
