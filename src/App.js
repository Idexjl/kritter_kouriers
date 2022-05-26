import "./App.css";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";

export default function App() {
  return (
    <ScopedCssBaseline enableColorScheme>
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </ScopedCssBaseline>
  );
}
