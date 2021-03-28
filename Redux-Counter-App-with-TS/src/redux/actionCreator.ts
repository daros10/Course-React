import { ActionTypes } from './actionTypes';

export interface ICounterAction {
  type: string;
  numberCounter: number;
}

export interface ICounterState {
  numberCounter: number;
}

export const reset = (payload: number): ICounterAction => {
  return {
    type: ActionTypes.RESET,
    numberCounter: payload,
  };
};

export const increment = (payload: number): ICounterAction => {
  return {
    type: ActionTypes.INCREMENT,
    numberCounter: payload,
  };
};

export const decrement = (payload: number): ICounterAction => {
  return {
    type: ActionTypes.DECREMENT,
    numberCounter: payload,
  };
};
