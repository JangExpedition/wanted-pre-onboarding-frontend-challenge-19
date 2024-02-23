import { createSlice } from "@reduxjs/toolkit";
import { uid } from 'uid';

export interface TodoType{
    id: string,
    whatTodo: string,
    complete: boolean
}

const saveList = localStorage.getItem("todoList");
const initialState: TodoType[] = saveList ? JSON.parse(saveList) : [];

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo: TodoType = {
                id: uid(16),
                whatTodo: action.payload,
                complete: false,
            };

            const result = [...state, todo];
            localStorage.setItem("todoList", JSON.stringify(result));
            return result;
        },
        changeComplete: (state, action) => {
            const id = action.payload;
            const result = state.map(todo=>{
                if(todo.id === id){
                    return {...todo, complete: !todo.complete};
                }
                return todo;
            });
            localStorage.setItem("todoList", JSON.stringify(result));
            return result;
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            const result = state.filter(todo => todo.id !== id);
            localStorage.setItem("todoList", JSON.stringify(result));
            return result;
        },
        updateTodo: (state, action) => {
            const id = action.payload.id;
            const result = state.map(todo=>{
                if(todo.id === id){
                    return {...todo, whatTodo: action.payload.whatTodo};
                }
                return todo;
            });
            localStorage.setItem("todoList", JSON.stringify(result));
            return result;
        }        
    }
});

export const {addTodo, changeComplete, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice;