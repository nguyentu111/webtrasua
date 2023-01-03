import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cart from "~/components/Cart/Cart";
import BookBavarage from "~/components/Modal/BookBavarage/BookBavarage";
import styles from "./ProductDetail.module.scss";
const cx = classNames.bind(styles);
function ProductDetail() {
  const [openModel, setOpenModel] = useState(false);
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://backendwebtrasualaravel-production-6fb6.up.railway.app/api/drinks",
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      )
      .then((result) => {
        const getData = result.data.data.find((i) => {
          return i.id == id;
        });

        return setData(getData);
      })
      .catch((e) => {});
  }, [id]);
  return (
    <>
      <div className={cx("wrapper")}>
        <span className={cx("link")}>
          <Link to="/">Trang chủ</Link> / Sản phẩm
        </span>
        <div className={cx("content")}>
          <div className={cx("img_wrapper")}>
            <img className={cx("image")} src={data?.imageSource} alt="" />
            <button className={cx("heart_icon")}>
              <FavoriteIcon />
            </button>
          </div>
          <div className={cx("right_content")}>
            <div className={cx("name")}>{data?.name}</div>
            <div className={cx("price")}>{data?.price}&nbsp;đ</div>
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
      {data && (
        <BookBavarage
          data={data}
          openModel={openModel}
          setOpenModel={setOpenModel}
        />
      )}
    </>
  );
}

export default ProductDetail;
