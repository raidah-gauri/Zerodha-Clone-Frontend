function RightSection({
    productName,desc,learnMore,imageUrl,}) {
    return ( <>
        <div className="container  pt-5">
            <div className="row p-5">

                <div className="col-6 mt-5 p-5">
                    <div className="m-5 pt-5">
                    <h2 className="mb-4" >{productName}</h2>
                    <p>{desc}</p>
                    <div className="mb-3">
                    <a href={learnMore}>Learn More</a>
                    </div>
                    </div>
                </div>
                    
                    <div className="col-6">
                    <img className="me-5" src={imageUrl} alt="LeftImage" />
                </div>
    
                
            </div>
        </div>
        </> );
}

export default RightSection;