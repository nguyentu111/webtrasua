import styles from "./ProductDetail.module.scss";
import classNames from "classnames/bind";
import { Link, Route, Routes } from "react-router-dom";
import CategoryDes from "~/components/CategoryDes/CategoryDes";
import Subcategory from "~/components/SubCategory/Subcategory";
import Cart from "~/components/Cart/Cart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Cart as CartIcon } from "~/assets/Icons/BodyIcon";
import images from "~/assets/images/bavarage";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookBavarage from "~/components/Modal/BookBavarage/BookBavarage";
import { useState } from "react";
const cx = classNames.bind(styles);
function ProductDetail() {
  const [openModel, setOpenModel] = useState(false);
  return (
    <>
      <div className={cx("wrapper")}>
        <span className={cx("link")}>
          <Link to="/">Trang chủ</Link> / Sản phẩm
        </span>
        <div className={cx("content")}>
          <div className={cx("img_wrapper")}>
            <img className={cx("image")} src={images.trasua} alt="" />
            <button className={cx("heart_icon")}>
              <FavoriteIcon />
            </button>
          </div>
          <div className={cx("right_content")}>
            <div className={cx("name")}>Trà Vải - Lài</div>
            <div className={cx("price")}>40.000&nbsp;đ</div>
            <button
              className={cx("btn")}
              onClick={() => {
                setOpenModel(true);
              }}
            >
              <AddShoppingCartIcon
                style={{ width: "1.2rem", marginRight: "10px" }}
              />
              Đặt mua
            </button>
          </div>
        </div>
        <Cart />
      </div>
      <BookBavarage openModel={openModel} setOpenModel={setOpenModel} />
    </>
  );
}

export default ProductDetail;
