import React, { Fragment, useState } from 'react';
import ToDo from './components/ToDo'; 
import TodoForm from './components/TodoForm';

import { Provider } from 'react-redux';
import store from './store/store';

import './App.css';

function App() {

  const [ todos, setTodos ] = useState([
    {
      text: 'Eat well'
    },
    {
      text: 'Sleep well'
    },
    {
      text: 'Code well'
    }
  ]);

  function submitSave (text) {
    const newTodos = [...todos, {text}]
    setTodos(newTodos);
    console.log("New Data",newTodos)
  }


  return(
    <Provider store={store}>  
        <Fragment>
          <h1 className="font-weight-bold pt-5">Assignment Two</h1><br/>
          <h3 className="font-weight-bold pt-3">Todos List:</h3>

          <div className="todo-list">
            {todos.map((todo, index) => (
                <ToDo key={index} index={index} todo={todo}/>
            ))}

          <TodoForm handleSubmitSave={submitSave} />
          </div>
        </Fragment>
    </Provider>
  )
}

export default App;


