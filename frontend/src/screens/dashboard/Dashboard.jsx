import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import "./dashboard.css";
import 'bootstrap/dist/css/bootstrap.css';
import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export function Dashboard() {

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

  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)

  return (
    <div>
      <div className="events_filters">
          <header>
            <h1>Dashboard de eventos</h1>
          </header>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button onClick={onClick} > Buscar Eventos
         </Button>
        </div>
      
      </div>
      <br />
      { showResults ?         
      <div className="ag-theme-alpine" style={{height: 600,alignSelf:"center"}}>
        <AgGridReact
          rowData = {rowData}
          columnDefs = {columnDefs}
          />
          <footer>  
            
          </footer>
      </div>
      : null }
    </div>

  );
}
export default Dashboard;