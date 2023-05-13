import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import ThemeProvide from "./components/ThemeProvide.jsx";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Contact from "./pages/Contact.jsx";
import Explore from "./pages/Explore.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvide>
            <NavBar />
            <div className="main-layout">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/explore" element={<Explore />} />
              </Routes>
            </div>
            <Footer />
          </ThemeProvide>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
