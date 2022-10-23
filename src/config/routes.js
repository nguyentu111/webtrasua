const products = "/san-pham";
const routes = {
  home: "/",
  products: products,
  productChild: `${products}/:category/*`,
  admin: "/admin",
  customer: "/customer/*",
};
export default routes;
