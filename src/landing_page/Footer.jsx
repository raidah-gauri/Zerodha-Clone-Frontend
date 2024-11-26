import React from "react";
import "../css/footer.css";
function Navbar() {
  return (
    <>
      <div
        className="body-footer"
        style={{
          padding: "30px 0 5px 0",
          borderTop: "1px solid #eee",
          backgroundColor: "#fbfbfb",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-3">
              <img
                className="mb-4"
                src="media/images/logo.svg"
                alt="Logo"
                style={{ width: "120px" }}
              />
              <p className="small text-muted">
                &copy; 2010 - 2024, Zerodha Broking Ltd. <br />
                All rights reserved.
              </p>
              <p style={{fontSize:"22px",color: "#666"}}>
              <i class="fa-brands fa-app-store-ios p-2"></i>
              <i class="fa-brands fa-square-facebook p-2"></i>
              <i class="fa-brands fa-instagram p-2"></i>
              <i class="fa-brands fa-linkedin-in p-2"></i>
              <hr />
              </p>
              <p style={{fontSize:"22px",color: "#666"}}>
              <i class="fa-brands fa-youtube p-2"></i>
              <i class="fa-brands fa-whatsapp p-2"></i>
              <i class="fa-brands fa-telegram p-2"></i>
              </p>
            </div>
            <div className="col-3">
              <h6>Company</h6>
              <ul>
                <li>About</li>
                <li>Products</li>
                <li>Pricing</li>
                <li>Referral programme</li>
                <li>Careers</li>
                <li>Zerodha.tech</li>
                <li>Press & media</li>
                <li>Zerodha Cares (CSR)</li>
              </ul>
            </div>
            <div className="col-3 mb-5">
              <h6>Support</h6>
              <ul>
                <li>Contact us</li>
                <li>Support portal</li>
                <li>Z-Connect blog</li>
                <li>List of charges</li>
                <li>Downloads & resources</li>
                <li>Videos</li>
                <li>Market overview</li>
                <li>How to file a complaint?</li>
                <li>Status of your complaints</li>
              </ul>
            </div>
            <div className="col-3">
              <h6>Account</h6>
              <ul>
                <li>Open an account</li>
                <li>Fund transfer</li>
              </ul>
            </div>
          </div>
          <div className="row " style={{color:" #9b9b9b"}}>
            <p style={{ fontSize: "12px" }}>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX - SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. - SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through <br /> Zerodha
              Commodities Pvt. Ltd. MCX: 46025; NSE-50001 - SEBI Registration
              no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
              #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
              J.P Nagar 4th Phase,
              <br /> Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk <br /> Disclosure Document as
              prescribed by SEBI | ICF
            </p>
            <p style={{ fontSize: "12px" }}>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy <br /> redressal of the grievances
            </p>
            <p style={{ fontSize: "12px" }}>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
            <p style={{ fontSize: "12px" }}>
              Attention investors: 1. Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2. Update your e-mail and phone
              number with your stock broker / <br />
              depository participant and receive OTP directly from depository on
              your e-mail and/or mobile number to create pledge. 3. Check your
              securities / MF / bonds in the consolidated account statement
              issued by NSDL/CDSL every month.
            </p>
            <p style={{ fontSize: "12px" }}>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the <br /> day. Issued in the interest
              of investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same{" "}
              <br /> process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to <br /> authorize your bank to make payment
              in case of allotment. In case of non allotment the funds will
              remain in your bank account. As a business we don't give stock
              tips, and have not authorized anyone to trade on behalf of <br />{" "}
              others. If you find anyone claiming to be part of Zerodha and
              offering such services, please create a ticket here.
            </p>
          </div>
          <div className="row  ">
            <ul className="ul ">
              <li className="col">
                <a style={{ textDecoration: "none", padding: "0px" }} href="">
                  NSE
                </a>
              </li>
              <li className="col">
                <a href="">BSE</a>
              </li>
              <li className="col">
                <a href="">MCX</a>
              </li>
              <li className="col">
                <a href="">Terms & Conditions</a>
              </li>
              <li className="col pl-5">
                <a href="">Policies</a>
              </li>
              <li className="col">
                <a href="">Privacy</a>
              </li>
              <li className="col">
                <a href="">Disclosure</a>
              </li>
              <li className="col">
                <a href="">For Investor's Attention</a>
              </li>
              <li className="col">
                <a href="">Investor Charter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Navbar;
