import React from "react";
import {handleInput} from "concurrently/src/defaults";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

    handleInput = evt => {
        this.setState({
            ...this.state,
                input: evt.target.value
        })

    }

    render(){
        console.log(this.state.input)
        return(
            <div>
                <form>
                    <label htmlFor="todoInput">Add new Todo:&nbsp;</label>
                    <input
                        type="text"
                        name="todoInput"
                        onChange={this.handleInput}
                    />
                    <button>submit</button>
                </form>
                <button>Clear all</button>
            </div>
        )
    }

}


export default TodoForm;











































