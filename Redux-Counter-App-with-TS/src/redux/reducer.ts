import { ICounterAction, ICounterState } from './actionCreator';
import { ActionTypes } from './actionTypes';

export const COUNTER_INITIAL_STATE: ICounterState = {
  numberCounter: 0,
};

export const counterReducer = (
  state: ICounterState = COUNTER_INITIAL_STATE,
  action: ICounterAction
): ICounterState => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        numberCounter: action.numberCounter,
      };

    case ActionTypes.RESET:
      return {
        ...state,
        numberCounter: action.numberCounter,
      };

    case ActionTypes.DECREMENT:
      return {
        ...state,
        numberCounter: action.numberCounter,
      };

    default:
      return state;
  }
};
