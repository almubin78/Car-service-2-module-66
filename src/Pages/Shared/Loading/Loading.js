import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    //Loading 62.8
    return (
        <div>
            <div style={{height:'300px'}} className='w-100 d-flex justify-content-center align-items-center'>
            <Spinner animation="border" variant="success" />
            </div>
        </div>
    );
};

export default Loading;