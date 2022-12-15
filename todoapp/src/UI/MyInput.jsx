import styles from './MyInput.module.css';

const MyInput = ({ todos, editTodo, value, setValue, changeItem }) => {
  return (
    <input
      placeholder="Add new task"
      className={styles.input}
      value={editTodo === null ? value : todos[editTodo]}
      onChange={
        editTodo === null
          ? (event) => {
              setValue(event.target.value);
            }
          : changeItem
      }
    />
  );
};

export default MyInput;
