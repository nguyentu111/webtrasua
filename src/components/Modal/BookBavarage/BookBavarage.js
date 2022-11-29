import { Box, Modal } from "@mui/material";
import classNames from "classnames/bind";
import styles from "./BookBavarage.module.scss";
import images from "~/assets/images/bavarage";
import { useState } from "react";
import { faCartPlus, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatchCart } from "~/context/cartContext";

const styleModal = {
  backgroundColor: "#fff",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};
const cx = classNames.bind(styles);

function BookBavarage({ openModel, setOpenModel }) {
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState({ 'qty': 1, 'id': 'td', 'size': '', 'sugar': '', 'tea': '', 'ice': '', 'pea': '' })

  const handleClickSize = (type, value, e) => {
    const clone = item
    clone[`${type}`] = value
    setItem(clone)
    let colect = document.getElementsByClassName(cx(e.target.parentElement.className))
    for (let i = 0; i < colect.length; i++) {
      if (colect[i] === e.target.parentElement) colect[i].lastChild.style.background = "rgb(0, 111, 60)"
      else colect[i].lastChild.style.background = "gray"
    }
  }
  const handleClick = (type, value, e) => {
    const clone = item
    clone[`${type}`] = value
    setItem(clone)
    let colect = document.getElementsByClassName(cx(e.target.className))
    console.log(colect)
    for (let i = 0; i < colect.length; i++) {
      if (colect[i] === e.target) {
        colect[i].style.background = "rgb(0, 111, 60)"
        colect[i].style.color = "white"
      }
      else {
        colect[i].style.background = "white"
        colect[i].style.color = "black"
      }
    }
  }
  const dispatch = useDispatchCart()
  const addToCart = () => {
    dispatch({ type: 'ADD', item })
    console.log()
  }


  return (
    <div onClick={(e) => e.preventDefault()}>
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
                    <button className={cx("quantity-decrease-btn")} onClick={() => { setQuantity(quantity - 1); handleClick('qty', quantity - 1) }}>-</button>
                    <span className={cx("quantity-value")}>{quantity}</span>
                    <button className={cx("quantity-increase-btn")} onClick={() => { setQuantity(quantity + 1); handleClick('qty', quantity + 1) }}>+</button>
                  </div>
                </div>
                <div className={cx("options")}>
                  <div className={cx("option-title")}>Chọn kích cỡ</div>
                  <div className={cx("size-options")}>
                    <button onClick={(e) => handleClickSize('size', 'S', e)} className={cx("size-options-btn")}>
                      <div className={cx("size-option-top")}>S</div>
                      <div className={cx("size-option-bot", "active")}>
                        0 &nbsp;đ
                      </div>
                    </button>
                    <button onClick={(e) => handleClickSize('size', 'M', e)} className={cx("size-options-btn")}>
                      <div className={cx("size-option-top")}>M</div>
                      <div className={cx("size-option-bot")}>+5000 &nbsp;đ</div>
                    </button>
                    <button onClick={(e) => handleClickSize('size', 'L', e)} className={cx("size-options-btn")}>
                      <div className={cx("size-option-top")}>L</div>
                      <div className={cx("size-option-bot")}>
                        +15000 &nbsp;đ
                      </div>
                    </button>
                  </div>
                  <div className={cx("option-title")}>Ngọt</div>
                  <div className={cx("options-btn")}>
                    <button onClick={(e) => handleClick('sugar', 's0', e)} className={cx("option-btn", "sugar")}>Ít</button>
                    <button onClick={(e) => handleClick('sugar', 's1', e)} className={cx("option-btn", "sugar")}>Bình thường</button>
                    <button onClick={(e) => handleClick('sugar', 's2', e)} className={cx("option-btn", "sugar")}>Nhiều</button>
                  </div>
                  <div className={cx("option-title")}>Trà</div>
                  <div className={cx("options-btn")}>
                    <button onClick={(e) => handleClick('tea', 't0', e)} className={cx("option-btn", "tea")}>Ít</button>
                    <button onClick={(e) => handleClick('tea', 't1', e)} className={cx("option-btn", "tea")}>Bình thường</button>
                    <button onClick={(e) => handleClick('tea', 't2', e)} className={cx("option-btn", "tea")}>Nhiều</button>
                  </div>
                  <div className={cx("option-title")}>Đá</div>
                  <div className={cx("options-btn")}>
                    <button onClick={(e) => handleClick('ice', 'i0', e)} className={cx("option-btn", "ice")}>Ít</button>
                    <button onClick={(e) => handleClick('ice', 'i1', e)} className={cx("option-btn", "ice")}>Bình thường</button>
                    <button onClick={(e) => handleClick('ice', 'i2', e)} className={cx("option-btn", "ice")}>Nhiều</button>
                  </div>
                  <div className={cx("option-title")}>Đào</div>
                  <div className={cx("options-btn")}>
                    <button onClick={(e) => handleClick('pea', 'p0', e)} className={cx("option-btn", "pea")}>Bình thường</button>
                    <button onClick={(e) => handleClick('pea', 'p1', e)} className={cx("option-btn", "pea")}>Không</button>
                  </div>
                  <div className={cx("option-title")}>Chọn topping</div>
                  <div className={cx("topping")}>
                    <div className={cx("topping-left")}>
                      <div className={cx("topping-name")}>
                        Đào thêm (3 miếng)
                      </div>
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
            </div>
            <button onClick={() => addToCart()} className={cx("add-to-cart")}>
              <FontAwesomeIcon icon={faCartPlus} />
              <span style={{ marginLeft: "10px" }}>
                Thêm vào giỏ hàng : 55.000 &nbsp;đ
              </span>
            </button>


          </div>

        </Box>
      </Modal>
    </div>
  );
}

export default BookBavarage;
