import React from 'react';

function Education() {
    return ( 
        <>
       <div className="container mb-5">
        <div className="row mt-3"></div>
        <div className="row mt-5"></div>
        <div className="row">
            <div className="col">
                <img src="media/images/education.svg" alt="Education Img" />
            </div>
            <div className="col mt-5">   
                <h3 class="mb-3">Free and open market education</h3>
                <p>Varsity, the largest online stock market education book in the world <br /> covering everything from the basics to advanced trading.</p>
                <a href="" >Varsity <i class="fa-solid fa-arrow-right"></i></a>
                <p class="mt-5 mb-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="">TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
       </div>
        </>
     );
}

export default Education;