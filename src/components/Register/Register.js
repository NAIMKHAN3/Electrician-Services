import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Register = () => {
    return (
        <form className="flex flex-col gap-4 lg:w-2/4 mx-auto border-solid border-2 border-sky-500 p-16 my-10">
            <h1 className='text-3xl font-bold text-center'> Register new account</h1>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email2"
                        value="Your Name"
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
                        value="Your email"
                    />
                </div>
                <TextInput
                    id="email2"
                    type="email"
                    placeholder="Email"
                    name='email'
                    required={true}
                    shadow={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password2"
                        value="Your password"
                    />
                </div>
                <TextInput
                    id="password2"
                    type="password"
                    placeholder='Password'
                    name='password'
                    required={true}
                    shadow={true}
                />
            </div>

            <Button className='my-5' type="submit">
                Register new account
            </Button>
            <hr />
            <div className='flex justify-center items-center'>
                <div className='mx-auto text-center'>
                    <h5 className='text-1xl font-bold'>Sign in Google</h5>
                    <Button color="light border-none">

                        <FaGoogle className='text-3xl font-bold'></FaGoogle>

                    </Button>
                </div>
                <div className='mx-auto text-center'>
                    <h5 className='text-1xl font-bold'>Sign in GitHub</h5>
                    <Button color="light border-none">
                        <FaGithub className='text-3xl font-bold text-center'></FaGithub>
                    </Button>

                </div>
            </div>
        </form>
    );
};

export default Register;