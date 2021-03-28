import React from 'react';

export interface ButtonsToProps {
  incrementAction: () => void;
  resetAction: () => void;
  decrementAction: () => void;
}

export const Buttons: React.FC<ButtonsToProps> = (props: ButtonsToProps) => {
  return (
    <div className={'contianer'}>
      <div className={'row justify-content-center'}>
        <div className='col-3 text-end'>
          <button
            type='button'
            className={'btn btn-primary btn-lg text-left'}
            onClick={props.incrementAction}
          >
            Add
          </button>
        </div>
        <div className='col-3 text-center'>
          <button
            type='button'
            className={'btn btn-primary btn-lg'}
            onClick={props.resetAction}
          >
            Reset
          </button>
        </div>
        <div className='col-3 text-start'>
          <button
            type='button'
            className={'btn btn-primary btn-lg'}
            onClick={props.decrementAction}
          >
            Sub
          </button>
        </div>
      </div>
    </div>
  );
};
