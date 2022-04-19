import React from 'react';
import sleping from '../../../images/sleping.jpg'
const NotFound = () => {
    return (
        <div>
            <h3 className='text-primary text-center'>Mechanic is slepping</h3>
            <img className='w-100' src={sleping} alt="" />
        </div>
    );
};

export default NotFound;