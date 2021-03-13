import React from 'react';
import { ADD_TODO } from '../actions/types';

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

        default:
            return state;
    }
}


