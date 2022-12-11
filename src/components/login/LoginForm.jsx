import React from 'react';
import useInput from '../../hooks/useInput';
import { login } from '../../utils/api';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

function LoginForm({ loginSuccess }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login({ email, password });
    if (!res.error) {
      MySwal.fire({
        title: <strong>Success</strong>,
        html: <i>Login successfuly</i>,
        icon: 'success',
      });
      loginSuccess(res.data);
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='login-form__item'>
      <h5>Email</h5>
      <input type='email' value={email} onChange={onEmailChange} className='login-email' required />
      <h5>Password</h5>
      <input type='password' value={password} onChange={onPasswordChange} required />
      <p></p>
      <button className='login-btn' title='Login'>
        Masuk
      </button>
    </form>
  );
}

export default LoginForm;
