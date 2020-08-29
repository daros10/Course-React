import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';
import '../02-useEffect/useEffect.css';

export const MemoHook = () => {
  const { counter, increment } = useCounter(2500);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <hr />
      <h2>
        Counter: <small>{counter}</small>
      </h2>
      <p>{memoProcesoPesado}</p>
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
