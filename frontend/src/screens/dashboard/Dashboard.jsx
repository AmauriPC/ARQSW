import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import "./dashboard.css";
import 'bootstrap/dist/css/bootstrap.css';
import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export function Dashboard() {

  const [columnDefs] = useState([
    {field: "appName", sortable: true, filter: true},
    {field: "eventName", sortable: true, filter: true},
    {field: "userId", sortable: true, filter: true},
    {field: "eventDescription", sortable: true, filter: true},
  ]);

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch('/api/events')
    .then(response => {
      if(response.ok){
        return response.json();
      }
      throw response;
    })
    .then(rowData => {
      setRowData(rowData);
    })
    .catch(error => {
      console.log('Error fetching Data', error);
    })
  }, []);

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