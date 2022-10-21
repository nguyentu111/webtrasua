import styles from "./HomePage.module.scss";
import classNames from "classnames/bind";
import Banner from "./Components/Banner/Banner";
import Homecategories from "./Components/HomeCategories/HomeCategories";
import React, { Suspense } from "react";
import SuggessionProducts from "./Components/SuggessionProducts/SuggessionProducts";
const cx = classNames.bind(styles);

function HomePage() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("silde_show")}>
        <Banner />
      </div>
      <Homecategories />

      <SuggessionProducts />
    </div>
  );
}

export default HomePage;
