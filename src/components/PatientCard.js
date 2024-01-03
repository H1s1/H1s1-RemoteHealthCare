import React from "react";

const PatientCard = (props)=>{

    function handelDelete(){
        props.onDelete(props.id);
    }
       const  {key ,id ,Name,img,Age,bg,gender,Symptoms} = props ;

       return (

   <div className="PatientCard">
    <div className="top">
       <div className="name">{Name}</div>
       <img className="circle-img" src= {img} alt="NO-imgURl"></img>
    </div>
    <div className="bottom">
       <div className="info">Age : {Age}</div>
       <div className="info">BloodGrp : {bg}</div>
       <div className="info">Gender : {gender}</div>
       <div className="info">Symptoms : {Symptoms}</div>
    </div>
       <button onClick={handelDelete} className="delete">Delete</button>
   </div>

   )
}
export default PatientCard;