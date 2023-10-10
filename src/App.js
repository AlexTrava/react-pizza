import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart/Cart";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="wrapper">
      <Header setSearchValue={setSearchValue} searchValue={searchValue} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
