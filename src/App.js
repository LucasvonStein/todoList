import React, { Component } from 'react';
import classes from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        text: ''
      },
      todos: [
        {
          text: 'Learn React',
          isCompleted: false
        },
        {
          text: 'Buy Booster',
          isCompleted: false
        },
        {
          text: 'Run',
          isCompleted: false
        }
      ]
    };
  }

  onChangeHandler = e => {
    this.setState({ todo: { text: e.target.value, isCompleted: false } });
  };

  addTodo = e => {
    if (e.key === 'Enter') {
      this.state.todos.push(this.state.todo);
      this.setState({ todo: { text: '' } });
    }
  };

  render() {
    return (
      <>
        <div className={classes.App}>
          <input
            id={classes.todoInput}
            value={this.state.todo.text}
            onChange={this.onChangeHandler}
            onKeyPress={this.addTodo}
          />
          <div className={classes.todoContaioner}>
            <ul className={classes.todoList}>
              {this.state.todos.map((item, idx) => {
                return <li key={idx}>{item.text}</li>;
              })}
            </ul>
          </div>
        </div>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </>
    );
  }
}

export default App;
