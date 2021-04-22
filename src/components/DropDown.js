import React from 'react';
import { Dropdown } from 'react-bootstrap';
import menu from '../assets/hamburger-menu.png';

const DropDown = () => (
  <>
    <Dropdown className="d-flex d-md-none mb-5">
      <Dropdown.Toggle className="bg-white" id="dropdown-basic">
        <img src={menu} alt="menu" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/airlinesList" active>AIRLINES</Dropdown.Item>
        <Dropdown.Item href="/tickets">TICKETS</Dropdown.Item>
        <Dropdown.Item href="/">LogOut</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </>
);

export default DropDown;
