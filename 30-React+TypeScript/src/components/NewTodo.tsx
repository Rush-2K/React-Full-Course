import { useRef, useContext } from "react";
import {TodosContext} from "../store/todos-context";
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => { //define onAddTodo as a function
    const todosCtx = useContext(TodosContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null); //null is the starting/initial value

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault(); 

        const enteredText = todoTextInputRef.current!.value;

        if(enteredText.trim().length === 0) {
            //throw an error
            return;
        }

        // props.onAddTodo(enteredText);
        todosCtx.addTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    )
};

export default NewTodo;