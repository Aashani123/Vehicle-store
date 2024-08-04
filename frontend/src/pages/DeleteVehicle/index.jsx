import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import './index.css'

const DeleteVehicle = () => {

  const [loading,setLoading] =useState(false)
  const [show, setShow] = useState(false);
  const {id} = useParams();
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    setLoading(true)
    axios.delete(`http://localhost:5555/vehicle/${id}`)
    .then(()=>{
      setLoading(false)
      navigate('/')
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Delete Vehicle
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Suer, You want to delete the vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body className='model'>
        <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete} >
           Delete Vehicle
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default DeleteVehicle
