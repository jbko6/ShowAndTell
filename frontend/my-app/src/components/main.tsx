import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './home';
import Group from './group';
import Landingpage from './landingpage';
import About from './about';
import Postinginfo from './postinginfo';
import Welcome from './welcome';
import AddGroups from './addgroups';
import Choose from './choose';

const Main = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/group' element={<Group/>}></Route>
                <Route path='/landingpage' element={<Landingpage/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/postinginfo' element={<Postinginfo/>}></Route>
                <Route path='/welcome' element={<Welcome/>}></Route>
                <Route path='/addgroups' element={<AddGroups/>}></Route>
                <Route path='/choose' element={<Choose/>}></Route>
            </Routes>
        </Router>
    );
}

export default Main;