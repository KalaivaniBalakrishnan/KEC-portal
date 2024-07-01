import React, { useContext } from 'react';
import RoleContext from './RoleContext';
import './Header.css';

const Header = ({ onDetailsClick }) => {
  const { role, toggleRole } = useContext(RoleContext);

  return (
    <header className="App-header">
      <span>KEC</span>
      <div className="toggle-container">
        <span>Student</span>
        <label className="switch">
          <input type="checkbox" checked={role === 'student'} onChange={toggleRole} />
          <span className="slider"></span>
        </label>
        <span>Staff</span>
      </div>
      <button className="details-button" onClick={onDetailsClick}>
        Details
      </button>
    </header>
  );
};

export default Header;
