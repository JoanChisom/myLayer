import styled from "styled-components"
import GlobalCLCircles from "../Props/GlobalColorCircles";
import { IoIosDownload } from "react-icons/io";

const Achievements =()=>{
    return(
        <div>
            <Container>
                <Wrap>
                    <GlobalCLCircles lg="#e74c3c, purple" icon={IoIosDownload}/>
                    <h3>Downloads</h3>
                    <h1>1505+</h1>
                </Wrap>
                <Wrap>
                    <GlobalCLCircles lg="#5d2af2, #860eee" icon={IoIosDownload}/>
                    <h3>Likes</h3>
                    <h1>5200+</h1>
                </Wrap>
                <Wrap>
                    <GlobalCLCircles lg="#187ae9, #09c5bb" icon={IoIosDownload}/>
                    <h3>Awards won</h3>
                    <h1>400+</h1>
                </Wrap>
                <Wrap>
                    <GlobalCLCircles lg="#e74c3c, orangered" icon={IoIosDownload}/>
                    <h3>Author working</h3>
                    <h1>34+</h1>
                </Wrap>
            </Container>
        </div>
    )
};
export default Achievements;
const Wrap = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
h3{
    margin-bottom:0px;
    margin-top:9px;
    // font-size:22px;
};
h1{
    font-size:56px;
    color:#e74c3c;
    margin-top:4px;
    margin-left:10px;
}`

const Container = styled.section`
width:100%;
display:flex;
justify-content:space-evenly;
align-items:center;
padding:90px 0px`