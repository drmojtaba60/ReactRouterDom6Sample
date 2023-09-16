import { Outlet } from "react-router-dom";
import useStorage from "../Components/Hooks/UseStorage";

export default function About() {
    const clickHandler=()=>
    {
      window.changeLayoutEvent();
    }
    return (
      <>
        <h1>About us</h1>
        <button onClick={clickHandler}>Switch Layout</button>
        <Outlet />
      </>
        
    );
  }
  