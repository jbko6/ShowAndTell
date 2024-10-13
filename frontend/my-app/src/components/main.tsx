import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './home';
import Group from './group';

const Main = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/group' element={<Group/>}></Route>
            </Routes>
        </Router>
    );
}

export default Main;