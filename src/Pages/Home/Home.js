import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import './Home.css'
import Services from './Services';

const Home = () => {
    return (
        <div>
            <h1 className='text-info text-center mt-2 '>Medical <span className='text-color'>Health Care</span></h1>
            <Banner></Banner>
            <Services></Services>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;