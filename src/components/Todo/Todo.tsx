import React, { useRef, useState } from "react";
import styles from "./Todo.module.scss"
import { TodoType, changeComplete, removeTodo, updateTodo } from "../../store/slice/todoSlice";
import { useDispatch } from "react-redux";

const Todo = ({todo}: {todo: TodoType}) => {

    const [isUpdate, setIsUpdate] = useState(false);
    const [updateValue, setUpdateValue] = useState(todo.whatTodo);
    const updateText = useRef<HTMLInputElement>(null);
    const errorRef = useRef<HTMLParagraphElement>(null);

    const dispatch = useDispatch();

    const checkHandler = (id: string) => {
        dispatch(changeComplete(id));
    }

    const clickHandler = (id: string) => {
        dispatch(removeTodo(id));
    }

    const doubleClickHandler = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if(target.localName === "p"){
           setIsUpdate(true);
           updateText.current?.focus();
        }else if(target.localName === "input"){
            setIsUpdate(false);
        }
    }

    const updateTodoHandler = (id: string, whatTodo: string) => {
        if(whatTodo === updateValue){
            if(errorRef.current){
                errorRef.current.innerText = "변경된 내용이 없습니다.";
            }
        }else if(!updateValue){
            if(errorRef.current){
                errorRef.current.innerText = "내용을 입력해주세요.";
            }
        }else{
            dispatch(updateTodo({id, whatTodo: updateValue}));
            setIsUpdate(false);
        }
    }

    return <div className={styles.Todo}>
        {isUpdate ? (
            <div className={styles.viewer}>
                <div className={styles.updateTodoWrapper}>
                    <input type="text" ref={updateText} className={styles.updateText} onDoubleClick={(e)=>doubleClickHandler(e)} value={updateValue} onChange={(e)=>setUpdateValue(e.target.value)}/>
                    <p className={styles.error} ref={errorRef}></p>
                </div>
                <button className={styles.updateBtn} onClick={()=>updateTodoHandler(todo.id, todo.whatTodo)}>Update</button>
            </div>
        ) : (
            <div className={styles.viewer}>
                <input type="checkbox" checked={todo.complete} onChange={()=>checkHandler(todo.id)}/>
                <p className={`${styles.todoTitle} ${todo.complete ? styles.complete : ""}`} onDoubleClick={(e)=>doubleClickHandler(e)}>{todo.whatTodo}</p>
            </div>
        )}
        <button className={styles.deleteBtn} onClick={()=>clickHandler(todo.id)}>Delete</button>
    </div>
};

export default Todo;