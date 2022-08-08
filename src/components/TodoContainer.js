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
      console.log('clicked', id);
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
      const newTodo = {
        id: 4,
        title,
        completed: false,
      };
      this.setState({
        todos: [
          ...this.state.todos,
          newTodo,
        ],
      });
      console.log('added', title);
    }

    delete = (id) => {
      console.log('deleted', id);
      this.setState({
        todos: this.state.todos.filter((todo) => todo.id !== id),
      });
    }

    render() {
      return (
        <>
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addProps={this.add} />
              <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} deleteProps={this.delete} />
            </div>
          </div>
        </>
      );
    }
}

export default TodoContainer;
