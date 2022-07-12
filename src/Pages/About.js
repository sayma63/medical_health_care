import React from 'react';
import profile from '../Images/profile.png'
import './About.css'

const About = () => {
    return (
        <div>
            <h1 className='text-primary text-center'>About Me</h1>
            <div className='text-center'>
                <img src={profile} alt="" className='img-fluid' />
            </div>
            <h1 className='text-primary text-center'>Name:Sayma Akter Shumi</h1>
            <div className='margin'> <p className='p-2'><span className='text-primary p-2 fs-2 '>My Goal:</span>As a Web Developer,the main objective when working as a developer is to be productive and deliver value to the company.As a developer or a CTO,the aim is to build practical application that will be 100% successfull.To achieve this specific goals need to be set,Which include:Enhanching networking Skills.</p></div>
        </div>
    );
};

export default About;