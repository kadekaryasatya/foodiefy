import React from 'react';
import useInput from '../../hooks/useInput';
import { login } from '../../utils/api';

function LoginForm({ loginSuccess }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login({ email, password });
    if (!res.error) {
      loginSuccess(res.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='login-form__item'>
      <h5>Email</h5>
      <input type='email' placeholder='ex : foodiefy@gmail.com' value={email} onChange={onEmailChange} className='login-email' />
      <h5>Password</h5>
      <input type='password' placeholder='ex : foodiefy123' value={password} onChange={onPasswordChange} />
      <p></p>
      <button className='login-btn' title='Login'>
        Masuk
      </button>
    </form>
  );
}

export default LoginForm;
