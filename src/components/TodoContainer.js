/* eslint-disable max-len */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

    handleChange = (id) => {
      this.setState((prevState) => ({
        todos: prevState.todos.map((todo) => {
          if (id === todo.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      }));
    }

    add = (title) => {
      const { todos } = this.state;
      const newTodo = {
        id: 4,
        title,
        completed: false,
      };
      this.setState({
        todos: [
          ...todos,
          newTodo,
        ],
      });
    }

    delete = (id) => {
      const { todos } = this.state;
      this.setState({
        todos: todos.filter((todo) => todo.id !== id),
      });
    }

    render() {
      const { todos } = this.state;
      return (
        <>
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addProps={this.add} />
              <TodosList todos={todos} handleChangeProps={this.handleChange} deleteProps={this.delete} />
            </div>
          </div>
        </>
      );
    }
}

export default TodoContainer;
