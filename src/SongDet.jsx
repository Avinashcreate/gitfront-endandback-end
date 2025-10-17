import React from "react";


const SongDet = ({songSave})=>{
    return(
        <>
<div className="container mt-4">
    <div className="row">
        {songSave.map((data, index) => {
  return (
    <div className="col-4" key={index} style={{width:"300px",height:'300px'}}>
      <div className="card">
        <img src={data.image}  style={{width:"200px",height:"100px"}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.songname}</h5>
          <p className="card-text">
            
          </p>
          <a href={data.Url} className="btn btn-primary">Go to Song</a>
        </div>
      </div>
    </div>
  );
})}

                
                
          
    </div>
</div>

        </>
    )
}
export default SongDet;