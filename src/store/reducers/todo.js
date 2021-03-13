import React from 'react';
import { ADD_TODO, DELETE_TODO } from '../actions/types';

const initialState = {
    todo: []
}

export default function(state= initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ADD_TODO:
            return {
                ...state,
                todo: [...state.todo, payload]
            };

        // case DELETE_TODO:
        //     // const filteredTodos = state.todo.filter(tudu => tudu.index !== payload)
        //     return {
        //         ...state.todo.splice(payload, 1)
        //         // ...state,
        //         // todo: filteredTodos
        //     }

        default:
            return state;
    }
}


