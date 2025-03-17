import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <hi> MERN Stack Todo </hi>
      <ul>
        { todos.map(todo => (
          <li key={todo._id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
