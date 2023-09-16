import './layout.css'; 

const Layout2=(props)=>
{
    return <div className='layout2'>
        <div className='content'>

        <h1>Layout Index 2</h1>
        <div>
            {props.children}
        </div>
        </div>
    </div>;
}
export default Layout2;