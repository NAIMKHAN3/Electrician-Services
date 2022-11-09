import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddService = () => {
    const Navigate = useNavigate();

    const toast = () => {
        return Swal.fire(
            'Success!',
            'Your Service is added!',
            'success'
        )
    }
    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const description = form.description.value;
        const services = { name, image, price, description }
        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json)
            .then(data => {
                toast()
                Navigate('/services')
            })
            .catch(e => console.log(e))
        form.reset();

    }
    return (
        <form onSubmit={handleAddService} className="flex flex-col gap-4 lg:w-2/4 mx-auto border-solid border-2 border-sky-500 p-16 my-10">
            <h1 className='text-3xl font-bold text-center'> Add Service</h1>
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
                    placeholder="Name"
                    name='name'
                    required={true}
                    shadow={true}
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
                    required={true}
                    shadow={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email2"
                        value="Price"
                    />
                </div>
                <TextInput
                    id="email2"
                    type="number"
                    placeholder="price"
                    name='price'
                    required={true}
                    shadow={true}
                />
            </div>
            <div id="textarea">
                <div className="mb-2 block">
                    <Label
                        htmlFor="comment"
                        value="Add Description"
                    />
                </div>
                <Textarea
                    id="comment"
                    placeholder="Add Description"
                    name='description'
                    required={true}
                    rows={4}
                />
            </div>

            <Button className='my-5' type="submit">
                Add Service
            </Button>
        </form>
    );
};

export default AddService;