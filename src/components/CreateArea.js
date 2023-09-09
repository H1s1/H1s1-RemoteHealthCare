import React, { useState } from "react";

function CreateArea(props) {
  const [patient, setPatient] = useState({
    Name: "",
    img: "",
    Age: "",
    bg: "",
    gender: "Male", // Default gender is Male
    Symptoms: ""
  });

  function addPatient(event) {
    const { name, value } = event.target;
    setPatient((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      // Handle file upload here, you can use FileReader to convert it to a base64 string
      const reader = new FileReader();
      reader.onloadend = () => {
        setPatient((prevValue) => ({
          ...prevValue,
          img: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  }

  function handleClick(event) {
    props.onAdd(patient);
    setPatient({
      Name: "",
      img: "",
      Age: "",
      bg: "",
      gender: "Male",
      Symptoms: ""
    });

    event.preventDefault();
  }

  return (
    <form>
      <label className="heading">Add New Patient</label>
      <div className="CreateArea">
        <input name="Name" placeholder="Patient Name" onChange={addPatient} value={patient.Name} />
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <input name="Age" placeholder="Patient Age" onChange={addPatient} value={patient.Age} />
        <label>Blood Group</label>
        <select name="bg"  onChange={addPatient} value={patient.bg} >
           <option value="B+">A+</option>
           <option value="B+">B+</option>
           <option value="B+">AB+</option>
        </select> 
        <label>Gender</label>
        <select name="gender" onChange={addPatient} value={patient.gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Transgender">Transgender</option>
        </select>
        <textarea name="Symptoms" placeholder="Patient Symptoms" onChange={addPatient} value={patient.Symptoms} />
      </div>
      <button onClick={handleClick}>Add</button>
    </form>
  );
}

export default CreateArea;
