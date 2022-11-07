import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import DetailsOne from '../DetailsOne/DetailsOne';

const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service)
    return (
        <div>
            <DetailsOne key={service._id} service={service}></DetailsOne>
            <Outlet></Outlet>
        </div>
    );
};

export default ServiceDetails;