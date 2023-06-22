import React, { useState } from "react";


 function CreateArea(props){
  
   const [patient ,setPatient] = useState({
      Name:"",
      img:"",
      Age:"",
      bg:"",
      gender:"",
      Symptoms:""
   });
  

   function addPatient(event){
        const{ name , value} = event.target ;
        setPatient( (preValue)=>{
         return {
            ...preValue,
            [name]: value
         };
        });
      }
      
      function handelClick(event){
         props.onAdd(patient)
         setPatient({
            Name:"",
            img:"",
            Age:"",
            bg:"",
            gender:"",
            Symptoms:""
         })
         
      event.preventDefault();
   }
   return (
      <form >
      <lable className ="heading">Add New Patient</lable>
      <div className="CreateArea">
       <input  name="Name" placeholder="Patient-Name" onChange={addPatient} value={patient.Name}/>
       <input  name="img" placeholder="img-URL"  onChange={addPatient} value={patient.img}/>
       <input  name="Age" placeholder="Patient-Age"  onChange={addPatient} value={patient.Age}/>
       <input  name="bg" placeholder="Patient-BloodGrp" onChange={addPatient} value={patient.bg}/>
       <input  name="gender" placeholder="Patient-Gender" onChange={addPatient} value={patient.gender}/>
       <textarea name="Symptoms" placeholder="Patient-symtoms"  onChange={addPatient} value={patient.Symptoms}/>
       </div>
       <button onClick={handelClick}>Add</button>
    </form>)
 }

 export default CreateArea