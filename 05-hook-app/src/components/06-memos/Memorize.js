import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import '../02-useEffect/useEffect.css';

export const Memorize = () => {
  const { counter, increment } = useCounter();
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Memorize</h1>
      <hr />
      <h2>
        Counter: <Small value={counter} />
      </h2>
      <button
        className='btn btn-outline-secondary'
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setShow(!show);
        }}
        className='btn btn-outline-primary ml-2'
      >
        Show/Hidde {JSON.stringify(show)}
      </button>
    </div>
  );
};
