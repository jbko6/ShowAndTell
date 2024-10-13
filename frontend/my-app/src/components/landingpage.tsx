import React, { useEffect, useState } from 'react';
// import './App.css';
import Navbar from '../landing/navbar';
import Hero from '../landing/hero';
import Examples from '../landing/examples';

export default function Landingpage() {
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        fetch('/api/user', {credentials: 'include'})
            .then(response => response.text())
            .then(body => {
                if (body == '') {
                    setAuthenticated(false);
                } else {
                    setAuthenticated(true);
                    window.location.href = window.location.origin + "/feed";
                }
            })
    }, [setAuthenticated]);

    return(
        <div>
            <Navbar />
            <Hero />
            <Examples />
        </div>
    )
}