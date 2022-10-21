import { Fragment } from "react";
import config from "~/config";
import Sidebar from "~/layouts/components/Sidebar";
import DefaultLayout from "~/layouts/DefaultLayout";
import SidebarLayout from "~/layouts/SidebarLayout/SidebarLayout";
import AdminPage from "~/pages/Admin/AdminPage";
import Home from "~/pages/Home/HomePage";
import Products from "~/pages/Products/Products";

const publicRoutes = [
  { path: config.routes.home, component: Home, layout: DefaultLayout },
  { path: config.routes.products, component: Products, layout: SidebarLayout },
  { path: config.routes.admin, component: AdminPage },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
