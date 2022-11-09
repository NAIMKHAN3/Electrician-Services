import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../UseTitle';

const EditReview = () => {
    const reviewOne = useLoaderData();
    useTitle('Edit review')
    const Navigate = useNavigate();
    const date = new Date();
    const { serviceName, review, userEmail, userName, photo, _id } = reviewOne?.data;
    const toast = () => {
        return Swal.fire(
            'Success!',
            'Edit Review success',
            'success'
        )
    }

    console.log(reviewOne.data)
    const handleReviewEdit = (e) => {
        e.preventDefault();
        const newReview = e.target.review.value;
        const editReview = { serviceName, userName, userEmail, photo, review: newReview, date }

        fetch(`http://localhost:5000/editreview?id=${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    toast();
                    Navigate('/reviews')
                }
            })
            .catch(e => console.log(e))

    }
    return (
        <form onSubmit={handleReviewEdit} className="flex flex-col gap-4 lg:w-2/4 mx-auto border-solid border-2 border-sky-500 p-16 my-10">
            <h1 className='text-3xl font-bold text-center'>Review Edit</h1>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email2"
                        value="Service Name"
                    />
                </div>
                <TextInput
                    id="email2"
                    type="text"
                    defaultValue={serviceName}
                    name='serviceName'
                    required={true}
                    shadow={true}
                    readOnly
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password2"
                        value="Your Email"
                    />
                </div>
                <TextInput
                    id="password2"
                    type="text"
                    placeholder='Password'
                    name='email'
                    defaultValue={userEmail}
                    required={true}
                    shadow={true}
                    readOnly
                />
            </div>
            <div id="textarea">
                <div className="mb-2 block">
                    <Label
                        htmlFor="comment"
                        value="Your Review"
                    />
                </div>
                <Textarea
                    id="comment"
                    placeholder="Add Review..."
                    name='review'
                    defaultValue={review}
                    required={true}
                    rows={4}
                />
            </div>

            <Button className='my-5' type="submit">
                Log In
            </Button>


        </form>
    );
};

export default EditReview;