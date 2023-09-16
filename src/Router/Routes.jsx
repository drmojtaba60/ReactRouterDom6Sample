import React from 'react';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Team from '../Pages/Team';
import Mission from '../Pages/Mission';
import { Routes,Route } from 'react-router-dom';

const Layout3=React.lazy(()=>import('../Layouts/Layout3'));


const AppRoutes=()=> 
    <Routes>
        <Route path="/" element={<Layout3 />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="team" element={<Team />} />
            <Route path="mission" element={<Mission />} />
          </Route>
        </Route>
      </Routes>;
export default AppRoutes;