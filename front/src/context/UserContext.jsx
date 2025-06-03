import { createContext, useState, useEffect } from "react";
import { logout } from "../appwrite/config";

const UserContext = createContext();

function UserProvider ({children}) {
  const [loggedDetails, setLoggedDetails] = useState(JSON.parse(localStorage.getItem('loggedDetails')) || {});

  useEffect(() => {
    localStorage.setItem('loggedDetails', JSON.stringify(loggedDetails));
  }, [loggedDetails]);

  function setUser (id) {
    setLoggedDetails({logged: true, id});
  }

  async function removeUser () {
    try {
      await logout();
      setLoggedDetails({});
    } catch (error) {
      return error;
    }
  }

  return (
    <UserContext.Provider value={{loggedDetails, setUser, removeUser}}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}