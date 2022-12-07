import React from 'react';
import LoginForm from './LoginForm';
import TitleLogin from './TitleLogin';
import CreateAccount from './CreateAccount';

function LoginBody({ loginSuccess }) {
  return (
    <div className='login-body'>
      <div className='login-body__title'>
        <TitleLogin />
        <CreateAccount />
      </div>
      <div className='login-body__form'>
        <LoginForm loginSuccess={loginSuccess} />
      </div>
    </div>
  );
}

export default LoginBody;
