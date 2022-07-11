import React from 'react';
import doctor from '../../Images/doctor.jpg'
import './Contact.css'

const Contact = () => {
    return (
        <div id='contact' className='container margin-top  '  >
            <div className='row '>
                <h1 className='text-center text-primary mb-4'><u>Contact With Doctor</u></h1>
                <div className='col col-12 col-md-6 p-4 '>
                       <h1 className='font-size1 text-info '>Chat <span className='text-success'> With Doctor</span></h1>
                       <p className='fs-5'>Patients can easily interacting with doctor by the help of digital telecommunication.Patients can easily call a doctor to tell disease and get treatment from doctor.</p>
                       <button className='btn btn-info fs-4 px-3'>Live</button>
                </div>
                <div className='col col-12 col-md-6 ' >
                     <img className='image-fluid' src={doctor} height='300' style={{width:'100%'}} alt=""  />
                </div>
            </div>
            
        </div>
    );
};

export default Contact;