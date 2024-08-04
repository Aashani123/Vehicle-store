import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs'; 
import './BackButton.css';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='d-flex'>
      <Link to={destination} className="backbutton-style">
        <BsArrowLeft />
      </Link>
    </div>
  );
};

export default BackButton;
