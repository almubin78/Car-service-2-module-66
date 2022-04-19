import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='text-center mt-3 mb-5'>
            <h3><small>copyright@{year}</small></h3>
        </div>
    );
};

export default Footer;