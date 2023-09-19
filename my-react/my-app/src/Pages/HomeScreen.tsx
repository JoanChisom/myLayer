import Hero from "./Hero"
import WelcomeMsg from "./WelcomeMsg";
import Features from "./Features"
import HIW from "./HowItWorks"
import AddedFts from "./AddedFeatures"
import Screenshot from "./Screenshot"
import Achievements from "./Achievements";
import DemoVid from "./DemoVideo"
import Testimonials from './Testimonials'
import Team from "./Team"
import AppNews from "./AppNews"
import Twitter from "./Twitter"
import PriceTab from "./PricingTable";
 
const HomeScreen = ()=>{
    return(
        <div>
            <Hero/>
            <WelcomeMsg/>
            <Features/>
           <HIW/>
           <AddedFts/>
           <PriceTab/>
           <Screenshot/>
           <Achievements/>
           <DemoVid/>
           <Testimonials/>
           <Team/>
           <AppNews/>
           <Twitter/>
        </div>
    )
};

export default HomeScreen;