import styles from "./Products.module.scss";
import classNames from "classnames/bind";
import Subcategory from "./SubCategory/Subcategory";
const cx = classNames.bind(styles);
function Product() {
  return (
    <div className={cx("wrapper")}>
      <Subcategory />
    </div>
  );
}

export default Product;
