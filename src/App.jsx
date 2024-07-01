import React, { useContext, useState } from 'react';
import './App.css';
import RoleContext, { RoleProvider } from './components/RoleContext';
import StaffView from './components/StaffView';
import StudentView from './components/StudentView';
import Details from './components/Details';

function App() {
  const { role, toggleRole } = useContext(RoleContext);
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsClick = () => {
    setShowDetails(prevShowDetails => !prevShowDetails);
  };

  return (
    <div className="App">
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
        <button className="details-button" onClick={handleDetailsClick}>
          Details
        </button>
      </header>
      <div className="view-wrapper">
        {showDetails ? (
          <Details />
        ) : (
          <>
            {role === 'staff' && <StaffView />}
            {role === 'student' && <StudentView />}
          </>
        )}
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <RoleProvider>
      <App />
    </RoleProvider>
  );
}

export default AppWrapper;
