import React, { useEffect, useState } from "react";
import axios from 'axios'
import './index.css';
import BackButton from "../../components/BackButton";
import Spinner from "../../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";

const EditVehicle = () => {
  const navigate=useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    category: "",
    owner: "",
    saler: "",
    price: "",
  });

  const {id} =useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/vehicle/${id}`)
      .then((response) => {
        setFormData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]); 

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from refreshing the page
      const data = {
        image:formData.image,
        category:formData.category,
        owner:formData.owner,
        saler:formData.saler,
        price:+formData.price
      }

      axios
      .put(`http://localhost:5555/vehicle/${id}`,data)
      .then(()=>{
        setLoading(false)
        navigate('/')
        console.log(data);
      })
      .catch((error)=>{
        console.log(error)
        alert(error)
      })
  };

  return (
    <>
    <BackButton/>
    <div className="form-full">
    {loading ? <Spinner/> : ''}
    <br />
      <form onSubmit={handleSubmit} className="form-style">
        <input
          type="text"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          
          placeholder="Enter Image Url"
        />
        <br />

        <input
          type="text"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          
          placeholder="Enter Category of Vehicle"
        />
        <br />

        <input
          type="text"
          value={formData.owner}
          onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
          
          placeholder="Enter Owner Name"
        />
        <br />
        <input
          type="text"
          value={formData.saler}
          onChange={(e) => setFormData({ ...formData, saler: e.target.value })}
          
          placeholder="Enter Saler Name"
        />
        <br />
        <input
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          
          placeholder="Enter Price"
        />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
    </>
  );
};

export default EditVehicle;
