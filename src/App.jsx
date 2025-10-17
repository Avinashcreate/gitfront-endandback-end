import React, { useState ,useEffect} from "react";
import Registerform from "./Compound/Registerform";
import PricePage from "./Compound/PricePage";
import {Routes,Route, Link, Navigate} from 'react-router-dom'
import LoginForm from "./Compound/LoginForm";
import Usernotfound from "./Usernotfound";

import Api from "./Api";
import SongPage from "./SongPage";
import Filequsetion from "./Filequset";



const App = ()=>{
  const[userAuth,setAuthor] = useState("false")

useEffect(()=>{
    const checkToken = ()=>{
      const tokenJwt  = localStorage.getItem("JWT")
    setAuthor(tokenJwt !==null)
    }
    window.addEventListener("JWT",checkToken())
})
  return(
    <>
    <div className="container ">
  <h1 className="text-center">  Songs </h1>
  
<Routes>
  

  <Route path="/" element={<Registerform/>}></Route>
  <Route path="/price" element={<PricePage/>}></Route>
 <Route path="/login" element={<LoginForm  />}></Route>
<Route path="/file" element = {<Filequsetion/>}></Route>
 <Route path="/401" element={<Usernotfound/>}></Route>
<Route path="/song" element = {<SongPage/>}></Route>
 <Route path="/product" element = {userAuth ? <Filequsetion/> :<Navigate to ="401"/>}></Route>
</Routes>

    </div>

    </>
  )
}
export default App;