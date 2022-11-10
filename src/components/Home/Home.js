import { Button, Carousel, Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../Cards/Cards';
import carton from './image/carton.jpg'
import banner from './image/banner.png'
import slider1 from './image/slider1.png'
import slider2 from './image/slider2.jpg'
import slider3 from './image/slider3.jpg'
import useTitle from '../UseTitle';


const Home = () => {
    useTitle('Home')
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch('https://assignment-11-server-naimkhan3.vercel.app/service')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setServices(data.data)
            })
            .catch(e => console.log(e))
    }, [])
    return (
        <div>
            {
                loading && <div className="text-center">
                    <Spinner
                        aria-label="Extra large spinner example"
                        size="xl"
                    />
                </div>
            }
            <img className='lg:w-3/4 mx-auto' src={banner} alt="" />
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 lg:w-2/3 mx-auto my-10">
                <Carousel>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <img className='w-full' src={slider1} alt="" />
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <img className='w-full' src={slider2} alt="" />
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <img className='w-full' src={slider3} alt="" />
                    </div>
                </Carousel>
            </div>
            <div className='grid lg:grid-cols-2 lg:w-2/3 mx-auto border-solid border-2 border-black p-12'>
                <img src={carton} alt="" />
                <div>
                    <h1 className='text-3xl mt-10 text-amber-700'>Is Your chilt at risk? For your child's safety, install the power lines in the house properly</h1>
                </div>
            </div>
            <div>
                <h1 className='text-3xl text-center font-extrabold mt-10'>MY Services</h1>
                {
                    services.map(service => <Cards key={service._id} service={service}></Cards>)
                }
                <Link to='/services'> <Button className='text-center mx-auto w-36 my-3' color="purple">
                    See All Services
                </Button></Link>
            </div>


        </div>
    );
};

export default Home;