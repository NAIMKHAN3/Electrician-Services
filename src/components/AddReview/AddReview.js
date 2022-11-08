import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const AddReview = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { name } = service.data;
    console.log(name)

    return (
        <form className="flex flex-col gap-4 lg:w-2/4 mx-auto border-solid border-2 border-sky-500 p-16 my-10">
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
                    name='name'
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
                    name='image'
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
                    name='email'
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
                        value="Your message"
                    />
                </div>
                <Textarea
                    id="comment"
                    placeholder="Leave a comment..."
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