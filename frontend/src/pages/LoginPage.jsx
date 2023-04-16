import React, { lazy, } from "react";
import { Link } from "react-router-dom";

const LoginForm = lazy(() => import("../components/LoginForm"))

const LoginPage = () => {
  return (
    <div className="container my-3">
      <div className="row border">
        <div className="d-block mx-auto col-md-6 p-3">
          <h4 className="text-center">Login</h4>
          <LoginForm  />
        </div>
      </div>
    </div>
  );
}

export default LoginPage