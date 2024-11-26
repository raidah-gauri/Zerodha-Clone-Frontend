import React from "react";

function Stats() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col m-2 p-5">
            <h3 className="mt-5 mb-5">Trust with confidence</h3>

            <strong className="mb-2 d-block">Customer-first always</strong>
            <p className="mb-4">
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>

            <strong className="mb-2 d-block">No spam or gimmicks</strong>
            <p className="mb-4">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>

            <strong className="mb-2 d-block">The Zerodha universe</strong>
            <p className="mb-4">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>

            <strong className="mb-2 d-block">Do better with money</strong>
            <p className="mb-4">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col p-5 mb-2">
            <img
              src="media/images/ecosystem.png"
              className="StatsImg mt-5"
              alt="Stats Image"
            />
            <a className="m-5" href="">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
            <a href="">Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

        <div className="row d-flex justify-content-center mb-5">
          <img src="media/images/pressLogos.png" style={{width:"53%"}} alt="" />
        </div>


      </div>
    </>
  );
}

export default Stats;
