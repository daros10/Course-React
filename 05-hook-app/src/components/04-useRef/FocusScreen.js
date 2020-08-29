import React, { useRef } from 'react';
import '../02-useEffect/useEffect.css';

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    // document.querySelector('input').select();
    inputRef.current.select();
  };
  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />
      <input
        ref={inputRef}
        className='form-control'
        placeholder='Ingresa tu nombre'
        type='text'
      />
      <hr />
      <button onClick={handleClick} className='btn btn-outline-primary'>
        Focus
      </button>
    </div>
  );
};
