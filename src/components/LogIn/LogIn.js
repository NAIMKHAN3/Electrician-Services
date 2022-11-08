import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const LogIn = () => {
    const { signIn, signInGoogle, signInGithub } = useContext(AuthContext)
    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(result => {
                Navigate('/home')
                console.log(result.user)
            })
            .catch(e => console.log(e))

    }
    const handleGoogle = () => {
        signInGoogle()
            .then(result => { Navigate('/home') })
            .catch(e => console.log(e))
    }
    const handleGithub = () => {
        signInGithub()
            .then(resut => { Navigate('/home') })
            .catch(e => console.log(e))
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:w-2/4 mx-auto border-solid border-2 border-sky-500 p-16 my-10">
            <h1 className='text-3xl font-bold text-center'>Log In</h1>
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
                Log In
            </Button>
            <p className='text-center'>Are You new user? Please <Link className='text-blue-900 text-1xl font-bold' to='/register'>Register Now</Link></p>
            <hr />
            <div className='flex justify-center items-center'>
                <div className='mx-auto text-center'>
                    <h5 className='text-1xl font-bold'>Sign in Google</h5>
                    <Button onClick={handleGoogle} color="light border-none">

                        <FaGoogle className='text-3xl font-bold'></FaGoogle>

                    </Button>
                </div>
                <div className='mx-auto text-center'>
                    <h5 className='text-1xl font-bold'>Sign in GitHub</h5>
                    <Button onClick={handleGithub} color="light border-none">
                        <FaGithub className='text-3xl font-bold text-center'></FaGithub>
                    </Button>

                </div>
            </div>
        </form>
    );
};

export default LogIn;