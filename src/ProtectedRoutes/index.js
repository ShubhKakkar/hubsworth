import React from "react";
import SignIn from "../containers/Auth/SignIn";

const ProtectedRoutes = ({
  isAuthenticated,
  children,
}) => {
  if (!isAuthenticated) {
    return <SignIn />;
  }
  return children;
};

export default ProtectedRoutes;
