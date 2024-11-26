function Universe() {
    return ( <>
    <div className="container p-5 me-">
        <div className="row text-center mb-5">
            <h4>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h4>
        </div>
        <div className="row text-center">
            <h2 className="mb-4">The Zerodha Universe</h2>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
        </div>
        <div className="row mt-5 pt-5">
            <div className="col-4 text-center">
                <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fund Page" style={{width:"53%"}}/>
                <p className="mt-4">Our asset management venture <br />that is creating simple and transparent index <br />funds to help you save for your goals.</p>
            </div>
            <div className="col-4 text-center">
                <img src="media/images/sensibullLogo.svg" alt="Zerodha Fund Page" style={{width:"53%"}}/>
                <p className="mt-4">Options trading platform that lets you  <br />create strategies, analyze positions, and examine  <br />data points like open interest, FII/DII, and more.</p>
            </div>
            <div className="col-4 text-center">
                <img src="media/images/goldenpiLogo.png" alt="Zerodha Fund Page" style={{width:"53%"}}/>
                <p className="mt-4">Investment research platform <br />that offers detailed insights on stocks, <br />sectors, supply chains, and more.</p>
            </div>
            <div className="col-4"></div>
            <div className="col-4"></div>
        </div>


        <div className="row mt-5 pt-5">
            <div className="col-4 text-center">
                <img src="media/images/streakLogo.png" alt="Zerodha Fund Page" style={{width:"43%"}}/>
                <p className="mt-4">Systematic trading platform <br />that allows you to create and backtest <br />stategies without coding.</p>
            </div>
            <div className="col-4 text-center">
                <img src="media/images/smallcaseLogo.png" alt="Zerodha Fund Page" style={{width:"53%"}}/>
                <p className="mt-4">Thematic investing platform <br />that helps you invest in diversified  <br />baskets of stocks on ETFs.</p>
            </div>
            <div className="col-4 text-center">
                <img src="media/images/dittoLogo.png" alt="Zerodha Fund Page" style={{width:"38%"}}/>
                <p className="mt-4">Investment research platform <br />that offers detailed insights on stocks, <br />sectors, supply chains, and more.</p>
            </div>
            <button className='homePageBtn mt-4'>Sign up for free</button>
        </div>
    </div>
    </> );
}

export default Universe;