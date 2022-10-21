import classNames from "classnames/bind";
import CategoryItem from "../CategoryItem/CategoryItem";
import styles from "./HomeCategories.module.scss";
import images from "~/assets/images/category";
import categories from "~/constant/category";
const cx = classNames.bind(styles);

function Homecategories() {
  return (
    <div className={cx("wrapper")}>
      {categories.map((v, i) => {
        return <CategoryItem data={v} key={i} />;
      })}
    </div>
  );
}

export default Homecategories;
