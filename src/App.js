import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";


class App extends React.Component {

  todosList = [
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
  ]

  constructor() {
    super();
    this.state = {
      todos: this.todosList
    }
  }

  addTodo = todo => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  completedTodo = task =>{
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo =>{
        if(todo.id === task.id){
          return {...todo, completed: !todo.completed}
        }else {
          return todo
        }
      })
    })
  }

  clearAll = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo =>{
        return (!todo.completed)
      })
    })
  }

  render() {
    return (
        <div>
          <div className="header">
            <h1>Your Todo List!</h1>
          </div>
          <TodoForm addTodo={this.addTodo} clearAll={this.clearAll}/>
          <TodoList todos={this.state.todos} completedTodo={this.completedTodo}/>
        </div>
    );
  }
}

export default App;
