// eslint-disable-next-line
import React from "react";
import { Link , useLocation} from "react-router-dom";

const Header = ()=> {
   const location = useLocation();
   const { pathname } = location;
 
   const getHeading = () => {
     switch (pathname) {
       case "/":
         return "Home";
       case "/dbms":
         return "DBMS";
       case "/vc":
         return "VC";
       case "/sensors":
         return "Sensors";
       default:
         return "Patient DataBase";
     }
   };
   return (
   <div className="navbar">
   <h1 className="navbar-heading">{getHeading()}</h1>
   <ul className="navbar-links">
      <li><Link  to="/">Home</Link></li>
      <li><Link to="/dbms">DBMS</Link></li>
      <li><Link to="/vc">VC</Link></li>
      <li><Link to="/sensors">Sensors</Link></li>
   </ul>
   </div>  
   )
}

export default Header;