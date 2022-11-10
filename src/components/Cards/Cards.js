import { Button, Card } from 'flowbite-react';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const Cards = ({ service }) => {
  const { name, description, image, price, _id } = service;

  return (
    <div className="lg:w-2/4 mx-auto mt-5">
      <Card>
        <div className='grid lg:grid-cols-2 gap-4'>
          <div>
            <PhotoProvider>
              <PhotoView src={image}>
                <img src={image} alt="" />
              </PhotoView>
            </PhotoProvider>
          </div>

          <div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-4">
              Price: {price}
            </h4>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {description.slice(0, 100)}...
            </p>
            <Link to={`/services/${_id}`}><Button className='mx-auto mt-3 text-end'>See Details</Button></Link>
          </div>
        </div>

      </Card>
    </div >
  );
};

export default Cards;