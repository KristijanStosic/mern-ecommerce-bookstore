import React, { lazy, } from "react";

const RegisterForm = lazy(() => import("../components/RegisterForm"))

const RegisterPage = () => {
  return (
    <div className="container my-3">
      <div className="row border">
        <div className="d-block mx-auto col-md-6 p-3">
          <h4 className="text-center">Register</h4>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage