import React from 'react';
import { register } from '../../utils/api';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';

function RegisterForm() {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    /**
     * Validation Confirm Password
     */
    if (password !== confirmPassword) {
      alert('The password confirmation does not match');
      navigate('/register');
    } else {
      /**
       * register
       */
      register({ name, email, password }).then((res) => {
        if (!res.error) {
          alert('Registration succesfuly');
          navigate('/login');
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

      <button className='register-btn' title='register'>
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
