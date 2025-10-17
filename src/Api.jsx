import React from "react";
import { useState } from "react";



const Api = ()=>{

const[saveData,setSave] = useState()
    const handleApi = async()=>{
        const requset = await fetch("http://localhost:3000/audio")
        const respone = await requset.json()
        console.log(respone)
        setSave(respone)
    }
        return(
        <>

        <button onClick={handleApi}>Click</button>
        
        </>
    )
}

export default Api