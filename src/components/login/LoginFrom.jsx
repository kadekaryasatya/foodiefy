import React from "react";


function LoginForm() {
  return (
    <form  className="login-form__item">
        <h5>No telpon atau email</h5>
        <input type="email" />
        <h5>Password</h5>
        <input type="password"/>
      </form>
  );
}

export default LoginForm;