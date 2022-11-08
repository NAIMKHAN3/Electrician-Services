import { Card } from 'flowbite-react';
import React from 'react';

const AllReview = ({ reviews }) => {
    const { userName, userEmail, photo, review } = reviews;
    return (




        <div className=" mx-auto mt-5 min-w-full">
            <Card className=' h-[300px]'>
                <div className="flex justify-end px-4 pt-4">

                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="mb-3 h-24 w-24 rounded-full shadow-lg" src={photo} alt="" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {userName}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {userEmail}
                    </span>
                    <p>{review.slice(0, 70)}.....</p>
                    <div className="mt-4 flex space-x-3 lg:mt-6">


                    </div>
                </div>
            </Card>
        </div>


    );
};

export default AllReview;