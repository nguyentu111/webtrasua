import { Box, Modal } from "@mui/material";
import classNames from "classnames/bind";
import styles from "./BookBavarage.module.scss";
import images from "~/assets/images/bavarage";
import { useState } from "react";
import { faCartPlus, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart, useDispatchCart } from "~/context/cartContext";
import { GroundOverlay } from "@react-google-maps/api";

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
const css = {
  background: 'rgb(0, 111, 60)'
}
const css0 = {
  background: 'gray'
}
const css1 = {
  background: 'white'
}
const cx = classNames.bind(styles);

function BookBavarage({ openModel, setOpenModel, isFix, setFix, itemFix, setValue }) {
  const [quantity, setQuantity] = useState(1);
  const items = useCart()

  const [item, setItem] = useState({ 'idcart': 0, 'qty': 1, 'id': 'td', 'price': 55000, 'size': '', 'sugar': {}, 'tea': {}, 'ice': {}, 'pea': {} })

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
    if(type=='qty') return
    let colect = document.getElementsByClassName(cx(e.target.className))
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
    const clone = item
    clone['idcart'] = items.length
    dispatch({ type: 'ADD', item: clone })
    setOpenModel(false)
    setQuantity(1)
  }

  const addToCart1 = () => {
    const clone = item
    clone['idcart'] = itemFix.idcart
    dispatch({ type: 'FIX', item: clone })
    setValue(clone.qty)
    setOpenModel(false)
  }

  if (isFix) {
    return (<div onClick={(e) => e.preventDefault()}>
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
                    <button className={cx("quantity-decrease-btn")} onClick={(e) => {setQuantity(quantity - 1); handleClick('qty', quantity - 1, e) }}>-</button>
                    <span className={cx("quantity-value")}>{quantity}</span>
                    <button className={cx("quantity-increase-btn")} onClick={(e) => { setQuantity(quantity + 1); handleClick('qty', quantity + 1, e) }}>+</button>
                  </div>
                </div>
                <div className={cx("options")}>
                  <div className={cx("option-title")}>Chọn kích cỡ</div>
                  <div className={cx("size-options")}>
                    <button onClick={(e) => handleClickSize('size', 'S', e)} className={cx("size-options-btn")}>
                      <div className={cx("size-option-top")}>S</div>
                      <div style={itemFix['size'] == 'S' ? css : css} className={cx("size-option-bot", "active")}>
                        0 &nbsp;đ
                      </div>
                    </button>
                    <button onClick={(e) => handleClickSize('size', 'M', e)} className={cx("size-options-btn")}>
                      <div className={cx("size-option-top")}>M</div>
                      <div style={itemFix['size'] == 'M' ? css : css0} className={cx("size-option-bot")}>+5000 &nbsp;đ</div>
                    </button>
                    <button onClick={(e) => handleClickSize('size', 'L', e)} className={cx("size-options-btn")}>
                      <div className={cx("size-option-top")}>L</div>
                      <div style={itemFix['size'] == 'L' ? css : css0} className={cx("size-option-bot")}>
                        +15000 &nbsp;đ
                      </div>
                    </button>
                  </div>
                  <div className={cx("option-title")}>Ngọt</div>
                  <div className={cx("options-btn")}>
                    <button style={itemFix['sugar'][0] == 's0' ? css : css1} onClick={(e) => handleClick('sugar', ['s0', 'Ít'], e)} className={cx("option-btn", "sugar")}>Ít</button>
                    <button style={itemFix['sugar'][0] == 's1' ? css : css1} onClick={(e) => handleClick('sugar', ['s1', 'Bình thường'], e)} className={cx("option-btn", "sugar")}>Bình thường</button>
                    <button style={itemFix['sugar'][0] == 's2' ? css : css1} onClick={(e) => handleClick('sugar', ['s2', 'Nhiều'], e)} className={cx("option-btn", "sugar")}>Nhiều</button>
                  </div>
                  <div className={cx("option-title")}>Trà</div>
                  <div className={cx("options-btn")}>
                    <button style={itemFix['tea'][0] == 't0' ? css : css1} onClick={(e) => handleClick('tea', ['t0', 'Ít'], e)} className={cx("option-btn", "tea")}>Ít</button>
                    <button style={itemFix['tea'][0] == 't1' ? css : css1} onClick={(e) => handleClick('tea', ['t1', 'Bình thường'], e)} className={cx("option-btn", "tea")}>Bình thường</button>
                    <button style={itemFix['tea'][0] == 't2' ? css : css1} onClick={(e) => handleClick('tea', ['t2', 'Nhiều'], e)} className={cx("option-btn", "tea")}>Nhiều</button>
                  </div>
                  <div className={cx("option-title")}>Đá</div>
                  <div className={cx("options-btn")}>
                    <button style={itemFix['ice'][0] == 'i0' ? css : css1} onClick={(e) => handleClick('ice', ['i0', 'Ít'], e)} className={cx("option-btn", "ice")}>Ít</button>
                    <button style={itemFix['ice'][0] == 'i1' ? css : css1} onClick={(e) => handleClick('ice', ['i1', 'Bình thường'], e)} className={cx("option-btn", "ice")}>Bình thường</button>
                    <button style={itemFix['ice'][0] == 'i2' ? css : css1} onClick={(e) => handleClick('ice', ['i2', 'Nhiều'], e)} className={cx("option-btn", "ice")}>Nhiều</button>
                  </div>
                  <div className={cx("option-title")}>Đào</div>
                  <div className={cx("options-btn")}>
                    <button style={itemFix['pea'][0] == 'p0' ? css : css1} onClick={(e) => handleClick('pea', ['p0', 'Bình thường'], e)} className={cx("option-btn", "pea")}>Bình thường</button>
                    <button style={itemFix['pea'][0] == 'p1' ? css : css1} onClick={(e) => handleClick('pea', ['p1', 'Không'], e)} className={cx("option-btn", "pea")}>Không</button>
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
            <button onClick={() => addToCart1()} className={cx("add-to-cart")}>
              <FontAwesomeIcon icon={faCartPlus} />
              <span style={{ marginLeft: "10px" }}>
                Thêm vào giỏ hàng : 55.000 &nbsp;đ
              </span>
            </button>


          </div>

        </Box>
      </Modal>
    </div>)
  }
  else {
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
                      <button onClick={(e) => handleClick('sugar', ['s0', 'Ít'], e)} className={cx("option-btn", "sugar")}>Ít</button>
                      <button onClick={(e) => handleClick('sugar', ['s1', 'Bình thường'], e)} className={cx("option-btn", "sugar")}>Bình thường</button>
                      <button onClick={(e) => handleClick('sugar', ['s2', 'Nhiều'], e)} className={cx("option-btn", "sugar")}>Nhiều</button>
                    </div>
                    <div className={cx("option-title")}>Trà</div>
                    <div className={cx("options-btn")}>
                      <button onClick={(e) => handleClick('tea', ['t0', 'Ít'], e)} className={cx("option-btn", "tea")}>Ít</button>
                      <button onClick={(e) => handleClick('tea', ['t1', 'Bình thường'], e)} className={cx("option-btn", "tea")}>Bình thường</button>
                      <button onClick={(e) => handleClick('tea', ['t2', 'Nhiều'], e)} className={cx("option-btn", "tea")}>Nhiều</button>
                    </div>
                    <div className={cx("option-title")}>Đá</div>
                    <div className={cx("options-btn")}>
                      <button onClick={(e) => handleClick('ice', ['i0', 'Ít'], e)} className={cx("option-btn", "ice")}>Ít</button>
                      <button onClick={(e) => handleClick('ice', ['i1', 'Bình thường'], e)} className={cx("option-btn", "ice")}>Bình thường</button>
                      <button onClick={(e) => handleClick('ice', ['i2', 'Nhiều'], e)} className={cx("option-btn", "ice")}>Nhiều</button>
                    </div>
                    <div className={cx("option-title")}>Đào</div>
                    <div className={cx("options-btn")}>
                      <button onClick={(e) => handleClick('pea', ['p0', 'Bình thường'], e)} className={cx("option-btn", "pea")}>Bình thường</button>
                      <button onClick={(e) => handleClick('pea', ['p1', 'Không'], e)} className={cx("option-btn", "pea")}>Không</button>
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
}

export default BookBavarage;
