import React, { useState } from 'react'
import { addTodo } from '../store/actions/todo';

import { connect } from 'react-redux';

const TodoForm= ({addTodo, handleSubmitSave }) => {
    const [ value, setValue ] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!value) return;
        addTodo(value);
        console.log('Value : ', value)
        handleSubmitSave(value);
        setValue('');
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <input type="text" className="input" value={value} placeholder="Add Todo..." onChange={e=>setValue(e.target.value)} />
                <button type="submit">Add Todo</button>
            </form>
        </>
    )
}


export default connect(null, { addTodo })(TodoForm)
