import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import Button from "react-bootstrap/esm/Button";
import Table from 'react-bootstrap/Table';
import "./dashboard.css";
import 'bootstrap/dist/css/bootstrap.css';
 

export function Dashboard() {


  function table() {
    return (
      <div>
   <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      </div>
     
    );
  }
  
  const [value, setValue] = useState('Seleccione una App');
  const handleSelect = (e) => {
    console.log(e);
    setValue(e)
  }

  return (
    <div className="full_container">
      <div className="events_filters">

        <div style={{ display: "flex", gap: "1rem" }}>
          <Dropdown onSelect={handleSelect}>
            <DropdownToggle>
              {value}
            </DropdownToggle>
            <DropdownMenu>
              <Dropdown.Item eventKey="Seleccione una App"> Seleccione una App</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="Twitter"> Twitter</Dropdown.Item>
              <Dropdown.Item eventKey="Instagram">Instagram</Dropdown.Item>
              <Dropdown.Item eventKey="Blog">Blog</Dropdown.Item>
            </DropdownMenu>

          </Dropdown>

          <Button id="search-events"
            variant="outline-secondary"
            onClick={table}

          >Buscar eventos

          </Button>


        </div>
        
    
      </div>
      <br />
      

      
    </div>

  );
}
export default Dashboard;