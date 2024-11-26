function Hero() {
    return ( <>
   <div className="container mt-5 pt-5 mb-5">
    <div className="row text-center mb-5">
        <h1 className="mt-4">Charges</h1>
        <h3 className="text-muted mt-3">List of all charges and taxes</h3>
    </div>
    <div className="row d-flex justify-content-center align-items-center">

        <div className="col-4 text-center mt-5 " >
            <img src="media/images/pricing0.svg" alt="" style={{width:"70%"}} />
            <h1>Free equity delivery</h1>
            <p className="text-muted">All equity delivery investments (NSE, BSE), <br /> are absolutely free — ₹ 0 brokerage.</p>
        </div>

        <div className="col-4 text-center mt-5"  >
            <img src="media/images/intradayTrades.svg" alt="" style={{width:"70%"}} />
            <h1>Intraday and F&O</h1>
            <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order on intraday trades across <br /> equity, currency, and commodity trades. Flat</p>
        </div>

        <div className="col-4 text-center mt-5"  >
            <img src="media/images/pricing0.svg" alt="" style={{width:"70%"}} />
            <h1>Free direct MF</h1>
            <p className="text-muted">All direct mutual fund investments are <br /> absolutely free — ₹ 0 commissions & DP <br /> charges.</p>
        </div>
    </div>
   </div>
    </> );
}

export default Hero;