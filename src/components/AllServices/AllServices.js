import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllServices = ({ service }) => {
    const { name, image, price, description, _id } = service;
    return (
        <div className="mx-auto my-3 text-color-purple">

            <Card>
                <h5 className="text-3xl text-center my-4 font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img className='w-full h-80' src={image} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Price : {price}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {description.slice(0, 100)}....
                </p>
                <Link to={`/services/${_id}`}><Button>See Details</Button></Link>
            </Card>

        </div>
    );
};

export default AllServices;