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

const HomeScreen = ()=>{
    return(
        <div>
            <Hero/>
            <WelcomeMsg/>
            <Features/>
           <HIW/>
           <AddedFts/>
           {/* <PriceTab/> */}
           <Screenshot/>
           <Achievements/>
           <DemoVid/>
           <Testimonials/>
           <Team/>
           <AppNews/>
        </div>
    )
};

export default HomeScreen;