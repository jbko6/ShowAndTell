import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './home';
import Test from './test';
import About from './about';
import Postinginfo from './postinginfo';

const Main = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/test' element={<Test/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/postinginfo' element={<Postinginfo/>}></Route>
            </Routes>
        </Router>
    );
}

export default Main;