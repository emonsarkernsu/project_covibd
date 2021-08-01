import React, { useState, useEffect } from 'react';
// import {HomeIntro, HomeAbout, StartBtn, StartBtnLink} from './HomePageElements'
import './services.css'
import servicesImage from './Images/services.jpg'
import valuesImg from './Images/values.svg'
import Footer from './Footer';
//HomePage
const Services = () => {

    return (
        <>


            <div class ="mission"> 
            <img src={servicesImage} class ="missionPic"  alt="services" />
            <body>
            <h2>Our Mission</h2>
            <br></br>
            <p>To help people everywhere find a job and company they love.
                We aim to energize and improve the job market
                present here in <b>Bangladesh.</b> </p>
            <br></br>
            </body>
            </div>

            <div class ="values"> 
            <img src={valuesImg} class ="valuesPic"  alt="services" width="60%" height="20%" />
            
            <h2>Our Values</h2>
            <br></br>
            <b>We are transparent.</b> We are open and honest. We share information – the good
            and the bad – so we can continuously learn, collaborate and make the right decisions. <br></br><br></br>
            <b>We are innovative.</b> We actively pursue new and different ways to further KacherDorja's mission.
            We forge our own path by challenging the status quo.<br></br><br></br>
            
            <b> We are good people. </b>We work together with integrity, respect and compassion for one another.
            We have fun together. We are inclusive, fair and humble while remaining confident. We do the right thing, period.<br></br><br></br>

            <b>We have grit.</b> We are resilient, resourceful and scrappy. We see challenges as opportunities.
            With passion and courage, we come together to get the job done.
            </div>
            <div class="about"><h2>About KacherDorja</h2>
            <br></br>
            KacherDorja is the brain child of three college students who set out to change the job industry in
            Bangladesh in an effort to increase transparency between employers and employees.
            <br></br><br></br></div>
            
        <Footer />
        </>
    )
}

export default Services;
