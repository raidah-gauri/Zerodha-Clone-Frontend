function Team() {
    return ( <>
    <div className="container p-5">

    <div className="row text-center ">
                <h1 className="fs-2 pb-5 lh-base">People</h1>
            </div>
        
    <div className="row p-5">
        <div className="col-6 text-center">
            <img src="media/images/nithinKamath.jpg" alt="" className="rounded-circle"  style={{width:"300px"}} />
            <p className="fs-4 text-center">Nithin Kamath</p>
            <p>Founder, CEO</p>
        </div>
        <div className="col-6">
            <p className="text-start">Nithin bootstrapped and founded Zerodha in 2010 to overcome the <br /> hurdles he faced during his decade long stint as a trader. Today, <br /> Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
    </div>
    </div>
    </> );
}

export default Team;