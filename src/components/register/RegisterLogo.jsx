import React from "react";
import logo from "../../public/images/Logo.jpeg"
import TaglineRegister from "./TaglineRegister";
import LabelRegister from "./LabelRegister";


function RegisterLogo() {
  return (
   <div className="register-logo__item">
      <img src={logo} alt="Logo Register" />
      <LabelRegister />
      <TaglineRegister />
   </div>
  );
};

export default RegisterLogo;
