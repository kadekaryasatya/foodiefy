import React from 'react';
import { register } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function RegisterForm() {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');

  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const handleSubmit = (e) => {
    e.preventDefault();
    /**
     * Validation Confirm Password
     */
    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'The password confirmation does not match',
      });
      navigate('/register');
    } else {
      /**
       * register
       */
      register({ name, email, password }).then((res) => {
        if (!res.error) {
          MySwal.fire({
            title: <strong>Success</strong>,
            html: <i>Registration successfuly , Please Login</i>,
            icon: 'success',
          });
          navigate('/*');
        }
      });
    }
  };
  return (
    <form onSubmit={handleSubmit} className='register-form__item'>
      <h5> Name</h5>
      <input type='text' value={name} onChange={onNameChange} required />
      <h5> Email</h5>
      <input type='email' value={email} onChange={onEmailChange} required />
      <h5>Password</h5>
      <input type='password' value={password} onChange={onPasswordChange} required />
      <h5>Konfirmasi password</h5>
      <input type='password' value={confirmPassword} onChange={onConfirmPasswordChange} required />
      <p></p>
      <button className='register-btn' title='register'>
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
