import React from 'react';
import logo from '../../public/images/Logo.jpeg';
import LabelRegister from './LabelRegister';

function RegisterLogo() {
  return (
    <div className='register-logo__item'>
      <img src={logo} alt='Logo Register' />
      <LabelRegister />
    </div>
  );
}

export default RegisterLogo;
