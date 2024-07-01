import React, { createContext, useState } from 'react';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState('staff');

  const toggleRole = () => {
    setRole(prevRole => (prevRole === 'staff' ? 'student' : 'staff'));
  };

  return (
    <RoleContext.Provider value={{ role, toggleRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export default RoleContext;
