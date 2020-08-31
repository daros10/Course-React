import React from 'react';

export const TodoListItem = ({ todo, indice, handleToggle, handleDelete }) => {
  return (
    <div>
      <li className='list-group-item'>
        <p
          onClick={() => handleToggle(todo.id)}
          className={
            todo.done ? 'font-weight-bold complete' : 'font-weight-bold'
          }
        >
          {indice + 1}. {todo.desc}
        </p>
        <button
          onClick={() => handleDelete(todo.id)}
          className='btn btn-danger'
        >
          Borrar
        </button>
      </li>
    </div>
  );
};
