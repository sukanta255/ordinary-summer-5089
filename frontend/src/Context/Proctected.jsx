import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Appcontext } from "./Appcontext";

const Protected = ({ children }) => {
  const { isAuth } = useContext(Appcontext) || localStorage.getItem("token");
  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default Protected;
