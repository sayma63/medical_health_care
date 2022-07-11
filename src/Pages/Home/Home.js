import React from 'react';
import Contact from './Contact';
import './Home.css'

const Home = () => {
    return (
        <div>
            <h1 className='text-info text-center mt-2 '>Medical <span className='text-color'>Health Care</span></h1>
            <Contact></Contact>
        </div>
    );
};

export default Home;