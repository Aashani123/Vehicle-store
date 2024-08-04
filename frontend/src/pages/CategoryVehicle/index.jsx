import React, { useEffect, useState } from "react";
import BackButton from "../../components/BackButton";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Card,Table} from "react-bootstrap";

const CategoryVehicle = () => {
  const [vehicle, setVehicle] = useState({ count: 0, data: [] });
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/vehicle/category/${category}`)
      .then((response) => {
        setVehicle(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);
  return (
    <div>
      <BackButton />
      <div>
        <br />
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <Card>
              <p>Category : {category}</p>

              <p>Count : {vehicle.count}</p>

             
                <Table bordered>
                  <thead>
                    <tr>
                     
                      <th>Owners</th>
                      <th>Salers</th>
                      <th>Prices</th>
                    </tr>
                  </thead>
                  <tbody>
                  {vehicle.data.map((v) => (
                    <tr key={v._id}>
                      <td>{v.owner}</td>
                      <td>{v.saler}</td>
                      <td>{v.price}</td>
                    </tr>
                    
                     ))}
                  </tbody>
               
                </Table>
             
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryVehicle;
