import { useEffect, useState } from "react"

function useStorage()
{
    // if(!window.localStorage.getItem('layout'))
    //             window.localStorage.setItem('layout','layout');
    const [storage,setStorage]=useState();
    const changeLayout=(layout)=>
    {
        setStorage(window.localStorage.getItem('layout')??'');
        window.localStorage.setItem('layout',layout);
    }
    useEffect(
        ()=>
        {
            
            if(!window.localStorage.getItem('layout'))
                window.localStorage.setItem('layout','layout');
            setStorage(window.localStorage.getItem('layout')??'');
            console.log('storage',storage);
        }
    ,[window.localStorage.getItem('layout')]);

    return {storage,changeLayout};
}

export default useStorage;