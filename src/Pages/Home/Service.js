import React from 'react';
import './Service.css'
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {img,name,description,price}=service
    const navigate= useNavigate()
    const navigateCheckout= ()=>{
       navigate('/checkout');  
    }
    return (
        <div className='service '>
            <img src={img} className='img-fluid' style={{height:'300px',width:'350px',padding:' 0px 1px'}} alt="" />
            <h1 className='text-success' >{name}</h1> 
            <h3>Price: ${price}</h3>
            <p className='px-2' >{description.length<60?description:description.slice(0,60)+'...read more' 
            
            }</p>
            <button onClick={navigateCheckout} className='button '>Service</button>
            
                

           
            
            
           
            
        </div>
    );
};

export default Service;