import classNames from "classnames/bind";
import CategoryItem from "../CategoryItem/CategoryItem";
import styles from "./HomeCategories.module.scss";
import categories from "~/constant/category";
import { Grid } from "@mui/material";
const cx = classNames.bind(styles);

function Homecategories() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <Grid container spacing={2} columns={10}>
          {categories.map((v, i) => {
            return (
              <Grid xs={10} md={2} sm={5} item>
                {" "}
                <CategoryItem data={v} key={i} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Homecategories;
