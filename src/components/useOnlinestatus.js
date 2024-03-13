import { useEffect,useState } from "react";

const useOnlinestatus =()=>
{
    const[onlines,setonlines]=useState(true);
    useEffect(()=>{
        window.addEventListener("offline",
        ()=>setonlines(false) );
        window.addEventListener("online",
        ()=>setonlines(true) );
    },[])

    return onlines;
}
export default useOnlinestatus;