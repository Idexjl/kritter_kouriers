import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import UnreliableTransporters from "./components/common/unreliable/UnreliableTransporters";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/common/header/Header";
import ComponentWrapper from "./components/componentWrapper/ComponentWrapper";
import SuccessfulTransports from "./components/common/successful/SuccessfulTransports";

import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Routes>
          <Route
            path="*"
            element={
              <ComponentWrapper>
                <PageNotFound />
              </ComponentWrapper>
            }
          />
          <Route
            exact
            path="/"
            element={
              <ComponentWrapper>
                <HomePage />
              </ComponentWrapper>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <ComponentWrapper>
                <AboutPage />
              </ComponentWrapper>
            }
          />
          <Route
            exact
            path="/unreliable"
            element={
              <ComponentWrapper>
                <UnreliableTransporters />
              </ComponentWrapper>
            }
          />
          <Route
            exact
            path="/complete"
            element={
              <ComponentWrapper>
                <SuccessfulTransports total={0} />
              </ComponentWrapper>
            }
          />
        </Routes>
      </main>
    </>
  );
}
