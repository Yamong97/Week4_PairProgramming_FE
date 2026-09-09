import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/Registaration";
import Layout from "./components/Layout";
function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Hero /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={<Registration />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
