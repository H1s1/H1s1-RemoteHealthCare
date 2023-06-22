import React ,{useState} from "react";
import CreateArea from './CreateArea';
import Header from './Header';
import PatientCard from './PatientCard';

const Dbms = () => {
  

   const [Patients , setPatients] = useState([]);

   function addPatient(newPatient){
     setPatients((preValues) =>{
       return [...preValues , newPatient]
     })
   }
 
   function deletePatient(id){
     setPatients((prevPatients) =>{
       return prevPatients.filter((pdetail , Index)=>{
         return Index !== id ;
       });
     });
   }
   return (
      <div >
      
       <CreateArea onAdd ={addPatient} />
       {Patients.map((e , index) =>{
        return (
      <PatientCard 
         key = {index}
         id = {index}
         Name = {e.Name}
         img = {e.img}
         Age = {e.Age}
         bg = {e.bg}
         gender = {e.gender}
         Symptoms = {e.Symptoms}
         onDelete = {deletePatient}
      />
        )
       })}
      </div>

   );

}

export default Dbms;