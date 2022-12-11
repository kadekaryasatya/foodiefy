import React from 'react';
import { Link } from 'react-router-dom';

const HaveAccount = () => {
  return (
    <div className='have-account__item'>
      <p>
        Aleready have account ? <Link to='/*'> Login</Link>
      </p>
    </div>
  );
};

export default HaveAccount;
