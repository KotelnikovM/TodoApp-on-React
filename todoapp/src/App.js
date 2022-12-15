import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import MyForm from './UI/MyForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className="container">
      <MyForm
        todos={todos}
        editTodo={editTodo}
        value={value}
        setValue={setValue}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
      />
      <hr />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
        setValue={setValue}
      />
    </div>
  );
}

export default App;
