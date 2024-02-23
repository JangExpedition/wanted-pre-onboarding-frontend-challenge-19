import React, { useEffect } from "react";
import styles from "./List.module.scss"
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";
import Todo from "../Todo/Todo";

const List = () => {

    const todoList = useSelector((state: RootState) => state.todo);

    return <div className={styles.List}>
        {todoList.map(todo=>(
            <Todo key={todo.id} todo={todo}/>
        ))}
    </div>
}

export default List;