import logo from '@/assets/img/logos/csis.png';
import { useState } from 'react';
import user from '@/assets/img/user.jpg';
const SideBar =(props)=>
{
  const [inactive,setInactive]=useState(false);

  return <div className={`sidebar ${inactive ? "inactive" : ""}`}>
          <div className="top-section">
              <div className="logo">
                <img src={logo} />
              </div>
              <div className='toggle-menu-btn' 
                onClick={()=>setInactive(!inactive)} >
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
                      <a href="">
                       <span>Course</span> 
                        </a>
                    </li>
                    <li >
                      <a href="">
                      <span>Videos</span> 
                      </a>
                    </li>
                  </ul>
                </li>
                
                <li>
                  <a href="" className="menu-item">
                    <div className="menu-icon">
                      <i className="bi bi-vector-pen"></i>
                    </div>
                    <span>Product List</span>
                  </a>
                </li>

              </ul>      
          </div>

          <div className="sidebar-menu-footer">
              <div className="avatar">
                <img src={user} alt="user" />
              </div>
              <div className="user-info">
                <h5>Mojtaba Shaghi</h5>
                <p>mojtaba.shagi@gmail.com</p>
              </div>
          </div>
         </div>;
}

export default SideBar;