import React, { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes, Outlet} from 'react-router-dom';
const Layout =React.lazy(()=>import('./Layouts/Layout'));
const Layout2 =React.lazy(()=>import('./Layouts/Layout2'));
import useStorage from './Components/Hooks/UseStorage';
import Home from './Pages/Home';
import About from './Pages/About';
import Team from './Pages/Team';
import Mission from './Pages/Mission';
import AppRoutes from './Router/Routes';
const Layout3=React.lazy(()=>import('./Layouts/Layout3'));
//const Layout22 =import(()=>'./Layouts/Layout2');--incorrect way
//import Layout2 from './Layouts/Layout2';





function App() {
  const {storage,changeLayout}= useStorage();
  let LayoutDefault=storage =='layout' ? Layout : Layout2;
  window.changeLayoutEvent=function()
  {
    LayoutDefault=''
    changeLayout(storage=='layout' ? 'layout2' : 'layout');
    LayoutDefault=storage =='layout' ? Layout : Layout2;
  }
  function getRoute0()
  {
    return (
      <LayoutDefault>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="team" element={<Team />} />
            <Route path="mission" element={<Mission />} />
          </Route>
        </Route>
      </Routes>
      </LayoutDefault>
    );
  }
  function getRoute1()
  {
    return (
      <Routes>
        <Route path="/" element={<Layout3 />}>
          <Route index path="" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="team" element={<Team />} />
            <Route path="mission" element={<Mission />} />
          </Route>
        </Route>
      </Routes>
      
    );
  }
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;


