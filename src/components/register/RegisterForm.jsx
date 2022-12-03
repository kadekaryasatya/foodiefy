import React from "react";


function RegisterForm() {
  return (
    <form  className="register-form__item">
        <h5>No telpon atau email</h5>
        <input type="email" />
        <h5>Password</h5>
        <input type="password"/>
        <h5>Konfirmasi password</h5>
        <input type="password"/>
      </form>
  );
}

export default RegisterForm;