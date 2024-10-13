import React from 'react';
// import './App.css';
import sBlock from '../img/S_Block.png';
import tBlock from '../img/T_Block.png';

export default function Postinginfo() {
    return(
        <div>
            <div className="h-screen w-screen grid grid-cols-3 grid-rows-3 gap-3 justify-items-center outline">
                <div></div>
                <div>
                    <h1 style={{textAlign:'center', fontSize:'25px', marginTop: '5rem'}}>Welcome to Show & Tell!<br></br>These are your days to share!</h1>
                </div>
                <div></div>
                <div>
                    <img src={sBlock} alt="Show And Tell S Block" width="320" className=""></img>
                </div>
                <div className="outline w-full">
                    <h1 style={{textAlign: 'center', fontSize: '18px'}}>10/13<br></br><br></br>10/31</h1>
                </div>
                <div>
                    <img src={tBlock} alt="Show And Tell T Block" width="350" className=""></img>
                </div>
                <div></div>
                <div>
                    <h1 style={{textAlign: 'center', fontSize: '18px', color: '#359dcf'}}> <a href="./">Home</a></h1>
                </div>
            </div>
            {/*<h1 style={{textAlign:'center', fontSize:'25px', marginTop: '1rem'}}>Welcome to Show & Tell! These are your days to share!</h1>*/}
        </div>
        
    )
}