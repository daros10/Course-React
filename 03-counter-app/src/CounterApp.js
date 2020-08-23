import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {
  // no se debe modificar directamente el estado de la variable
  // para ello React nos obliga a implementar buenas practicas
  // anadiendo como segundo parametro una funcion que manipule
  // el valor de nuestra variable
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter((counter) => counter + 1);
  };
  const handleReset = () => setCounter(value);
  const handleSubstract = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
