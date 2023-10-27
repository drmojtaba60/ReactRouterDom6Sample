import logo from '@/assets/img/logos/csis.png';
import { useState } from 'react';
const SideBar =(props)=>
{
  const [inactive,setInterval]=useState(false);

  return <div className={`sidebar ${inactive ? "inactive" : ""}`}>
          <div className="top-section">
              <div className="logo">
                <img src={logo} />
              </div>
              <div className='toggle-menu-btn' 
                onClick={()=>setInterval(!inactive)} >
                  {
                   inactive 
                        ? <i className="bi bi-arrow-left-square-fill"></i>
                        :<i className="bi bi-arrow-right-square-fill"></i>
                  }
               
              </div>
          </div>
          <div className="search-controler">
            <button>
              <i className="bi bi-search"></i>
            </button>
            <input type="text" placeholder='جستجو' />
          </div>

          <div className="divider"></div>

          <div className="main-menu">
              <ul>
                <li>
                  <a href="" className="menu-item">
                    <div className="menu-icon">
                      <i className="bi bi-speedometer2"></i>
                    </div>
                    <span>Dashboard</span>
                  </a>
                </li>

                <li>
                  <a href="" className="menu-item">
                    <div className="menu-icon">
                      <i className="bi bi-newspaper"></i>
                    </div>
                    <span>Contents</span>
                  </a>
                  <ul className="sub-menu">
                    <li >
                      <a href="">Course</a>
                    </li>
                    <li >
                      <a href="">Videos</a>
                    </li>
                  </ul>
                </li>

              </ul>      
          </div>

          <div>

          </div>
         </div>;
}

export default SideBar;