import React from 'react';
import PropTypes from 'prop-types';

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
    const { addProps } = this.props;
    const { title } = this.state;
    if (title.trim()) {
      addProps(title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.submit} className="form-container">
        <input className="input-text" type="text" name="title" placeholder="Add Todo..." value={title} onChange={this.onChange} />
        <button type="button" className="input-submit">Submit</button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addProps: PropTypes.func.isRequired,
};

export default InputTodo;
