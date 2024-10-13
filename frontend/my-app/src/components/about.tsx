import React from 'react';
//import './App.css';
import logo from '../img/Show_and_Tell_Logo.png';

export default function About() {
    return (
        <div> 
            <h1 style={{textAlign: 'left', marginTop: '1rem', marginLeft: '1rem', color: '#359dcf'}}><a href="./">Back to Home</a></h1>
            <h1 style={{textAlign: 'center', marginTop: '3rem', color: '#359dcf', fontSize: '30px'}}>About Us</h1> 
            <h1 style={{textAlign: 'center', marginTop: '2rem', fontSize: '18px'}}> Welcome to Show & Tell! We're a website dedicated towards giving people a place to share and be inspired by projects of all kinds. </h1>
            <div className="justify-center flex">
                <img src={logo} alt="Show And Tell" width="500" className=""></img>
            </div>
        </div>
    )
    
}

