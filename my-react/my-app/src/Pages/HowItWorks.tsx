import styled from "styled-components"
import backPic from "../assets/images/small-screen.png"
import frontPic from "../assets/images/big-screen.png"
import GlobalButton from "../Props/GlobalButton";

const HIW = ()=>{
    return(
        <div>
           <Container>
              <Wrapper>
                <Left>
                <img src={backPic} alt=""/>
                    <Image src={frontPic} alt=""/>

                </Left>
                <Right>
                <Heading>
                        
                        <h1>How it <span>works</span></h1>
                        <Rope>
                            <div/>
                            <hr/>
                            <line/>
                        </Rope>
                      
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </Heading>
                    <Body>
                        <h1>Benefits Of App</h1>
                        <Holder>
                            <Hold>
                                <IconTab lg="#e74c3c, purple"></IconTab>
                                
                                <TxtHold>
                                    <h2>Notifications</h2>
                                    <p>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit.</p>
                                </TxtHold>
                            </Hold>
                            <Hold>
                                <IconTab lg="darkblue, blue"></IconTab>
                                <TxtHold>
                                    <h2>Favourites</h2>
                                    <p>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit.</p>
                                </TxtHold>
                            </Hold>
                        </Holder>
                        <Holder>
                            <Hold>
                                <IconTab lg="orangered, orange"></IconTab>
                                
                                <TxtHold>
                                    <h2>24/7 Support</h2>
                                    <p>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit.</p>
                                </TxtHold>
                            </Hold>
                            <Hold>
                                <IconTab lg="#e74c3c, purple"></IconTab>
                                <TxtHold>
                                    <h2>Wishlist</h2>
                                    <p>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit.</p>
                                </TxtHold>
                            </Hold>
                        </Holder>
                        <Button>Learn more</Button>
                    </Body>
                </Right>
              </Wrapper>
           </Container>
        </div>
    )
};
export default HIW;
const Button = styled.button`
  width:140px;
  background-color: #e74c3c;
  height: 50px;
  border-radius: 100px;
  cursor: pointer;
  color: #fff;
  font-weight:bold;
 border:0;
  &:hover{
    
    background-color:black;
    color:white
  };
  cursor:pointer;
  `


const TxtHold = styled.div`
width:75%;
h2{
    margin:0px
};
p{
    margin-top:4px
}`
const IconTab = styled.div<{lg?:string}>`
width:60px;
height:60px;
border-top-right-radius:50px;
border-bottom-left-radius:50px;
border-top-left-radius:50px;
// margin-right:15px;
background-image:linear-gradient(to bottom, ${({lg})=>lg});
display:flex;
align-items;center;
justify-content:center;`

const Hold = styled.div`
display:flex;
justify-content:space-between;
align-items:flex-start;
width:47%;
// background-color:blue
`

const Holder = styled.div`
width:100%;
display:flex;
// background-color:pink;
justify-content:space-between;
margin-bottom:15px;`

const Body = styled.div`
h1{
    margin-top:12px;
}`

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
    height:1px;
    width:47px;
    background-color:#e74c3c;
}
line{
    height:1px;
    width:45px;
    background-color:rgba(0,0,0,0.6);
}`


const Heading = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
width:100%;
height:38%;
// background-color:white;

h1{
    text-transform:uppercase;
    font-size:36px;
    margin-bottom:5px;
    span{
        color:#e74c3c
    };
};

p{
    line-height:22px;
    font-size:15px;
    margin-top:8px;
    color:rgba(0,0,0,0.7);
    text-align:start;
    width:100%;
    height:30.5%;
    // background-color:grey;
   

};
// margin-bottom:10px;
`

const Right = styled.div`
width:60%;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:flex-start;
// background-color:yellow;
margin:0;
padding:0;
@media screen and (max-width:768px){
    width:100%;
}
`

const Image = styled.img`
position:absolute;
right:65%;
// width:20%;
object-fit:cover;
// margin-right:25px;
@media screen and (max-width: 768px){
    position:absolute;
    left:25%;
}
`

const Left = styled.div`
width:35%;
// background-color:red;
display:flex;
justify-content:start;
align-items:center;
@media screen and (max-width: 768px){
    width:100%;
    margin-bottom:20px;
}

`

const Wrapper = styled.div`
width:85%;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
position:relative;
`

const Container=styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
padding:56px 0px;
z-index:-1
`