import React from 'react';
import './counter.css';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Counter With Custom Hook: {counter}</h1>
      <hr />
      <button onClick={() => increment(2)} className='btn btn-primary'>
        +1
      </button>
      <button onClick={() => decrement(2)} className='btn btn-success ml-2'>
        -1
      </button>
      <button onClick={() => reset()} className='btn btn-danger ml-2'>
        Reset
      </button>
    </>
  );
};
