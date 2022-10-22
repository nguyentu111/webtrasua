import styles from "./Products.module.scss";
import classNames from "classnames/bind";
import { Route, Routes } from "react-router-dom";
import CategoryDes from "~/components/CategoryDes/CategoryDes";
import Subcategory from "~/components/SubCategory/Subcategory";
import Cart from "~/components/Cart/Cart";
const cx = classNames.bind(styles);
function Product() {
  return (
    <div className={cx("wrapper")}>
      <Subcategory />
      <Routes>
        <Route index element={<CategoryDes />}></Route>
      </Routes>
      <Cart />
    </div>
  );
}

export default Product;
