import { Table } from 'flowbite-react';
import React from 'react';

const MyReviewCard = ({ myAllReview }) => {
    const { userName, userEmail, _id, photo, review } = myAllReview
    return (
        <>
            {
                review ? <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        <img className="mb-3 w-12 rounded-full shadow-lg" src={photo} alt="" />
                    </Table.Cell>
                    <Table.Cell>
                        {userName}
                    </Table.Cell>
                    <Table.Cell>
                        {userEmail}
                    </Table.Cell>
                    <Table.Cell>
                        {review.slice(0, 30)}......
                    </Table.Cell>
                    <Table.Cell>
                        <a
                            href="/tables"
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                            Edit
                        </a>
                    </Table.Cell>
                </Table.Row> : "No reviews"
            }
        </>
    );
};

export default MyReviewCard;



