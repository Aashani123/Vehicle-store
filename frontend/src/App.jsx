import { Table } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddVehicle from "./pages/AddVeicle/index";
import ShowOneVehicle from "./pages/ShowOneVehicle";
import EditVehicle from "./pages/EditVehicle";
import DeleteVehicle from "./pages/DeleteVehicle";
import CategoryVehicle from "./pages/CategoryVehicle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicle/add" element={<AddVehicle />} />
        <Route path="/vehicle/showOne/:id" element={<ShowOneVehicle />} />
        <Route path="/vehicle/edit/:id" element={<EditVehicle />} />
        <Route path="/vehicle/delete/:id" element={<DeleteVehicle />} />
        <Route path="/vehicle/category/:category" element={<CategoryVehicle />} />
      </Routes>
    </>
  );
}

export default App;
