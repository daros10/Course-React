import React from 'react';

export const AddTODO = ({ handleSubmit, handleInputChange, description }) => {
  return (
    <div>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            name='description'
            placeholder='Aprender...'
            autoComplete='off'
            onChange={handleInputChange}
            value={description}
          />
        </div>
        <button
          type='submit'
          className={
            description.length <= 0
              ? 'btn btn-primary btn-block disabled'
              : 'btn btn-primary btn-block'
          }
        >
          Agregar
        </button>
      </form>
    </div>
  );
};
