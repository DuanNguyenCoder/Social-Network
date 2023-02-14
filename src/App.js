import { style } from "./components/globalStyle/globalStyle.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import { publicRoutes, privateRoutes } from "./routes";
import { DefaultLayout } from "./components/layouts/index";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {privateRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            const Page = route.component;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
