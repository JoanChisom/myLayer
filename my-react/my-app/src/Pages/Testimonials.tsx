import styled from "styled-components"
import quote from "../assets/images/quote-cl.png"
import pic1 from "../assets/images/testimonial1.png"
import {FaStar} from "react-icons/fa"
import {IconContext} from "react-icons"

const Testimonials = ()=>{
    return(
        <div>
            <Container>
                <Wrapper>
                    <Left>
                        <img src={quote} width="15%" alt="a quote"/>
                        <h1>The Best Template You Got It!</h1>
                        <div>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quas dicta earum quisquam rerum ratione natus? Culpa temporibus ipsam, nisi placeat, dolor necessitatibus, aliquam explicabo quaerat quam cumque commodi maxime omnis.</p>
                        <i> - CEO of CodeLab Set08</i>
                    </Left>
                    <Right><img src={pic1} width="80%"/></Right>
                </Wrapper>
            </Container>
        </div>
    )
};
export default Testimonials;
const Right = styled.div`
width:45%;
// background-color:yellow
`


const Left = styled.div`
width:50%;
display:flex;
flex-direction:column;
justify-content:center;
h1{
    margin-top:9px;
    margin-bottom:10px;
};
p{
    line-height:26px;
};
i{
    font-size:20px;
    color:#e74c3c;
    font-weight:bold;
};
div{
    display:flex;
    color:orange
}
`


const Wrapper = styled.div`
width:85%;
display:flex;
justify-content:space-between;`


const Container = styled.div`
width:100%;
display:flex;
justify-content:center;
margin-top:38px;
align-items:center;
`
