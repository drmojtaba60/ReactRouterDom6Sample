import logo from '@/assets/img/logos/csis.png';
const SideBar =(props)=>
{
  return <div className="sidebar inactive">
          <div className="top-section">
              <div className="logo">
                <img src={logo} />
              </div>
              <div className='toggle-menu-btn'>
               <i className="bi bi-arrow-left-square-fill"></i>
              </div>
          </div>
          <div className="search-controler">
            <button>
              <i className="bi bi-search"></i>
            </button>
            <input type="text" placeholder='جستجو' />
          </div>

          <div className="divider"></div>
         </div>;
}

export default SideBar;