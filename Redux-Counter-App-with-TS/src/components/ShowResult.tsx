import React from 'react';

export interface ShowResultProps {
  counterNumber: number;
}

export const ShowResult: React.FC<ShowResultProps> = (
  props: ShowResultProps
) => {
  return (
    <div>
      <h2>Counter: {props.counterNumber}</h2>
    </div>
  );
};
