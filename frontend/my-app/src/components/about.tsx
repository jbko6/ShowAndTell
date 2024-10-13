import React from 'react';
//import './App.css';
import logo from '../img/Show_and_Tell_Logo.png';
import appIcon from '../img/STlogo.png';

export default function About() {
    return (
        <div> 
            <h1 style={{textAlign: 'left', marginTop: '1rem', marginLeft: '1rem', color: '#359dcf'}}><a href="./">Back to Home</a></h1>
            <h1 style={{textAlign: 'center', marginTop: '3rem', color: '#359dcf', fontSize: '30px'}}>About Us</h1> 
            <h1 style={{textAlign: 'center', marginTop: '2rem', fontSize: '18px'}}> Welcome to Show & Tell! We're a website dedicated towards giving people a place to share their projects and be inspired by the works of others. </h1>
            <div className="justify-center flex">
                <img src={logo} alt="Show And Tell" width="500" className=""></img>
            </div>
            <h1 style={{textAlign: 'justify', marginLeft: '20rem', marginRight: '20rem', marginBottom: '3rem', fontSize: '18px'}}>
                Have you ever had a project you wanted to share? Tired of your posts getting lost in the aether of the internet? Well, look no further!
                We connect people to a group of 50 others who share your hobbies. From art and writing, to coding and cooking, you can contribute to it all. 
                Your can even get into the nitty gritty of it, categories such as art giving you spaces specific to oil painting or pen and ink if you so choose.
                <br></br><br></br>Share your progress on your projects every ten days, you and four others taking up the spotlight for the day.
                Never again will your works be lost to the masses.
                <br></br><br></br>Challenge yourself! Make progress on your works! Get inspiration!
            </h1>
            <h1 style={{textAlign: 'center', marginBottom: '3rem', fontSize: '25px', color: '#649b50'}}><a href="./landingpage">Join our Communities Today.</a></h1>
        </div>
    )
    
}

