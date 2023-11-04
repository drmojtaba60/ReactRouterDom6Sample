import { Link, Outlet } from 'react-router-dom';
import './layout.css'; 
import SideBar from '../sidebar';
import { useState } from 'react';

const Layout3=(props)=>
{
    const [inactive,setInactive]=useState(false);
    return <>
            <SideBar changeInActive={val=>setInactive(val)}/>
            <div className={`container ${inactive&&"inactive"}`  }>
            <Outlet/>

            </div>
          </>;
}
export default Layout3;



{/* <div>
        
        <h1 className="text-3xl font-bold underline text-blue-700">Layout Index 2</h1>
        <div className='content'>
       
        <ul style={{display:'flex',flexDirection:'row',gap:'3rem',listStyle:'none'}}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>about</Link>
            </li>
            <li>
                <Link to='/about/team'>about team</Link>
            </li>
            <li>
                <Link to='/about/mission'>about mission</Link>
            </li>
        </ul>
        <div>
            <Outlet />
        </div>
        </div>
    </div> */}