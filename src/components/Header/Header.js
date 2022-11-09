import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
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
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img={user?.photoURL} rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {user?.displayName}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {user?.email}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={signOut}>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link to='/home'>Home</Link>
                    <Link to='/services'>Services</Link>
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