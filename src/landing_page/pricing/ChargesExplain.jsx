
function ChargesExplain() {
    return ( <>
    <div className="container">

        <div className="row">
            <h4 className="text-center mt-5 mb-5"> <a href="https://zerodha.com/brokerage-calculator#tab-equities">Calculate your costs</a> upfront using our brokerage calculator</h4>
            <h3 className="mb-5">Charges explained</h3>
        </div>

        <div className="row tex-muted fw-light">
            <div className="col-6">
                <h6 >Securities/Commodities transaction tax</h6>
                <p className="mb-4 fs-6">Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                <p className="mb-4">When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>

                <h6 >Transaction/Turnover Charges</h6>
                <p className="mb-4">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                <p className="mb-4">BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                <p className="mb-4">BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                <p className="mb-4">BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                <p className="mb-4">BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                <h6 >Call & trade</h6>
                <p className="mb-4">Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
                <h6 >Stamp charges</h6>
                <p className="mb-4">Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
                <h6>NRI brokerage charges</h6>
                <ul>
                    <li>₹100 per order for futures and options.</li>
                    <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower)</li>
                    <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                </ul>
                <h6>Account with debit balance</h6>
                <p className="mb-4">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                <h6>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h6>
                <ul>
                    <li>Equity and Futures - ₹10 per crore + GST of the traded value. </li>
                    <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                    <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>

                </ul>
            </div>


            <div className="col-6">
                <h6 >GST</h6>
                <p className="mb-4">Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                

                <h6 >SEBI Charges</h6>
                <p className="mb-4">Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
        
                <h6 >DP (Depository participant) charges</h6>
                <p className="mb-4">₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                <p className="mb-4">Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                <p className="mb-4">Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>

                <h6 >Pledging charges</h6>
                <p className="mb-4">₹30 + GST per pledge request per ISIN.</p>

                <h6>AMC (Account maintenance charges)</h6>
                    <p className="mb-4">For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="support">Click here</a></p>

                    <p className="mb-4">For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href="support">Click here</a></p>


                <h6>Corporate action order charges</h6>
                <p className="mb-4">₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
                
                <h6>Off-market transfer charges</h6>
                <p className="mb-4">₹25 or 0.03% of the transfer value (whichever is higher).</p>
               
               <h6>Physical CMR request</h6>
               <p className="mb-4">First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>

               <h6>Payment gateway charges</h6>
               <p className="mb-4">₹9 + GST (Not levied on transfers done via UPI)</p>

               <h6>Delayed Payment Charges</h6>
               <p className="mb-4">Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href="support">Learn More</a> </p>
            </div>
        </div>

        <div className="row mb-5">
            <p className="mt-5">Disclaimer</p>
            <p className="text-muted">For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
        </div>
    </div>
    </> );
}

export default ChargesExplain;