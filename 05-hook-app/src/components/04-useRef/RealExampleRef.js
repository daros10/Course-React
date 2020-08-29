import React, { useState } from 'react';
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook';
import '../02-useEffect/useEffect.css';

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />
      {show && <MultipleCustomHook />}
      <button
        onClick={() => {
          setShow(!show);
        }}
        className={
          !show ? 'btn btn-success ml-5 mt-2' : 'btn btn-danger ml-5 mt-2'
        }
      >
        {!show ? 'Show' : 'Hiden'}
      </button>
    </div>
  );
};
