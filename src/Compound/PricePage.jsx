import React, { useEffect } from "react";
import { useContext } from "react";
import { UseRegContext } from "../../useContext/UseRegContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const PricePage = ()=>{
  const navigate = useNavigate()
  
  const {SavePlanned,CompleteData} =useContext(UseRegContext)
  const handleSelction = async(plan)=>{
    console.log(plan)
    SavePlanned(plan)
  
  }
  const BackendUrl = "http://localhost:3000/users"
  
const verify = CompleteData()


const handleBacked = async()=>{
const request = await axios.post(BackendUrl,verify)
const respone= await request.data
console.log("Backend Stored data",respone)
  if (respone.status === "Backend Stored data") {
      navigate('/song')
    } else {
      alert("Not found");
    }
}


    return(
        <>
        
        

       <div className="container">
        <h4>Select Plan</h4> <button className="btn btn-outline-primary" onClick={handleBacked}>Click</button>
        <div className="container text-center">
<div className="row">
    <div className="col">
        <div className="card" style={{width:'400px',height:'300px'}}>
  <div className="card-header">
    <h3 className="bg-primary p-4 text-white">Free Trial</h3>
  </div>
  <ul className="list-group list-group-flush">
    <h5>Explres in 24 hours</h5>
    <li className="list-group-item">Max file size : 5 MB</li>
    <li className="list-group-item">OCR Support : Yes</li>
    <li className="list-group-item">Customer Support: No</li>
     <li className="list-group-item">Total Session : UNLIMITED</li>
     <button className="btn btn-outline-success" onClick={()=>{handleSelction('Free')}}> Free </button>
  </ul>
</div>
    </div>
      <div className="col">
        <div className="card"style={{width:'400px',height:'300px'}}>
  <div className="card-header">
    <h3 className=" bg-primary text-center p-4 text-white"> Pro</h3>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Rs 999/week</li>
    <li className="list-group-item">Max file size : 5 MB</li>
    <li className="list-group-item"> OCR Support : Yes</li>
        <li className="list-group-item"> Customer Support : Yes (Email)</li>
        <li className="list-group-item"> Total Session : UNLIMITED</li>
        <button className=" text-center btn btn-outline-success" onClick={()=>{handleSelction('Silver')}}> Silver</button>
        
  </ul>
</div>
      </div>
   
        <div className="col">
            <div className="card" style={{width:'400px',height:'300px'}} >
  <div className="card-header">
    <div className="bg-primary text-center p-4 text-white">Advanced</div>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Rs 3499/week</li>
    <li className="list-group-item"> Max file size : 5 MB</li>
    <li className="list-group-item">OCR support : Yes</li>
    <li className="list-group-item">Customer support : Yes(Email)</li>
       <li className="list-group-item">Total session : UNLIMITED</li>
       <button type="submit" className="text-center  btn btn-outline-success" onClick={()=>{handleSelction('Gold')}}>Gold</button>
  </ul>
</div>
        </div>
</div>




        </div>



       </div>


        
        </>
    )
}
export default PricePage;