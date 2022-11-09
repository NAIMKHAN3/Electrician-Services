import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { json, Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../UserContext/UserContext';
import useTitle from '../UseTitle';

const LogIn = () => {
    const { signIn, signInGoogle, signInGithub } = useContext(AuthContext)
    const Navigate = useNavigate();
    const [error, setError] = useState('')
    useTitle('Login')
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const toast = () => {
        return Swal.fire(
            'Success!',
            'Successfully log in!',
            'success'
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = { email: user?.email };
                fetch('https://assignment-11-server-naimkhan3.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token)
                    })
                    .catch(e => console.log(e))
                Navigate(from, { replace: true })
                toast();
            })
            .catch(e => {
                setError(e.message)
                console.log(e)
            })

    }
    const handleGoogle = () => {
        signInGoogle()
            .then(result => {
                const user = result.user;
                const currentUser = { email: user?.email };
                fetch('https://assignment-11-server-naimkhan3.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token)
                    })
                    .catch(e => console.log(e))
                Navigate(from, { replace: true })
                toast()
            })
            .catch(e => console.log(e))
    }
    const handleGithub = () => {
        signInGithub()
            .then(result => {
                const user = result.user;
                const currentUser = { email: user?.email };
                fetch('https://assignment-11-server-naimkhan3.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token)
                    })
                    .catch(e => console.log(e))
                Navigate(from, { replace: true })
                toast()
            })
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
            <p className='text-rose-600'>{error}</p>

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