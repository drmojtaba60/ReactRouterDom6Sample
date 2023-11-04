import { useEffect, useState } from 'react';
import logo from '@/assets/img/logos/csis.png';
import user from '@/assets/img/user0.jpg';
import {MenuItem} from '@/Components/MenuSidebar/MenuItem'
const SideBar =(props)=>
{
  const menuItems=[
    {name:'Dashboard',to:'/',icon:<i className="bi bi-speedometer2"></i>},
    {name:'About',icon:<i className="bi bi-newspaper"></i>,
    children:[
      {name:'Team',to:'/about/team',icon:<i className="bi bi-search"></i>},
      {name:'Mission',to:'/about/mission',icon:<i className="bi bi-search"></i>}
    ]
    },
    {name:'ProductList',to:'/products',icon:<i className="bi bi-vector-pen"></i>},
  
];
  const [inactive,setInactive]=useState(false);
  useEffect(()=>
    {
      props.changeInActive(inactive);
    }
  ,[inactive]);
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
                  {
                    menuItems.map((item,posIndex)=><MenuItem 
                                                    item={item} 
                                                    key={posIndex}
                                                    eventActive={()=>{if(inactive) setInactive(false);}} 
                                                    />)
                  }
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