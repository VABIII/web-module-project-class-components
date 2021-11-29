import React from 'react';

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

class TodoList extends React.Component {
  render() {
    return(
        <div>
          <h2>Welcome to your Todo App!</h2>
        </div>
    )
  }
}


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
      <TodoList todos={this.state.todos}/>
    );
  }
}

export default App;
