import React from 'react'
import styled from "styled-components"
import { AiOutlineMail } from "react-icons/ai"
import { BiMenu, BiSearch } from "react-icons/bi"
import {useState} from "react"
import blackLogo from "../assets/images/logo-dark.png"

const Header = () => {
    const [header, setHeader] = useState(false)

    const changeHeader=()=>{
        const scroller = window.pageYOffset
        if(scroller >= 150){
            setHeader(true)
        }else{
            setHeader(false)
        }
    }
    window.addEventListener("scroll", changeHeader)

  return (
    <div>
        {header ? (
        <Container bg="white" po="fixed" cl="black" bd="none" bx="0px 0px 30px #ebebebff">
      <Wrapper>
        <Menu><BiMenu /></Menu>
        <Logo1 src={blackLogo} />
        
        <Navhold>
          <Navs cl="black">Home</Navs>
          <Navs cl="black">Features</Navs>
          <Navs cl="black">How it works</Navs>
          <Navs cl="black">Screenshots</Navs>
          <Navs cl="black">Team</Navs>
          <Navs cl="black">News</Navs>
          <Navs cl="black">Extras+</Navs>
          <Icon><AiOutlineMail /></Icon>
        </Navhold>
        <Search><BiSearch /></Search>
      </Wrapper>
    </Container>
        
    ) : (
        <Container bg="transparent" po="fixed" cl="white" bd="none" bx="none">
      <Wrapper>
        <Menu><BiMenu /></Menu>
        <Logo src='https://zozothemes.com/html/layer/demo/images/logo-color.png' />
        
        <Navhold>
          <Navs cl="">Home</Navs>
          <Navs cl="">Features</Navs>
          <Navs cl="">How it works</Navs>
          <Navs cl="">Screenshots</Navs>
          <Navs cl="">Team</Navs>
          <Navs cl="">News</Navs>
          <Navs cl="">Extras+</Navs>
          <Icon><AiOutlineMail /></Icon>
        </Navhold>
        <Search><BiSearch /></Search>
      </Wrapper>
    </Container>
    )}
    </div>
  )
}


export default Header;

const Search = styled.div`
  font-size: 30px;
  color: red;
  display:none;
  @media screen and (max-width: 768px){
    display:flex;
  };
  @media screen and (max-width: 425px){
    display:flex;
    color:#e74c3c;
  }
`
const Menu = styled.div`
  font-size: 35px;
  color: #fff;
  cursor: pointer;
  display:none;
  @media screen and (max-width: 768px){
    display:flex;
    color:#e74c3c;
  }
  @media screen and (max-width: 425px){
    display:flex;
    color:#e74c3c;
  }
`
const Icon = styled.div`
  color: red;
  font-size: 30px;
  margin-left: 20px;
  margin-top: 5px;
  @media screen and (max-width 768px){
    display:none;
  };
  @media screen and (max-width: 425px){
    display:flex;
    color:none;
  }
`
const Navs = styled.h4<{cl:string}>`
  text-transform: uppercase;
  cursor:pointer;
  color:${({cl})=>cl};
  margin-left: 30px;
  &:hover{
    color:#e74c3c;
  };
`
const Navhold = styled.div`
  display: flex;
  align-items: center;
  

  @media screen and (max-width: 768px) {
    display: none;
  };
  @media screen and (max-width: 425px) {
    display: none;
  };
`
const Logo1 = styled.img`
  height: 35px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
  @media screen and (max-width: 425px) {
    display: flex;
  }
`

const Logo = styled.img`
  height: 35px;
 
`
const Wrapper = styled.div`
  display: flex;
  width: 85%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`
const Container = styled.div<{bg:string, po:string, cl:string, bd:string, bx?:string}>`
  display: flex;
  width: 100%;
  height: 80px;
  color:${({cl})=>cl};
  background-color: ${({bg})=>bg};
  justify-content: center;
  position: ${({po})=>po};
  border-bottom:${({bd})=>bd};
  box-shadow: ${({bx})=>bx} ;
  z-index:1;
  @media screen and (max-width: 425px){
    background-color:white;
    color:black;
    position:fixed;
  };
`