import React, { useEffect, useState } from 'react';
import AllServices from '../AllServices/AllServices';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data.data))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className='grid lg:grid-cols-2 gap-4 m-10'>
            {
                services.map(service => <AllServices key={service._id} service={service}></AllServices>)
            }
        </div>
    );
};

export default Services;