import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}>
      <input className={styles.checkbox} type="checkbox" checked={props.todo.completed} onChange={() => props.handleChangeProps(props.todo.id)} />
      <button onClick={() => props.deleteProps(props.todo.id)}>Delete</button>
      <span style={props.todo.completed ? completedStyle : null}>
        {props.todo.title}
      </span>
    </li>
  );
};

export default TodoItem;
