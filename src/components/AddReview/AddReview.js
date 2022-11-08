import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../UserContext/UserContext';

const AddReview = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { name } = service.data;

    const toast = () => {
        return Swal.fire(
            'Success!',
            'Your Review is added!',
            'success'
        )
    }

    const handleAddReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const photo = form.photo.value;
        const review = form.review.value;
        const date = new Date()
        const reviews = { serviceName, userName, userEmail, photo, review, date }
        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.data.acknowledged) {
                    toast()
                }
                else {
                    console.log('false')
                }

            })
            .catch(e => console.log(e))
        console.log(reviews)
    }

    return (
        <form onSubmit={handleAddReview} className="flex flex-col gap-4 lg:w-2/4 mx-auto border-solid border-2 border-sky-500 p-16 my-10">
            <h1 className='text-3xl font-bold text-center'> Add Review</h1>
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
                    defaultValue={name}
                    name='serviceName'
                    required={true}
                    shadow={true}
                    readOnly
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email2"
                        value="User Name"
                    />
                </div>
                <TextInput
                    id="email2"
                    type="text"
                    defaultValue={user?.displayName}
                    placeholder="Name"
                    name='userName'
                    required={true}
                    shadow={true}
                    readOnly
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email2"
                        value="Photo URL"
                    />
                </div>
                <TextInput
                    id="email2"
                    type="text"
                    placeholder="Photo"
                    name='photo'
                    defaultValue={user?.photoURL}
                    required={true}
                    shadow={true}
                    readOnly
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email2"
                        value="User email"
                    />
                </div>
                <TextInput
                    id="email2"
                    type="email"
                    placeholder="Email"
                    name='userEmail'
                    defaultValue={user?.email}
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
                    required={true}
                    rows={4}
                />
            </div>

            <Button className='my-5' type="submit">
                Add Review
            </Button>


        </form>
    );
};

export default AddReview;