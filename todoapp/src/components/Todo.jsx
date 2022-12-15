import { useState } from 'react';
import styles from '../components/Todo.module.css';
import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai';

const Todo = ({ todo, index, deleteHandler, setEditTodo, setValue }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.todo}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        onChange={() => setChecked(!checked)}
      ></input>
      <p className={checked ? styles.checkedText : null}>{todo}</p>
      {/* {checked ? <p className={styles.checkedText}>{todo}</p> : <p>{todo}</p>} */}
      <button
        className={styles.edit}
        onClick={() => {
          setEditTodo(index);
          setValue(todo);
        }}
      >
        <AiTwotoneEdit className={styles.editIcon} />
      </button>
      <button className={styles.delete} onClick={() => deleteHandler(index)}>
        <AiFillDelete className={styles.deleteIcon} />
      </button>
    </div>
  );
};

export default Todo;
