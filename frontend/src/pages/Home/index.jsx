import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./index.css";
import { useNavigate, Link } from "react-router-dom";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "../../components/Spinner";

const Home = () => {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/vehicle")
      .then((response) => {
        setVehicles(response.data);
        console.log(vehicles);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }, []);

  const handleAdd = () => {
    navigate("/vehicle/add");
  };

 

  return (
    <div>
      <button className="button-style" onClick={handleAdd}>
        +
      </button>

   
      {loading ? (
        <Spinner />
      ) : (
        <Table bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Category</th>
              <th>Owner</th>
              <th>Saler</th>
              <th>Price(Rs.)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle._id}>
                <td>
                  <img src={vehicle.image} width="40px" height="40px" />
                </td>
                <td>
                  <Link
                    to={`/vehicle/category/${vehicle.category}`}
                    className="link-content"
                  >
                    {vehicle.category}
                  </Link>
                </td>
                <td>{vehicle.owner}</td>
                <td>{vehicle.saler}</td>
                <td>{vehicle.price}</td>
                <td className="icon-style">
                  <Link to={`/vehicle/edit/${vehicle._id}`}>
                    <FontAwesomeIcon icon={faEdit} className="mt-2 me-2" />
                  </Link>
                  <Link to={`/vehicle/delete/${vehicle._id}`}>
                    <FontAwesomeIcon icon={faTrash} className="mt-2 me-2" />
                  </Link>
                  <Link to={`/vehicle/showOne/${vehicle._id}`}>
                    <FontAwesomeIcon icon={faEye} className="mt-2 me-2" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Home;
