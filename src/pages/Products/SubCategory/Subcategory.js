import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Subcategory.module.scss";
const cx = classNames.bind(styles);
function Subcategory() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("items")}>
        <Link to="/signature">
          <div className={cx("item")}>Phúc long signature</div>
        </Link>
        <Link to="/signature">
          <div className={cx("item")}>Special tea</div>
        </Link>
        <Link to="/signature">
          <div className={cx("item")}>Cool blended beverage</div>
        </Link>
        <Link to="/signature">
          <div className={cx("item")}>Signature coffee</div>
        </Link>
        <Link to="/signature">
          <div className={cx("item")}>Fresh squeezed fruit juice</div>
        </Link>
      </div>
      <div className={cx("line")}></div>
    </div>
  );
}

export default Subcategory;
