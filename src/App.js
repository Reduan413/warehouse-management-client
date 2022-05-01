import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home/Home";
import Header from "./components/Shared/Header/Header"
import Footer from "./components/Shared/Footer/Footer"
import InventoryDetail from "./components/InventoryDetail/InventoryDetail";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Login/Register";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory/:id" element={<InventoryDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
