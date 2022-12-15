import Todo from './Todo';
import styles from '../components/TodoList.module.css';

const TodoList = ({ todos, setTodos, setEditTodo, setValue }) => {
  const deleteHandler = (index) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  const items = todos.map((todo, index) => {
    return (
      <Todo
        key={index}
        index={index}
        todo={todo}
        deleteHandler={deleteHandler}
        setEditTodo={setEditTodo}
        setValue={setValue}
      />
    );
  });

  return <div className={styles.todoList}>{items}</div>;
};

export default TodoList;
