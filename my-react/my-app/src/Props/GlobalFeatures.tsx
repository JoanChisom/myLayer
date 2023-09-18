import styled from "styled-components"

interface iFeatures{
    h3Text: string
    icon?:any
}

const GlobalFeatures:React.FC<iFeatures> = ({h3Text, icon}) =>{
    return(
        <div>
            <Div>
                                    <Circle>{icon}</Circle>
                                    <h3>{h3Text}</h3>
                                </Div>
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit est is.</Text>
        </div>
    )

};
export default GlobalFeatures;

const Text = styled.div`
width:100%;
text-align:center;
margin-top:16px;
color:white;`

const Circle = styled.div`
width:90px;
height:90px;
border-radius:50%;
background-color:#e74c3c;
display:flex;
justify-content:center;
align-items:center;
position:absolute;
bottom:60%;`

const Div = styled.div`
width:100%;
height:115px; 
border:1px solid #e74c3c;
margin-bottom:0px;
display:flex;
color:white;
border-bottom:0px;
align-items:flex-end;
justify-content:center;
position:relative;
h3{
    margin-bottom:0;
    text-transform:uppercase
};
 `