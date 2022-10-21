import styles from "./ProductCard.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import BookBavarage from "../Modal/BookBavarage/BookBavarage";
const cx = classNames.bind(styles);

function ProductCard({ data }) {
  const [openModel, setOpenModel] = useState(false);
  const handleClickBtn = (e) => {
    e.preventDefault();
    setOpenModel(true);
  };
  return (
    <>
      <Link to={`products/${data.id}`}>
        <Grid item>
          <div className={cx("wrapper")}>
            <div className={cx("image-wrapper")}>
              <img src={data.image} alt="" className={cx("image")} />
            </div>
            <div className={cx("content")}>
              <span className={cx("name")}>{data.name}</span>
              <span className={cx("price")}>{data.price}&nbsp;đ</span>
              <button className={cx("button")} onClick={handleClickBtn}>
                <FontAwesomeIcon icon={faCartPlus} />
                <span style={{ marginLeft: "10px" }}>Đặt mua</span>
              </button>
            </div>
          </div>
        </Grid>
      </Link>
      <BookBavarage openModel={openModel} setOpenModel={setOpenModel} />
    </>
  );
}

export default ProductCard;
