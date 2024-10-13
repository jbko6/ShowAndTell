import React from 'react';
// import './App.css';
import Navbar from '../landing/navbar';
import Hero from '../landing/hero';
import Examples from '../landing/examples';

export default function Landingpage() {
    return(
        <div>
            <Navbar />
            <Hero />
            <Examples />
        </div>
    )
}