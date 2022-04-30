import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home/Home";
import Header from "./components/Shared/Header/Header"
import Footer from "./components/Shared/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
