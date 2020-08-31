import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = () => {
    setUser({
      id: 123,
      name: 'Daro',
      email: 'daro.whn@gmail.com',
    });
    setShowAlert(true);
  };

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button
        onClick={handleLogin}
        className='btn btn-primary btn-lg btn-block'
      >
        Login
      </button>

      {showAlert && (
        <div className='alert alert-success mt-2 text-center' role='alert'>
          <strong>Login Successful</strong>
        </div>
      )}
    </div>
  );
};
