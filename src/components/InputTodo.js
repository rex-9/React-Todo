import React from 'react';

class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

    submit = (e) => {
      e.preventDefault();
      if (this.state.title.trim()) {
        this.props.addProps(this.state.title);
        this.setState({
          title: '',
        });
      } else {
        alert('Please write item');
      }
    }

    render() {
      return (
        <form onSubmit={this.submit} className="form-container">
          <input className="input-text" type="text" name="title" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange} />
          <button className="input-submit">Submit</button>
        </form>
      );
    }
}

export default InputTodo;
