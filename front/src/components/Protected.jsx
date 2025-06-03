import { useContext } from "react";
import { Outlet, Navigate } from "react-router";

import { UserContext } from "../context/UserContext";

function Protected () {
  const { loggedDetails } = useContext(UserContext);

  return loggedDetails.logged ? <Outlet /> : <Navigate to='/auth/signin'/>;
}

export default Protected;