import type { ITodo } from "@interfaces/ITodo";
import * as Styles from "./TodoCard.styles.tsx";

export function TodoCard(todo: ITodo): React.ReactNode{
    return (
        <div style={Styles.root}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
        </div>
    );
}