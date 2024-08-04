import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton";
import Spinner from "../../components/Spinner";
import { Card } from "react-bootstrap";
import "./index.css";

const ShowOneVehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoding] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/vehicle/${id}`)
      .then((response) => {
        setVehicles(response.data);
        setLoding(false);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  });
  return (
    <div>
      <BackButton />
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="card-style">
            <Card className="cardsss-style">
              <div  className="div-style">
                <span>Image: </span>
                <span className="data-field">
                  <img src={vehicles.image} width="40px" height="40px" />
                </span>
              </div>
              <br />
              <div className="div-style">
                <span>Category: </span>
                <span className="data-field">{vehicles.category}</span>
              </div>
              <br />
              <div  className="div-style">
                <span>Owner: </span>
                <span className="data-field">{vehicles.owner}</span>
              </div>
              <br />

              <div  className="div-style">
                <span>saler: </span>
                <span className="data-field">{vehicles.saler}</span>
              </div>
              <br />
              <div  className="div-style">
                <span>Price: </span>
                <span className="data-field">
                  {
                    vehicles.price ? vehicles.price : 'No price'
                  }</span>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowOneVehicle;
