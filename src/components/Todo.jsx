import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_VALUE':
      return {
        ...state,
        input: action.payload,
      };
    case 'ADD_ITEM':
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), title: state.input }],
        input: '',
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'EDIT_ITEM':
      return {
        ...state,
        todos: state.todos.map((todo) => 
        todo.id === action.payload.id ? {...todo, title: action.payload.newTitle} : todo),
      };
    default:
      return state;
  }
}


const Todo = () => {
  const initialState = {
    input: '',
    todos: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleEdit = (id, currentTitle) => {
    const newTitle = prompt('Edit Todo', currentTitle);
    if(newTitle !== null) {
      dispatch({ type: 'EDIT_ITEM', payload: {id, newTitle}});
    }
  }
  return (
    <div>
      <input type="text"
        value={state.input}
        onChange={(e) => dispatch({ type: 'INPUT_VALUE', payload: e.target.value })} />
      <button onClick={() => dispatch({ type: 'ADD_ITEM' })}>Add</button>

      <h4>Todo List</h4>
      <ol>
        {state.todos.map((todo, index) => {
          return (
            <li key={todo.id}>
              {todo.title} {''}
              <button onClick={() => handleEdit(todo.id, todo.title)}>Edit</button>
              <button onClick={() => dispatch({ type: 'DELETE_ITEM', payload: todo.id })}>X</button>
            </li>
          )
        })}

      </ol>
    </div>
  )
}

export default Todo;