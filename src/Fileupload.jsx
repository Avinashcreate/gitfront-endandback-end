import React from "react";
import { useState } from "react";


const Fileupload = ()=>{
  const[saveTerFile,setTrigger] = useState()
  const[saveFileSize,setFileSize] =useState()
  
  const MaxFileSize = 5 * 1024*1024
const allowedFile = ["application/pdf","application/doc","application/docx","image/jpg","image/jpeg","image/jpeg","application/vnd","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]

  const handleFile = (e)=>{
    const uploadFile = e.target.files[0];
  console.log(uploadFile.type)  
  if(uploadFile){
    if(!allowedFile.includes(uploadFile.type)){
setTrigger("Not a valid File")
    }
    if(uploadFile.size > MaxFileSize.size){
setFileSize("File size exceeded")
    }
  }
}
    return(
        <>
      <div className="container">
  <h1>File Upload</h1>
      <div className="card" style={{width:"300px",height:"300px"}}>
  <div className="card-body">
    <h5 className="card-title text-center">Choose File</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">
        <input type="file" onChange={handleFile} />
        <h4 className="text-center">{saveTerFile}</h4>
        <h4 className="text-center mt-4">{saveFileSize}</h4>
        <div className="container">
          <button type="submit"className=" btn btn-primary" disabled="true">Submit</button>
        </div>
    </h6>

    
  </div>
</div>

      </div>
        
        </>
    )
}
export default Fileupload;