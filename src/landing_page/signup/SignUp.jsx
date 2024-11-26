function SignUp() {
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-6 mt-3">
            <img
              src="media/images/landing.46a77378.png"
              style={{ width: "117%" }}
              className="d-block mx-auto m-5 p-5"
              alt="Hero image"
            />
          </div>
          <div className="col-6  mt-5 p-5">
            <h1>Signup now</h1>
            <h3>Or track your existing application.</h3>
            <div class="input-group input-group-sm mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              /> <div>
<p>You will receive an OTP on your number</p>
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
