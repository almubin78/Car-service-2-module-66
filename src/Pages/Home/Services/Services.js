import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './services.css'

const Services = () => {
    const [services, setServices] = useState([]);
/*     useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []) */
    //after mondodb server
    useEffect(() => {
        fetch('http://localhost:5000/zakhushi')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id='services' className='container'>
            <h3 className='text-center text-primary'>Our services: {services.length}</h3>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    >
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;