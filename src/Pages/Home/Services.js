import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css'

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div  className='container mt-4 'id='services'>


            <div className='row '>
            <h1 className='text-center '>Services <span className='text-color'> Of a Doctor</span></h1>
                <div className='service-container mt-3'>
                    {
                        services.map(service=><Service
                        key={service.id}
                        service={service}></Service>)
                    }

                </div>

            </div>
        </div>
    );
};

export default Services;