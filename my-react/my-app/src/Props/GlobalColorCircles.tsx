import styled from "styled-components"

interface iCard{
    lg:string
    icon:any
}

const GlobalCLCircles:React.FC<iCard> = ({lg, icon}) =>{

    return(
        <div>
            <Circle lg={lg}>{icon}</Circle>
        </div>
    )
};
export default GlobalCLCircles; 
const Circle = styled.div<{lg:string}>`
width:84px;
height:84px;
border-radius:50%;
background-image:linear-gradient(to bottom, ${({lg})=>lg});
color:white;
display:flex;
justify-content:center;
align-items:center;
font-size:33px;
// z-index:-1;
&:hover{
    transition: all 350ms;
transform: scale(1.3);

};
`