import React from 'react';
import { deleteTodo } from '../store/actions/todo';

import { connect } from 'react-redux';

function Todo({index, todo, handleDeleteTodo, tod }) {     // deleteTodo

    // const handleDeleted = (index) => {
    //     console.log("Index",index)
    //     console.log(tod)
    //     deleteTodo();
    //     // handleDeleteTodo(tod);
        
    // }

    // console.log("tod",tod)

    return (
        <div className="todo">
            {index}: {todo.text}
            {/* <button onClick={() => handleDeleted(index)}>x</button> */}
        </div>
    )
}

const mapStateToProps = (state) => ({
    tod : state.todo.todo
})

export default connect(mapStateToProps, {  })(Todo)   //deleteTodo
