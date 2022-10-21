import styles from "./Products.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Product() {
  return <div className={cx("wrapper")}>product page</div>;
}

export default Product;
