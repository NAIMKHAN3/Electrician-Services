import { Avatar, Button, Dropdown, Navbar, Tooltip } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from './image/logo.jpg'
import { AuthContext } from '../UserContext/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const Navigate = useNavigate();
    const toast = () => {
        return Swal.fire(
            'Success!',
            'Log Out success!',
            'success'
        )
    }
    const signOut = () => {
        logOut()
            .then(result => {
                toast()
                Navigate('/')
            })
            .catch(e => console.log(e))

    }
    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        className="mr-3 h-6 sm:h-9"
                        alt="my logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Electrician
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Link to='/home'>Home</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/blog'>Blog</Link>
                    {
                        user?.uid ? <>
                            <Link to='/reviews'>My-reviews</Link>
                            <Link to='/addservice'>Add-service</Link>
                            <button onClick={signOut} color="light border-none">Log Out</button>
                        </>
                            : <>
                                <Link to='/login'>Log-In</Link>
                                <Link to='/register'>Register</Link>
                            </>
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;