/* eslint-disable max-len */

import PropTypes from 'prop-types';
import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todos, handleChangeProps, deleteProps } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleChangeProps={handleChangeProps} deleteProps={deleteProps} />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todos: PropTypes.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteProps: PropTypes.func.isRequired,
};

export default TodosList;
