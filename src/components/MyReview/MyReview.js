import { Spinner, Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import MyReviewCard from '../MyReviewCard/MyReviewCard';
import { AuthContext } from '../UserContext/UserContext';
import useTitle from '../UseTitle';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    useTitle('My review')
    const [myAllReviews, setMyAllReviews] = useState([])
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false)

    const toast = () => {
        return Swal.fire(
            'Success!',
            'Delete successfully!',
            'success'
        )
    }


    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setMyAllReviews(data.data)
                setLoading(false)
            })
            .catch(e => console.log(e))
    }, [user, refresh])
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete Your Review');
        if (proceed) {
            fetch(`http://localhost:5000/deletereview/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast()
                    setRefresh(!refresh)
                })
                .catch(e => console.log(e))
        }

    }

    return (
        <>
            {
                loading && <div className="text-center">
                    <Spinner
                        aria-label="Extra large spinner example"
                        size="xl"
                    />
                </div>
            }
            <div className='lg:w-2/3 mx-auto'>
                {
                    myAllReviews?.length ?
                        <Table>
                            <Table.Head>
                                <Table.HeadCell>
                                    User Photo
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Service Name
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    User Name
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    User Email
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Review
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Edit
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Delete
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {
                                    myAllReviews.map(myAllReview => <MyReviewCard key={myAllReview._id} myAllReview={myAllReview} handleDelete={handleDelete}></MyReviewCard>)
                                }
                            </Table.Body>
                        </Table>
                        : !loading && <h1 className='text-3xl text-center font-bold'>No review Founds</h1>
                }

            </div>
        </>
    );
};

export default MyReview;

