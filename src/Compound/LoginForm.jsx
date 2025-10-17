import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginForm = ()=>{
  const navaigate = useNavigate()
  const[loginData,setLogin] = useState({
email:'',
password:"",
  })
  const[valideUser,setAunthen] = useState("false")

  const[tempData,setTempData] = useState([])
  // Input Catching data
  const handleCatch = (e)=>{
const name = e.target.name
const userName = e.target.value
setLogin({...loginData,[name]:userName})

  }
  // Onclick Loin data check email verify 
  const handleVerify = async()=>{
 try{
   setTempData([tempData],loginData)
    console.log(loginData);
    const requsetData = await axios.post("http://localhost:3000/login/verifydata",loginData);
    const respone  =  requsetData.data;
    const saveJwt = respone.token;
 setAunthen(localStorage.setItem("JWT",saveJwt));
 window.dispatchEvent(new Event("new Token Updated"))
    if(respone.message){
      navaigate('/song')
    }
    else{
      alert(respone.message)
    }
   
 }
 catch(e){
console.error("Server error:", e);

 }
  }

    return(
        <>
        <div className="d-flex justify-content-center mt-5">
<div className="card " style={{width:"400px",height:'300px'}} >
  <div className="card-body">
    <h4 className="card-title text-center">Login Account</h4>
    <h6 className="card-subtitle mb-2 text-body-secondary text-center mt-2"></h6>
   <label>
    Email : <input type="email" name="email" className="form-control mt-2" placeholder="Enter You Email" onChange={handleCatch} />
   </label><br></br>
      <label>
    Password: <input type="password" name="password" placeholder="Enter You Password" className="form-control " onChange={handleCatch}/>
   </label><br></br>
     <button type="submit" className="btn btn-outline-primary"  onClick={handleVerify}>Login</button>
  </div>
</div>
       
        </div>
       
        </>
    )
}

export default LoginForm;