import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { Grid } from "@mui/material";
import CategoryItem from "~/pages/Home/Components/CategoryItem/CategoryItem";
import categories from "~/constant/category";
import { useParams } from "react-router-dom";
const cx = classNames.bind(styles);
function Sidebar() {
  let { category } = useParams();
  return (
    <div className={cx("wrapper")}>
      <Grid container>
        {categories.map((v, i) => {
          return (
            <Grid item xs={6} key={i}>
              <CategoryItem smallWidth data={v} key={i} active={category} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Sidebar;
