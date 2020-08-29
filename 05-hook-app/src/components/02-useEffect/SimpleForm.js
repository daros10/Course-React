import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './useEffect.css';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log(
      `hey!, con las dependecias vacias --> [] solo me ejecuto en la creacion del componente`
    );
  }, []);

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <form>
        <div className='form-group'>
          <input
            name='name'
            type='text'
            className='form-control'
            placeholder='Escribe tu nombre'
            autoComplete='off'
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <input
            name='email'
            type='email'
            className='form-control'
            placeholder='Escribe tu email'
            autoComplete='off'
            value={email}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <hr />
      {name === '123' && <Message />}
    </>
  );
};
