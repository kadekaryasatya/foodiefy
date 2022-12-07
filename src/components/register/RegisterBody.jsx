import React from 'react';
import RegisterForm from './RegisterForm';
import RegisterButton from './RegisterButton';
import TitleRegister from './TitleRegister';
import CreateAccount from './HaveAccount';

function RegisterBody() {
  return (
    <div className='register-body'>
      <div className='register-body__title'>
        <TitleRegister />
        <CreateAccount />
      </div>
      <div className='register-body__form'>
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterBody;
