import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
    return ( <>
   <Hero/>
   <LeftSection imageUrl="media/images/kite.png" productName="Kite" desc="Our ultra-fast flagship trading platform with  streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore=""/>
   <RightSection productName="Console" desc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="" imageUrl="media/images/console.png"/>
   <LeftSection imageUrl="media/images/coin.png" productName="Coin" desc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="Coin"/>
   <RightSection productName="Kite Connect API" desc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore="" imageUrl="media/images/kiteconnect.png"/>
   <LeftSection imageUrl="media/images/varsity.png" productName="Varsity mobile" desc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."/>
   <Universe/>
    </> );
}

export default ProductsPage;