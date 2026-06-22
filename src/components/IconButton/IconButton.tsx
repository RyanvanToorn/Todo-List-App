import type { Icon } from "../../types/Icons";
import { LazyIcon } from "../LazyIcon/LazyIcon";

export interface IconButtonProps{
    icon: Icon;
    onClick: () => void;
}

export function IconButton(props: IconButtonProps): React.ReactNode{
    
    return (
        <button onClick={props.onClick} style={{ background: "none", border: "none", cursor: "pointer" }}>
            <LazyIcon icon={props.icon} />
        </button>
    );
}