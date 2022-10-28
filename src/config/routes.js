const products = "/san-pham";
const routes = {
  home: "/",
  products: products,
  productChild: `${products}/:category/*`,
  productDetail: "/products/:id",
  admin: "/admin",
  customer: "/customer/*",
};
export default routes;
