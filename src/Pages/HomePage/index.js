import React, {useState, useEffect} from 'react';
import {HomeIntro, HomeAbout, StartBtn, StartBtnLink} from './HomePageElements'
import homepageart from './Images/Homepage material.svg'
//HomePage
const Home =()=> {

  return(
    <>
      <HomeIntro>
        <h1>Kacher Doroja</h1>
        <p>Bangladesh's first employee and employer platform.
        <br/> We aim to energize and improve the job market
         present here in <b>Bangladesh.</b> </p>
        <img src={homepageart} alt="art"/>
        <StartBtn>
          <StartBtnLink to='/signin'> Get Started </StartBtnLink>
        </StartBtn>
      </HomeIntro>
      <HomeAbout>
        <h3></h3>
      </HomeAbout>

    </>
  )
}

export default Home;
