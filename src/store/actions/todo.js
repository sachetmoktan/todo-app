import React from 'react';
import { ADD_TODO } from './types';

export const addTodo = (text) => dispatch => {
    
    dispatch({
        type: ADD_TODO,
        payload: text 
    })
}


