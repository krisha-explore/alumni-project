import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardNavbar = () => {
  return (
    <nav>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/add-data">Add Data</NavLink>
      <NavLink to="/logout">Logout</NavLink>
    </nav>
  );
};

export default DashboardNavbar;
