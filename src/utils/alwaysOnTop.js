import { useEffect } from "react";

export const AlwaysOnTop = () =>{
    useEffect(()=>{
        window.scroll(0, 0);
    },[])
}