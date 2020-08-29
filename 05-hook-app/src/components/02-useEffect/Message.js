import React, { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0.0, y: 0.0 });

  const mouseMove = (e) => {
    const coords = { x: e.x, y: e.y };
    setCoords(coords);
    // console.log(coords);
    // console.log(':D');
  };
  useEffect(() => {
    // console.log('Componente Monatado!! :)');
    window.addEventListener('mousemove', mouseMove);

    return () => {
      // console.log('Componente Desonatado!! :(');
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Eres genial!</h3>
      <hr />
      <p>
        X: {coords.x}, Y: {coords.y}
      </p>
    </div>
  );
};
