import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../Cards/Cards';


const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data.data))
            .catch(e => console.log(e))
    }, [])
    return (
        <div>
            {
                services.map(service => <Cards key={service._id} service={service}></Cards>)
            }
            <Link to='/services'> <Button className='text-center mx-auto w-36 my-3' color="purple">
                See All Services
            </Button></Link>

        </div>
    );
};

export default Home;