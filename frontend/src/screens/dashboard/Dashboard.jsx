import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";


export function Dashboard() {
  return (
    <div className="profile">
       <div className="profile__container">
        Logged in as
         <div>Usuario1</div>
       </div>
     </div>
  );
}
export default Dashboard;