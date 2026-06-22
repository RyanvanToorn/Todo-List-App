import type { ITodo } from "@interfaces/ITodo";
import * as Styles from "./TodoCard.styles.tsx";
import { IconButton } from "@components/IconButton/IconButton.tsx";

export interface TodoCardProps extends ITodo {
    onRemove: () => void;
    onComplete: () => void;
    onEdit: () => void;
}

export function TodoCard({ onRemove, onComplete, ...todo }: TodoCardProps): React.ReactNode{
    return (
        <div style={Styles.rootStyles}>
            <div style={Styles.headerStyles}>
                <h2>{todo.title}</h2>
                <div style={Styles.headerButtonContainerStyles}>
                    <IconButton icon="Edit" onClick={onEdit} />
                    <IconButton icon="Check" onClick={onComplete} />
                    <IconButton icon="Delete" onClick={onRemove} />
                </div>
            </div>
            
            <p>{todo.description}</p>
        </div>
    );
}