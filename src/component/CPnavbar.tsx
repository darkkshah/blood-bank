import { NavLink } from "react-router-dom";
import './CPnavbar.css';

export default function CPNavbar() {  
  return (
    <div>
      <div  className="navbar" id="call">
        <div className="nav">
         <NavLink to="/">HOME</NavLink>
         <NavLink to="/signIn">LOGIN</NavLink>
         <NavLink to="/dashboard">DASHBOARD</NavLink>
        </div>
    </div>
    </div>
  )
}
