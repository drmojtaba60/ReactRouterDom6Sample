import { Link, Outlet } from 'react-router-dom';
import './layout.css'; 

const Layout3=(props)=>
{
    return <div className='layout3'>
        <div className='content'>

        <h1>Layout Index 2</h1>
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
    </div>;
}
export default Layout3;