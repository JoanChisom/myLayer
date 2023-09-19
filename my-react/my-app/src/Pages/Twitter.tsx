import styled from "styled-components"
import GlobalCLCircles from "../Props/GlobalColorCircles";
import { IoLogoTwitter } from "react-icons/io";

const Twitter = ()=>{
    return(
        <div>
            <Container>
            <Circle><IoLogoTwitter/></Circle>
           
                <Wrapper>
                    <p>Loading...</p>
                </Wrapper>
            </Container>
        </div>
    )
};
export default Twitter;

const Circle = styled.div`
width:84px;
height:84px;
border-radius:50%;
background-image:linear-gradient(to bottom, #187ae9, #09c5bb);
color:white;
display:flex;
justify-content:center;
align-items:center;
font-size:33px;
// z-index:-1;
// transition: all 350ms;
position:absolute;
bottom:190px;

`

const Wrapper = styled.div`
width:85%;
// background-color:green;
p{
    color:white;
}
`


const Container = styled.section`
width:100%;
background-color:black;
display:flex;
padding:70px 0px;
justify-content:center;
align-items:center;
position:relative;

`