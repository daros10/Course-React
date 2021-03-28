import { ReduxAppProps } from './ReduxApp';

export interface IReduxAppState {
  numberCounterApp: number;
  actions: {
    handleIncrement: () => void;
    handleRest: () => void;
    handleDecrement: () => void;
  };
}

export const useReduxAppState = (props: ReduxAppProps): IReduxAppState => {
  const handleIncrement = (): void => {
    props.increment(props.counterNumber + 1);
  };

  const handleRest = (): void => {
    props.reset(0);
  };

  const handleDecrement = (): void => {
    props.decrement(props.counterNumber - 1);
  };

  return {
    numberCounterApp: props.counterNumber,
    actions: {
      handleIncrement,
      handleRest,
      handleDecrement,
    },
  };
};
