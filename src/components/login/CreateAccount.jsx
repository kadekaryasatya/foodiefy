import React from 'react';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  return (
    <div className='create-account__item'>
      <p>
        Don't have any Account? <Link to='/register'> Register</Link>
      </p>
    </div>
  );
};

export default CreateAccount;
