import styled from "styled-components"
import bg from "../assets/images/features-bg.jpg"
import GlobalCards from "../Props/GlobalCards"
import {SlNote} from "react-icons/sl"
import {TfiFlagAlt} from "react-icons/tfi"
import {MdFlashOn} from "react-icons/md"
import picture from "../assets/images/about-2.png"
import {TfiPalette} from "react-icons/tfi"
import {BsGlobe2} from "react-icons/bs"
import {TfiMicrophone} from "react-icons/tfi"

function Features(){
    return(
        <div>
            <Container>
                <Wrapper>
                <Heading>
                        
                        <h1>awesome <span>features</span></h1>
                        <Rope>
                            <div/>
                            <hr/>
                            <line/>
                        </Rope>
                      
                        <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Heading>
                    <Body>
                        <Left>
                        <Wrapp mg="45px">
                <Icon cl="#e74c3c "><SlNote/></Icon>
                <Wrap>
                    <h2>Creative Design</h2>
                    <p>Lorem ipsum dolor sit amet elit.</p>
                </Wrap>
            </Wrapp>
            <Wrapp>
                <Icon cl="blue"><TfiFlagAlt/></Icon>
                <Wrap>
                    <h2>
Easy To Customize</h2>
                    <p>Lorem ipsum dolor sit amet elit.</p>
                </Wrap>
            </Wrapp>
           
            <Wrapp mg="45px">
                <Icon cl="orange"><MdFlashOn/></Icon>
                <Wrap>
                    <h2>Bootstrap 3</h2>
                    <p>Lorem ipsum dolor sit amet elit.</p>
                </Wrap>
            </Wrapp>

                        </Left>
                        <Center>
                            <Img src={picture} alt=""/>
                        </Center>
                        <Right>
                      
            <Wrapp mg="45px">
                <Icon cl="purple "><TfiPalette/></Icon>
                <Wrap>
                    <h2>DIFFERENT COLORS</h2>
                    <p>Lorem ipsum dolor sit amet elit.</p>
                </Wrap>
            </Wrapp>
            <Wrapp>
                <Icon cl="blue"><BsGlobe2/></Icon>
                <Wrap>
                    <h2>
Easy To Customize</h2>
                    <p>Lorem ipsum dolor sit amet elit.</p>
                </Wrap>
            </Wrapp>
            <Wrapp mg="45px">
                <Icon cl="orange"><TfiMicrophone/></Icon>
                <Wrap>
                    <h2>
24/7 SUPPORT</h2>
                    <p>Lorem ipsum dolor sit amet elit.</p>
                </Wrap>
            </Wrapp>
            
                        </Right>
                    </Body>
                </Wrapper>
            </Container>
        </div>

    )
};
export default Features;
const Left = styled.div`
display:flex;
width:35%;
height:100%;
flex-direction:column;
// background-color:yellow;
margin-top:32px;
justify-content:space-between;`

const Img = styled.img`
width:80%;
// height:100%;
object-fit:cover;
object-position:center;
`

const Center = styled.div`
width:30%;`

const Wrap = styled.div`
display:flex;
flex-direction:column;
margin-left:20px;

h2{
    margin-bottom:5px;
    &:hover{
        color:#e74c3c 
    }
};
p{
    color:rgba(0,0,0,0.7);
    margin-top:0px;
}
`

const Icon = styled.div<{cl:string}>`
font-size:37px;

color:${({cl})=>cl}
`

const Wrapp = styled.div<{mg?:string}>`
display:flex;
justify-content:center;
align-items:center;
width:76%;
margin-bottom:39px; 
border-radius:7px;
box-shadow: 2px 1px 8px 3px silver;
margin-left:${({mg})=>mg};
padding:15px 15px;
`

const Right = styled.div`
display:flex;
width:35%;
height:100%;
margin-top:32px;

flex-direction:column;
// background-color:blue;
justify-content:space-between;`


const Body = styled.div`
width:100%;
// background-color:green;
display:flex;
margin-top:22px;
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
width:90%;
display:flex;
flex-direction:column;
align-items:center;
// justify-content:flex-end;
`


const Container = styled.div`
width:100%;
height:74%;
display:flex;
background-image:url(${bg});
background-size:cover;
background-position:center;
justify-content:center;
align-items:center;
padding-top:60px`