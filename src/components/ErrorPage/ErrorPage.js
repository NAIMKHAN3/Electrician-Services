import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-20'>
            <h1 className='text-bold text-red-600 text-6xl'>
                404
            </h1>
            <h1 className='text-2xl'>
                Error Page
            </h1>
            <h1 className='text-2xl'>
                Go to home Page <br /> <Link className='text-blue-600 text-2xl' to='/'>Home</Link>
            </h1>
        </div>
    );
};

export default ErrorPage;