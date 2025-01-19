import React from 'react';
import '../../css/HomePage.css';


function Hero() {
    return ( 
        <>
        <div className="container pt-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" style={{width:"64%"}} className='d-block mx-auto mt-5 pt-5' alt="Hero image" />
                <h1 className='mt-5'>Invest in everything</h1>
                <p className='mt-2 fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='homePageBtn mt-4'>Sign up for free</button>
            </div>
        </div>
        </>
     );
}

export default Hero;
