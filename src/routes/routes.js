import { Navigate } from "react-router-dom";
import config from "~/config";
import DefaultLayout from "~/layouts/DefaultLayout";
import SidebarLayout from "~/layouts/SidebarLayout/SidebarLayout";
import AdminPage from "~/pages/Admin/AdminPage";
import Customer from "~/pages/Customer/Customer";
import Home from "~/pages/Home/HomePage";
import Products from "~/pages/Products/Products";

const publicRoutes = [
  { path: config.routes.home, component: Home, layout: DefaultLayout },
  {
    path: config.routes.productChild,
    component: Products,
    layout: SidebarLayout,
  },
  { path: config.routes.admin, component: AdminPage },
  { path: config.routes.customer, component: Customer },
  {
    path: "/*",
    component: () => <Navigate to={"/"} />,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
