import React from "react";
import styles from "./Todo.module.scss"
import { TodoType, changeComplete, removeTodo } from "../../store/slice/todoSlice";
import { useDispatch } from "react-redux";

const Todo = ({todo}: {todo: TodoType}) => {

    const dispatch = useDispatch();

    const checkHandler = (id: string) => {
        dispatch(changeComplete(id));
    }

    const clickHandler = (id: string) => {
        dispatch(removeTodo(id));
    }

    return <div className={styles.Todo}>
        <input type="checkbox" checked={todo.complete} onChange={()=>checkHandler(todo.id)}/>
        <p className={`${styles.todoTitle} ${todo.complete ? styles.complete : ""}`}>{todo.whatTodo}</p>
        <button className={styles.deleteBtn} onClick={()=>clickHandler(todo.id)}>Delete</button>
    </div>
};

export default Todo;