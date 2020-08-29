import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

import './layout.css';
import { useCounter } from '../../hooks/useCounter';

export const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];

  const [boxSize, setBoxSize] = useState({});
  const pTag = useRef();
  useLayoutEffect(() => {
    // console.log(pTag.current.getBoundingClientRect());
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>LayoutEffect</h1>
      <hr />

      <blockquote className='blockquote alert alert-warning text-right'>
        <p ref={pTag} className='mb-0'>
          {quote}
        </p>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <hr />
      <button onClick={() => increment()} className='btn btn-primary'>
        Siguiente frase
      </button>
    </>
  );
};
