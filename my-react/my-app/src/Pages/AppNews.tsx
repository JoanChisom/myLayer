import styled from "styled-components"

const AppNews = ()=>{
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
                </Wrapper>
            </Container>
        </div>
    )
};
export default AppNews;

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
 
 @media screen and (max-width:425px){
  width:90%;  
 }
`

const Wrapper = styled.div`
width:85%;`

const Container = styled.section`
width:100%;`