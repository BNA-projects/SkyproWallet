import { Navigate, Outlet } from "react-router-dom";
import { RoutesApp } from "../const";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function PrivateRoute() {
  const { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to={RoutesApp.SIGN_IN} />;
}

export default PrivateRoute;
