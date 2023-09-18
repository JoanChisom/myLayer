import styled from "styled-components"

const PriceTab = ()=>{
    return(
        <div>
            <Container>
                <Wrapper>
                <Heading>
                        
                        <h1>pricing <span>list</span></h1>
                        <Rope>
                            <div/>
                            <hr/>
                            <line/>
                        </Rope>
                      
                        <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Heading>
                    <Body>
                        <Tab>
                            <Tablet lg="#ff5800, #fe8c00" wd="100px">Basic</Tablet>
                            <TabWrap>
                                <p>tfufinjf</p>
                                <p>fatzysdfj</p>
                                <p>ardyu</p>
                            </TabWrap>
                        </Tab>
                    </Body>
                </Wrapper>
            </Container>
        </div>
    )
};
export default PriceTab;
const Tablet = styled.button<{lg:string, wd:string}>`
color:white;
padding: 15px 2px;
width:${({wd})=>wd};
display:flex;
border:none;
justify-content:center;
align-items:center;
background-image:linear-gradient(to right, ${({lg})=>lg});
border-radius:100px;
font-size:18px;
font-weight:bold;`

const TabWrap = styled.div`
`

const Tab = styled.div`
width:20%;
padding:30px;
background-color:red;
border:none;`

const Body = styled.div``

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
    margin-top:8px;
    @media screen and (max-width:768px){
        font-size:13px;
        text-align:center;
    }

};
margin-bottom:10px;
@media screen and (max-width:768px){
    width:54%;
}
`

const Wrapper = styled.div`
width:85%;
display:flex;
flex-direction:column;
align-items:center;
// justify-content:flex-end;

`

const Container = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;`
