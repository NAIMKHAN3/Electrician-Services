import { Button } from 'flowbite-react';
import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import AllReview from '../AllReview/AllReview';
import DetailsOne from '../DetailsOne/DetailsOne';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id } = service.data;
    console.log(service)
    return (
        <div>
            <DetailsOne key={service._id} service={service}></DetailsOne>
            <Link to={`/addreview/${_id}`}> <Button service={service}>Add Review</Button></Link>
            <AllReview></AllReview>
        </div>
    );
};

export default ServiceDetails;