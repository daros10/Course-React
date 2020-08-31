import React, { useReducer, useEffect } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { AddTODO } from './AddTODO';

// const initialState = [
//   {
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false,
//   },
// ];

const init = () => {
  // return [
  //   {
  //     id: new Date().getTime(),
  //     desc: 'Aprender React',
  //     done: false,
  //   },
  // ];

  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId,
    });
  };

  const handleDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId,
    };
    dispatch(action);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (description.length <= 0) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: 'add',
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

  return (
    <div>
      <h1>
        TodoApp <small>({todos.length})</small>
      </h1>
      <hr />
      <div className='row'>
        <div className='col-md-7'>
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
        <div className='col-md-5'>
          <AddTODO
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            description={description}
          />
        </div>
      </div>
    </div>
  );
};
