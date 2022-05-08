import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home/Home";
import MyInventorys from "./components/Home/MyInventorys/MyInventorys";
import AddInventory from "./components/Home/AddInventory/AddInventory";
import InventoryDetail from "./components/InventoryDetail/InventoryDetail";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Login/Register";
import RequierAuth from "./components/Login/RequierAuth/RequireAuth";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import Answer from "./components/Home/Answer/Answer";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/inventory/:inventoryId"
          element={
            <RequierAuth>
              <InventoryDetail />
            </RequierAuth>
          }
        ></Route>
        <Route
          path="/manageinventory"
          element={
            <RequierAuth>
              <ManageInventory />
            </RequierAuth>
          }
        />
        <Route
          path="/myinventorys"
          element={
            <RequierAuth>
              <MyInventorys />
            </RequierAuth>
          }
        />
        <Route
          path="/addinventory"
          element={
            <RequierAuth>
              <AddInventory />
            </RequierAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Answer />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
