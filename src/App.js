import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todosList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todosList
    }
  }

  render() {
    return (
        <div>
          <div className="header">
            <h1>Your Todo List!</h1>
          </div>
          <TodoForm todos={this.state.todos}/>
          <TodoList todos={this.state.todos}/>
        </div>
    );
  }
}

export default App;
