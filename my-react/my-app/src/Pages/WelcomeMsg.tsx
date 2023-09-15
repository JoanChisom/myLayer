import styled from "styled-components"
import Imag from "../assets/images/about-4.png"
import {TfiDesktop} from "react-icons/tfi"
import { TfiAnnouncement } from "react-icons/tfi";
import { TfiSettings } from "react-icons/tfi";

const Component1 = ()=>{
    return(
        <div>
            <Container>
                <Wrapper>
                    <Heading>
                        
                        <h1>Welcome to <span>Layer</span></h1>
                        <Rope>
                            <div/>
                            <hr/>
                            <line/>
                        </Rope>
                      
                        <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Heading>
                    <Body>
                        <Left>
                            <Hold>
                                <Circle><TfiDesktop/></Circle>
                                <Holder>
                                    <h3>BOOTSTRAP 3.2</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                                    <p>tempor incididunt ut labore et dolore aliqua.</p>
                                </Holder>
                            </Hold>
                            <Hold>
                                <Circle1><TfiSettings/></Circle1>
                                <Holder>
                                    <h3>CREATIVE DESIGN</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                                    <p>tempor incididunt ut labore et dolore aliqua.</p>
                                </Holder>
                            </Hold>
                            <Hold>
                                <Circle2><TfiAnnouncement/></Circle2>
                                <Holder>
                                    <h3>EASY TO USE</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                                    <p>tempor incididunt ut labore et dolore aliqua.</p>
                                </Holder>
                            </Hold>
                        </Left>
                        <Right>
                        <Img src={Imag} alt="about-img"/>
                        </Right>
                    </Body>
                </Wrapper>
            </Container>
        </div>
    )
};
export default Component1;
const Holder = styled.div`
display:flex;
flex-direction:column;
margin-right:30px;

h3{
    text-align:end;
    margin-bottom:14px;
    
};
p{
    color:rgba(0,0,0,0.7);
    margin-top:0;
    margin-bottom:9px;
    text-align:end;
    font-size:16px;
}`

const Circle2 = styled.div`
width:84px;
height:84px;
border-radius:50%;
background-image:linear-gradient(190deg, #fb6252, #f0356c);
color:white;
display:flex;
justify-content:center;
align-items:center;
font-size:33px;
`

const Circle1 = styled.div`
width:84px;
height:84px;
border-radius:50%;
background-image:linear-gradient(190deg, #ff9633, #ff5e3c);
color:white;
display:flex;
justify-content:center;
align-items:center;
font-size:33px;
`

const Circle = styled.div`
width:84px;
height:84px;
border-radius:50%;
background-image:linear-gradient(190deg, #c513da, #9828e8);
color:white;
display:flex;
justify-content:center;
align-items:center;
font-size:33px;

&:hover{
    transition: all 350ms
}
`

const Hold = styled.div`
display:flex;
flex-direction:row-reverse;
margin-top:27px;
align-items:center;
margin-bottom:20px;
// background-color:yellow;
`

const Left = styled.div`
width:50%;
// background-color:blue
`

const Img = styled.img`
width:100%;
height:100%;
object-fit:cover`

const Right = styled.div`
width:45%;

`

const Body = styled.div`
padding-top:20px;
display:flex;
justify-content:space-between;
width:90%;
// background-color:red;
`

const Rope= styled.div`
width:95px;
display:flex;
align-items:center;

div{
    width:11px;
    height:11px;
    background-color:#e74c3c;
    border-radius:50%;
}
hr{
    height:0.5px;
    width:47px;
    background-color:#e74c3c;
}
line{
    height:0.5px;
    width:45px;
    background-color:rgba(0,0,0,0.6);
}`


const Heading = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:44%;
height:10%;

h1{
    text-transform:uppercase;
    font-size:36px;

    span{
        color:#e74c3c
    };
};

p{
    line-height:31px;
    color:rgba(0,0,0,0.7);
    text-align:center;
   

};
margin-bottom:10px;
`

const Wrapper = styled.div`
width:95%;
display:flex;
flex-direction:column;
align-items:center;

justify-content:flex-end;`


const Container = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
padding-top:60px`