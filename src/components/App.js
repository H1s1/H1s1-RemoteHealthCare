import React ,{useState} from 'react';
import CreateArea from './CreateArea';
import Header from './Header';
import PatientCard from './PatientCard';
import Dbms from "./Dbms";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Vc from './Vc';
import Sensors from './Sensors';



function App() {

  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dbms" element={<Dbms />}/>
        <Route path="/vc" element={<Vc />}/>
        <Route path="/sensors" element={<Sensors />}/>
       
      </Routes> 
    </Router>
    </div>
  );
};

export default App;
