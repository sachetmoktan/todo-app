import React from 'react';
import { ADD_TODO, DELETE_TODO } from './types';

export const addTodo = (text) => dispatch => {
    
    dispatch({
        type: ADD_TODO,
        payload: text 
    })
}

// export const deleteTodo = (index) => dispatch => {
//     dispatch({
//         type: DELETE_TODO,
//         payload: index
//     })
// }

