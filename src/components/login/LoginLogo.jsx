import React from "react";
import logo from "../../public/images/Logo.jpeg"
import TaglineLogin from "./TaglineLogin";
import LabelLogin from "./LabelLogin";


function LoginLogo() {
  return (
   <div className="login-logo__item">
      <img src={logo} alt="Logo Login" />
      <LabelLogin />
      <TaglineLogin />
   </div>
  );
};

export default LoginLogo;
