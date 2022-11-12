import './App.css';
import React from 'react';
import {Dashboard, Login} from './screens';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
  )
}

export default App;
