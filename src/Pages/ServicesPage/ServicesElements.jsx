import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const HomeIntro = styled.div `
    padding-top: 30px;
    padding-left: 30px;
    font-size: 350%;
    background-color: #fafafa;
    height: 500px;
    font-weight: bolder;

    h1{
      padding-top: 80px;
      padding-left: 10px;
      position:relative;
      z-index:11;
    }
    p{
      line-height: 1.5;

      padding: 20px;
      font-size: 30%;
      color: #404040;
      position:relative;
      z-index:10;
    }

    img{
      position: absolute;
      bottom:29px;
      left: 600px;
      z-index:0;
      max-width: 700px;
    }

  @media screen and (max-width: 768px){
    padding-top: 40px;
    padding-left: 0px;
    font-weight: bolder;
    text-align: center;
    font-size:  200%;
    /* transition: 0.8s all ease; */
    color: #000;
    h1{
      padding-top: 0px;
      padding-left: 0px;
      position:relative;
      z-index:11;
    }
    p{
      max-width: 500px;
      margin: auto;
      padding: 20px;
      text-align: center;

      font-size: 50%;
      color: #404040;
      position:relative;
      z-index:10;
    }
    img{
      position: relative;
      bottom:20px;
      z-index:0;
      max-width: 500px;
      left: 0px;
    }
  }
`

export const HomeAbout = styled.div `
    padding-top: 30px;
    padding-left: 30px;
    font-size: 350%;
    background-color: #101010;
    height: 300px;

  @media screen and (max-width: 768px){
    padding-top: 30px;
    padding-left: 30px;
    font-size: 150%;
    /* transition: 0.8s all ease; */
    color: #000;
  }
`

export const StartBtn = styled.nav `
  padding-left: 30px;
  align-items: center;
  position: absolute;
  @media screen and (max-width: 768px){
    position: relative;
    bottom: 300px;
  }
`

export const StartBtnLink = styled(LinkR) `
  border-radius: 50px;
  background: none;
  white-space: nowrap;
  padding: 10px 22px;
  color: #f2564b;
  border-style: solid;
  border-color: #f2564b;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: #f2564b;
    color: #fff;
  }
`
