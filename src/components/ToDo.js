import React from 'react';

import { connect } from 'react-redux';

function Todo({index, todo }) { 

    return (
        <div className="todo">
            {index}: {todo.text}
        </div>
    )
}

export default Todo;
