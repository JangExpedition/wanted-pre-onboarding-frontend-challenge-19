import React, { useRef } from "react";
import styles from "./AddTodo.module.scss"
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slice/todoSlice";

const AddTodo = () => {

    const todoRef = useRef<HTMLInputElement>(null);
    const errorRef = useRef<HTMLParagraphElement>(null);

    const dispatch = useDispatch();

    const clickHandler = () => {
        const text = todoRef.current?.value;
        if("" === text){
            if(errorRef.current){
                errorRef.current.innerText = "내용을 입력해주세요.";
            }
        }else{
            dispatch(addTodo(text));
        }
    }

    return <div className={styles.AddToDo}>
        <div className={styles.textWrapper}>
            <input type="text" className={styles.addText} ref={todoRef}></input>
            <p ref={errorRef}></p>
        </div>
        <button className={styles.addBtn} onClick={()=>clickHandler()}>ADD</button>
    </div>
}

export default AddTodo;