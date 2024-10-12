import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './home';
import Test from './test';

const Main = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/test' element={<Test/>}></Route>
            </Routes>
        </Router>
    );
}

export default Main;