import MyInput from './MyInput';
import MyButton from './MyButton';
import styles from './MyForm.module.css';

const MyForm = ({
  todos,
  setTodos,
  value,
  setValue,
  editTodo,
  setEditTodo,
}) => {
  const changeItem = (event) => {
    setTodos([
      ...todos.slice(0, editTodo),
      event.target.value,
      ...todos.slice(editTodo + 1),
    ]);
  };

  const stopEdit = () => {
    setEditTodo(null);
    setValue('');
  };

  return (
    <div className={styles.myForm}>
      <MyInput
        todos={todos}
        editTodo={editTodo}
        value={value}
        setValue={setValue}
        changeItem={changeItem}
      />
      <MyButton
        todos={todos}
        setTodos={setTodos}
        value={value}
        setValue={setValue}
        editTodo={editTodo}
        stopEdit={stopEdit}
      />
    </div>
  );
};

export default MyForm;
