import React from "react";

// export default function Todo(props){
//     const {completedTodo, todo} = props;
//
//     const onClick = () => {
//         completedTodo(todo);
//         console.log("Clicked")
//         console.log(todo)
//     }
//         return(
//             <div>
//                 <h3 onClick={onClick}>{todo.task}</h3>
//             </div>
//         )
//
// }

class Todo extends React.Component {

    onClick = () => {
        this.props.completedTodo(this.props.todo);
        console.log("Clicked")
        console.log(this.props.todo)
    }

    render() {
        return(
            <div>
                <h3 onClick={this.onClick}>{this.props.todo.task}</h3>
            </div>
        )
    }
}


export default Todo;









































