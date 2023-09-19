import styled from "styled-components"
import Bg from "../assets/images/features-bg2.jpg"


const Suscribe = ()=>{
    return(
        <div>
            <Container>
                <Wrapper>
                    <Left>
                    <Heading>
                        
                        <h1>SUBSCRIBE TO OUR <span>updates</span></h1>
                        <Rope>
                            <div/>
                            <hr/>
                            <line/>
                        </Rope>
                      
                        <p>Subscribe to our email newsletter for useful tips and resources.</p>
                    </Heading>
                    </Left>
                    <Right></Right>
                </Wrapper>
            </Container>
        </div>
    )
};
export default Suscribe;


const Right = styled.div`
width:45%;`


const Left = styled.div`
width:46%;`

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
align-items:flex-end;
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
 
 @media screen and (max-width:425px){
  width:90%;  
 }
`

const Wrapper = styled.div`
width:85%;
display:flex;
justify-content:space-between;
align-items:center;`

const Container = styled.section`
width:100;
padding:70px;
baclground-image:url()`