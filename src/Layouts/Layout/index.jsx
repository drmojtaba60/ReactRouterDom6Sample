import './layout.css'; 

const Layout=(props)=>
{
    return <div className='layout'>
        <div className='content'>

        <h1>Layout Index</h1>
        <div>
            {props.children}
        </div>
        </div>
    </div>;
}
export default Layout;