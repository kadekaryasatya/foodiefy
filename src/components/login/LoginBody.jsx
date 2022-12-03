import React from "react";
import LoginForm from "./LoginFrom";
import LoginButton from "./LoginButton";
import TitleLogin from "./TitleLogin";
import CreateAccount from "./CreateAccount";


function LoginBody() {
  return (
    <div className="login-body">
        <div className="login-body__title">
            <TitleLogin />
            <CreateAccount />
        </div>
        <div className="login-body__form">
            <LoginForm />
            <LoginButton />
        </div> 
    </div>
  );
}

export default LoginBody;