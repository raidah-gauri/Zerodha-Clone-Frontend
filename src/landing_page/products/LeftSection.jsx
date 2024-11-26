function LeftSection({imageUrl,
    productName,desc,tryDemo,learnMore,googlePlay,appStore,}) {
    return ( <>
    <div className="container mt-4 pt-2">
        <div className="row p-5">

            <div className="col-6">
                <img className="me-5" src={imageUrl} alt="LeftImage" />
            </div>

            <div className="col-6 mt-5 ps-5">
                <h2>{productName}</h2>
                <p>{desc}</p>
                <div className="mb-3">
                <a href={tryDemo} className="me-5">Try Demo</a> 
                <a href={learnMore} className="ms-5">Learn More</a>
                </div>
                
                <div className="mb-3 mt-4">
                <a href={googlePlay} className="me-5"><img src="media/images/appstoreBadge.svg" alt="" /></a> 
                <a href={appStore}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                </div>
            </div>
        </div>
    </div>
    </> );
}

export default LeftSection;