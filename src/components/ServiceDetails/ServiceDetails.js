import { Button, Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, } from 'react-router-dom';
import AllReview from '../AllReview/AllReview';
import DetailsOne from '../DetailsOne/DetailsOne';

const ServiceDetails = () => {
    const service = useLoaderData();
    const [reviewses, setReviewses] = useState([]);
    const [loading, setLoading] = useState(true)
    const { _id, name } = service.data;

    useEffect(() => {
        fetch(`http://localhost:5000/allreviews?name=${name}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setReviewses(data.data)
            })
            .catch(e => console.log(e))

    }, [name])


    return (
        <div>
            {
                loading && <div className="text-center">
                    <Spinner
                        aria-label="Extra large spinner example"
                        size="xl"
                    />
                </div>
            }
            <DetailsOne key={service._id} service={service}></DetailsOne>

            <Link to={`/addreview/${_id}`}>  <Button className='text-center mx-auto mt-10 '
                outline={true}
                gradientDuoTone="purpleToPink"
            >
                Add Review
            </Button></Link>

            <div>
                <h5 className="text-3xl font-bold text-center mt-5 leading-none text-gray-900 dark:text-white">
                    Latest Reviews
                </h5>
                <div className='grid lg:grid-cols-3 gap-4 lg:p-24'>

                    {
                        reviewses.map(reviews => <AllReview key={reviews._id} reviews={reviews}></AllReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;