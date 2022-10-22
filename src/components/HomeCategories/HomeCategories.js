import classNames from "classnames/bind";
import CategoryItem from "../CategoryItem/CategoryItem";
import styles from "./HomeCategories.module.scss";
import categories from "~/constant/category";
const cx = classNames.bind(styles);

function Homecategories() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        {categories.map((v, i) => {
          return <CategoryItem data={v} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Homecategories;
