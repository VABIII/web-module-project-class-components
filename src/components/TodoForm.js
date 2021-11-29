import React from "react";

class TodoForm extends React.Component {

    render(){
        return(
            <div>
                <form>
                    <label htmlFor="todoInput">Add new Todo:&nbsp;</label>
                    <input
                        type="text"
                        name="todoInput"

                    />
                    <button>submit</button>
                </form>
                <button>Clear all</button>
            </div>
        )
    }

}


export default TodoForm;











































