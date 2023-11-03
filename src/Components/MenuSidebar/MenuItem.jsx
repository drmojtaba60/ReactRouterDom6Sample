import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export const MenuItem=props=>
{
    const {name,children,icon,to}=props?.item;
    const [expand,setExpand]=useState(false);
    return <li onClick={props.eventActive}>
            <NavLink
                to={to}
                 onClick={()=>{if(children && children.length) {event.preventDefault(); setExpand(!expand);}}} className="menu-item">
            <div className="menu-icon">
                {icon}
            </div>
            <span>{name}</span>
            </NavLink>
            {
                children && children.length ?(
                    <ul className={`sub-menu ${expand ? "active" : ""}`}>
                    {
                        children.map((menu,index)=>(
                            <li key={index}>
                                <NavLink to={menu.to}>{menu.name}</NavLink>
                            </li>
                        )
                        )
                    }
                    </ul>
                    
                )
                : null
            }
        </li>;
}