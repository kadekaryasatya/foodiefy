import React from 'react';
import RegisterBody from '../components/register/RegisterBody';
import RegisterLogo from '../components/register/RegisterLogo';

import './RegisterPage.css';

function RegisterPage() {
  return (
    <div className='register-page'>
      <div className='title-app__header'></div>
      <div className='register-item'>
        <div className='register-logo'>
          <RegisterLogo />
        </div>
        <div className='register-form'>
          <div className='register-form__content'>
            <RegisterBody />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
