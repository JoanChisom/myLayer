import styled from "styled-components"
import bg from "../assets/images/features-bg3.jpg"
import Pic1 from "../assets/images/Team1.jpg"
import Pic2 from "../assets/images/Team2.jpg"
import Pic3 from "../assets/images/Team3.jpg"
import Pic4 from "../assets/images/Team4.jpg"

const Team =()=>{
    return(
        <div>
            <Container>
                <Wrapper>
                <Heading>
                        
                        <h1>TEAM <span>MEMBERS</span></h1>
                        <Rope>
                            <div/>
                            <hr/>
                            <line/>
                        </Rope>
                      
                        <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Heading>
                    <Body>
                        <Card>
                            <Img src={Pic1} alt="" width=""/>
                            <h2>Stanley Ndulue</h2>
                            <p>UI/UX Expert</p>
                        </Card>
                        <Card>
                            <Img src={Pic2} alt="" width=""/>
                            <h2>Jemima Odiri</h2>
                            <p>PHP Developer</p>
                        </Card>
                        <Card>
                            <Img src={Pic3} alt="" width=""/>
                            <h2>Ewuzie Joan</h2>
                            <p>Frontend Dev</p>
                        </Card>
                        <Card>
                            <Img src={Pic4} alt="" width=""/>
                            <h2>Akwubo Zion</h2>
                            <p>SEO Marketer</p>
                        </Card>
                    </Body>
                </Wrapper>
            </Container>
        </div>
    )
};
export default Team;
const Img = styled.img`
border-radius:10px;
`

const Card = styled.div`
width:22%;
display:flex;
flex-direction:column;
h2{
    text-align:center;
    margin-bottom:0px;
};
p{
    color:rgba(0,0,0,0.8);
    text-align:center;
    margin-top:13px;
}
`

const Body = styled.div`
width:100%;
// background-color:green;

display:flex;
justify-content:space-between;`

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
    margin-bottom:5px;
    span{
        color:#e74c3c
    };
};

p{
    line-height:31px;
    margin-top:8px;
    color:rgba(0,0,0,0.7);
    text-align:center;
   

};
margin-bottom:10px;
@media screen and (max-width:768px){
    width:55%;
    display:flex;
 };
`

const Wrapper = styled.div`
width:85%;
display:flex;
flex-direction:column;
// background-color:yellow;
justify-content:space-between;
align-items:center;`

const Container = styled.section`
width:100%;
display:flex;
justify-content:center;
align-items:center;
background-image: url(${bg});
background-size:cover;
background-position:center;
padding:100px 0px`