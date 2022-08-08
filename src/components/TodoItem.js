import PropTypes from 'prop-types';
import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { todo, handleChangeProps, deleteProps } = props;

  return (
    <li className={styles.item}>
      <input className={styles.checkbox} type="checkbox" checked={todo.completed} onChange={() => handleChangeProps(todo.id)} />
      <button type="button" onClick={() => deleteProps(todo.id)}>Delete</button>
      <span style={todo.completed ? completedStyle : null}>
        {todo.title}
      </span>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteProps: PropTypes.func.isRequired,
};

export default TodoItem;
