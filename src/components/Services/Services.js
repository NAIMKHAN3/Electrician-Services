import { Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import AllServices from '../AllServices/AllServices';


const Services = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://assignment-11-server-naimkhan3.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data.data)
                setLoading(false)
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
            <div className='grid lg:grid-cols-2 gap-4 m-10'>
                {
                    services.map(service => <AllServices key={service._id} service={service}></AllServices>)
                }
            </div>
        </div>
    );
};

export default Services;


