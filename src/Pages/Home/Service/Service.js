import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './Service.css'
const Service = ({service}) => {
    const {_id,name, img, description, price} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <PageTitle title="Service"></PageTitle>
            <img className='w-100' src={img} alt="Pic pailona kere" />
            <h2>Service Type: {name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() =>navigateToServiceDetail(_id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;