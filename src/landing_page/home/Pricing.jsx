import React from "react";

function Pricing() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6  p-5" style={{ paddingRight: "1px" }}>
            <h2 class="mb-4">Unbeatable pricing</h2>
            <p>
              We pioneered the concept of discount broking and price <br />
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="">
              See pricing <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-2 mt-5 mb-5 pt-5 ">
            <img
              style={{ width: "60%" }}
              src="media/images/pricing0.svg"
              alt=""
            />
            <p style={{ fontSize: "11px" }}>
              Free account <br />
              opening
            </p>
          </div>
          <div className="col-2 mt-5  pt-5 mb-5">
            <img
              style={{ width: "60%" }}
              src="media/images/pricing0.svg"
              alt=""
            />
            <p style={{ fontSize: "11px" }}>
              Free equity delivery <br />
              and direct mutual funds
            </p>
          </div>
          <div className="col-2 mt-5  pt-5 mb-5" s>
            <img
              style={{ width: "60%" }}
              src="media/images/pricing0.svg"
              alt=""
            />
            <p style={{ fontSize: "11px" }}>
              Intraday and <br />
              F&O
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
