import { createContext, useState } from 'react';

 const AdminContext = createContext();

// Wrap your entire application in a context provider
const AdminStatus = (props) => {
  const [dropdownState, setDropdownState] = useState(0);
  const [tab,setTab] = useState(0);

  return (
    <AdminContext.Provider value={{ dropdownState, setDropdownState,tab,setTab }}>
      {/* Your application code here */}
      {props.children}
    </AdminContext.Provider>
  );
}

export {AdminContext,AdminStatus};