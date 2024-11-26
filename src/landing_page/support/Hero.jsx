function Hero() {
  return (
    <>
      <div className="supportPage">
        <div className="container m-5 mt-0">

          <div className="row pt-5 ps-5 ms-5">

            <div className="col-4">
              <h2 className="mb-5">Support Portal</h2>
            </div>

            <div className="col-2"></div>

            <div className="col-6 ">
              <h2 className="mb-5 ms-5 ps-5 text-end">Track tickets</h2>
            </div>

            </div>


            <div className="d-flex" style={{width:"120%"}}>
                
            <div className="row pt-5 ps-5 ms-5 me-5">
            <div className="col-12">
              <h2 className="mb-5">  <h2>Search for an answer or browse help topics to create a ticket</h2></h2>
              <div class="input-group flex-nowrap">
                 <input type="text" class="form-control " placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." aria-label="Username" aria-describedby="addon-wrapping" style={{height:"74px",fontSize:"23px",position:"relative"}} />
                     <i class="fa-solid fa-magnifying-glass" style={{fontSize:"29px", marginRight:"20px",position:"absolute",right:"8px",bottom:"27px"}}></i>
                    </div>
            </div>
            </div>

            <div className="row">
            <div className="col-12 width">
              <h2 className="mb-5 mt-5 ms-5 ps-5 text">Featured</h2>
              <ol type="1" style={{fontWeight:"500"}}>
                <li><a href="/">  Connectivity issue - Support telephone line [Resolved] </a></li>
                <li className="mt-3"><a href="/">MCX Option contracts expiry - October 2024</a></li>
              </ol>
            </div>
            </div>
            </div>

            <div className="row link-sp">
            <ul>
                <li><a href="">Track account Opening</a></li>
                <li><a href="">Track segment activation</a></li>
                <li><a href="">Intraday margins</a></li>
               
            </ul>
            <div className="row link-sp mt-3" style={{marginLeft:"0.1px"}}>
                <ul>
                <li><a href="">Kite user manual</a></li>
                </ul>
            </div>
            </div>

         
              

                            


           
          </div>
        </div>
      
    </>
  );
}

export default Hero;
