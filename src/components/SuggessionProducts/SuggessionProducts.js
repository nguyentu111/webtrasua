import styles from "./SuggessionProducts.module.scss";
import classNames from "classnames/bind";
import ProductCard from "~/components/ProductCard/ProductCard";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import bavarageApi from "~/services/bavarageApi";
import routes from "~/config/routes";
import categories from "~/constant/category";
const cx = classNames.bind(styles);
function SuggessionProducts() {
  const [suggesBavarage, setSuggesBavarage] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    const fetchAPI = async () => {
      setLoading(true);
      const result = await bavarageApi.getSugges();
      setSuggesBavarage(result);
      setLoading(false);
    };
    fetchAPI();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <span className={cx("title")}>Sản Phẩm Nổi Bật</span>
      <span className={cx("sub_title")}>
        Trải qua hơn 50 năm chắt chiu tinh hoa từ những búp trà xanh và hạt cà
        phê thượng hạng cùng mong muốn mang lại cho khách hàng những trải nghiệm
        giá trị nhất khi thưởng thức.
      </span>
      <Grid spacing={2} container justifyContent="space-around" columns={10}>
        {suggesBavarage.map((v, i) => {
          return (
            <Grid item xs={10} md={2} sm={5} key={i}>
              <ProductCard data={v} key={v.id} />
            </Grid>
          );
        })}
      </Grid>
      <Link to={`${routes.products}/${categories[0].link}`}>
        <span className={cx("goto_products")}>Xem thêm</span>
      </Link>
    </div>
  );
}

export default SuggessionProducts;
