import React from "react";

class Todo extends React.Component {

    render() {
        console.log(this.props)
        return(
            <div>
                <h3>{this.props.todo.task}</h3>
            </div>
        )
    }
}



export default Todo;










































