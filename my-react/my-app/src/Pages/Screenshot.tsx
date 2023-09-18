import styled from "styled-components"
import Bg from "../assets/images/features-bg2.jpg"
import pic1 from "../assets/images/1.jpg"
import pic2 from "../assets/images/2.jpg"
import pic3 from "../assets/images/3.jpg"
import pic4 from "../assets/images/4 (1).jpg"

const Screenshot =()=>{
    return(
    <div>
        <Container>
            <Wrapper>
            <Heading>
                        
                        <h1>app <span>screenshots</span></h1>
                        <Rope>
                            <div/>
                            <hr/>
                            <line/>
                        </Rope>
                      
                        <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Heading>
                    <Slidehold>
                        <Slide><img src={pic1} width="95%" alt=""/></Slide>
                        <Slide><img src={pic2} width="95%" alt=""/></Slide>
                        <Slide><img src={pic3} width="95%" alt=""/></Slide>
                        <Slide><img src={pic4} width="95%" alt=""/></Slide>

                    </Slidehold>
            </Wrapper>
        </Container>
    </div>
    )
};
export default Screenshot;

const Slide = styled.div`
padding:16px 8px;
border-radius:8px;
width:20%;
// height:80%;
display:flex;
justify-content:center;
align-items:center;
background-color:grey;`


const Slidehold = styled.div`
width:100%;
padding-top:30px;
display:flex;
// background-color:red;
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
    color:rgba(0,0,0,0.7);
    text-align:center;
    margin-bottom:8px;
   

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
align-items:center;
// background-color:yellow;
;`


const Container = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
padding:110px 0px;
background-image:url(${Bg});
background-size:cover;
background-position:center;
`