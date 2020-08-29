import React from 'react';
import './useEffect.css';
import { useForm } from '../../hooks/useForm';

export const FormWithCutomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Posteando info');
    console.log(formValues);
  };

  return (
    <>
      <h1>Form with custom hook</h1>
      <hr />
      <form onSubmit={handleSubmit}>
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
        <div className='form-group'>
          <input
            name='password'
            type='password'
            className='form-control'
            placeholder='Escribe tu contrasena'
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Guardar
        </button>
      </form>
      <hr />
    </>
  );
};
