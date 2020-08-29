import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import '../02-useEffect/useEffect.css';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHook = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];
  return (
    <>
      <h1>BreakingBad Quotes!</h1>
      <hr />

      {loading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <blockquote className='blockquote alert alert-warning text-right'>
          <p className='mb-0'>{quote}</p>
          <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
      )}
      <hr />
      <button onClick={() => increment()} className='btn btn-primary'>
        Siguiente frase
      </button>
    </>
  );
};
