import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "~/routes/routes";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import ScrollToTop from "./layouts/components/ScrollToTop/ScrollToTop";
function App() {
  return (
    <>
      <Routes>
        {publicRoutes.map((route, i) => {
          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          const Page = route.component;
          return (
            <Route
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
              key={i}
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
