import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Dispatch } from 'redux';
import { Buttons } from '../components/Buttons';
import { ShowResult } from '../components/ShowResult';
import {
  ICounterAction,
  ICounterState,
  increment,
  decrement,
  reset,
} from '../redux/actionCreator';
import { connect } from 'react-redux';
import { useReduxAppState } from './useReduxAppState';

export interface ReduxAppStateToProps {
  counterNumber: number;
}

export interface ReduxAppFunctionToProps {
  increment: (payload: number) => void;
  reset: (payload: number) => void;
  decrement: (payload: number) => void;
}

export type ReduxAppProps = ReduxAppStateToProps & ReduxAppFunctionToProps;

export const ReduxApp: React.FC<ReduxAppProps> = (props: ReduxAppProps) => {
  const { numberCounterApp, actions } = useReduxAppState(props);

  return (
    <div className={'container text-center'}>
      <h1>Redux App</h1>
      <hr />
      <ShowResult counterNumber={numberCounterApp} />
      <hr />
      <Buttons
        incrementAction={actions.handleIncrement}
        decrementAction={actions.handleDecrement}
        resetAction={actions.handleRest}
      />
    </div>
  );
};

export const mapStateToProps: (state: ICounterState) => ReduxAppStateToProps = (
  state: ICounterState
): ReduxAppStateToProps => ({
  counterNumber: state.numberCounter,
});

export const mapDispatchToProps: (
  dispatch: Dispatch
) => ReduxAppFunctionToProps = (
  dispatch: ThunkDispatch<ICounterState, null, ICounterAction>
): ReduxAppFunctionToProps => ({
  increment: (payload: number): ICounterAction => dispatch(increment(payload)),
  decrement: (payload: number): ICounterAction => dispatch(decrement(payload)),
  reset: (payload: number): ICounterAction => dispatch(reset(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxApp);
