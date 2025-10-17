import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { UseRegContext } from "../../useContext/UseRegContext";
import {Routes,Route,Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";






const Registerform = ()=>{
 const navigate = useNavigate()
 const {SaveUserReg} = useContext(UseRegContext)
 // Default object
const[saveData,setDate] = useState({
    name:"",
    email:"",
    password:""
})
    


// input box and target value and stored
const[tempData,setTempData] =useState([])
const handleInputCatch = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setDate({...saveData,[name]:value})
}
// Backend Stored Post method
const handleBack  = async()=>{
setTempData([...tempData],saveData)
console.log(saveData);
SaveUserReg(saveData);
if(saveData){
navigate('/price')
}
else{
    console.log("No found")
}





}



    return(
<>
<div className="card">
  <div className="card-body">
    <h5 className="card-title text-center">Create Account</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary text-center"> </h6>
    <p className="card-text">
        <label >Name</label>
        <input type="text"name="name" placeholder="Enter Your Name" className="form-control" onChange={handleInputCatch}/>
    </p>
    <p className="card-text">
        <label >Email</label>
        <input type="email"name="email" placeholder="Enter Your Name" className="form-control" onChange={handleInputCatch}/>
    </p>
       <p className="card-text">
        <label >Password</label>
        <input type="password"name="password" placeholder="Enter Your Name" className="form-control" onChange={handleInputCatch}/>
    </p>
   <button type="submit" className="btn btn-outline-primary" onClick={handleBack}>Create Account</button> 
  </div>
</div>























































</>
    )
}
export default Registerform;