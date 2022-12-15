import styles from './MyButton.module.css';

const MyButton = ({ todos, setTodos, value, setValue, editTodo, stopEdit }) => {
  let res;
  if (editTodo !== null) {
    res = (
      <button className={styles.button} onClick={stopEdit}>
        Save
      </button>
    );
  } else {
    res = (
      <button
        className={styles.button}
        onClick={() => {
          setTodos([...todos, value]);
          setValue('');
        }}
        disabled={value ? false : true}
      >
        Add
      </button>
    );
  }

  return <>{res}</>;
};

export default MyButton;
