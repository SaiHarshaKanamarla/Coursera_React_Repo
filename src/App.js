import React from 'react';
import logo from './logo.svg';
import {Navbar, Nav, NavbarBrand} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">This is the header</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
