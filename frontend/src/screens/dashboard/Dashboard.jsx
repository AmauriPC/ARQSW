import {AgGridReact} from "ag-grid-react";
import React, { useState } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Dashboard = () => {
  const [columnDefs] = useState([
    {field: "IdEvent", sortable: true, filter: true},
    {field: "App", sortable: true, filter: true},
    {field: "EventType", sortable: true, filter: true},
    {field: "Content", sortable: true, filter: true},
    {field: "Date", sortable: true, filter: true},
    {field: "Time", sortable: true, filter: true},
    {field: "User", sortable: true, filter: true}

  ]);

  const [rowData] = useState([
    {IdEvent: "1", App: "BLOG", EventType: "Login", Content: "Login", Date: "2021-06-01", Time: "10:00:00", User: "User1"},
    {IdEvent: "2", App: "Instagram", EventType: "Logout", Content: "Logout", Date: "2021-06-01", Time: "10:00:00", User: "User2"},
    {IdEvent: "3", App: "Twitter", EventType: "Post", Content: "image:True text: true ", Date: "2021-06-01", Time: "10:00:00", User: "User"},
    {IdEvent: "4", App: "Instagram", EventType: "Logout", Content: "Logout", Date: "2021-06-01", Time: "10:00:00", User: "User2" },
    {IdEvent: "5", App: "Twitter", EventType: "Follow", Content: "Follow", Date: "2021-06-01", Time: "10:00:00", User: "User"}
  ]);

  return(
      <div className="ag-theme-alpine" style={{height: 600}}>
        <header>  
          <h1>Dashboard</h1>
          <h1>User1 </h1>
        </header>
        <AgGridReact
        rowData = {rowData}
        columnDefs = {columnDefs}
        />
        <footer>  
          <h1></h1>
        </footer>
      </div>  
  )

};


export default Dashboard;