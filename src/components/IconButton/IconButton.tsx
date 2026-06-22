import type { Icon } from "../../types/Icons";
import { LazyIcon } from "../LazyIcon/LazyIcon";
import * as Styles from "./IconButton.styles.tsx";

export interface IconButtonProps{
    icon: Icon;
    onClick: () => void;
}

export function IconButton(props: IconButtonProps): React.ReactNode{
    
    return (
        <button onClick={props.onClick} style={Styles.button}>
            <LazyIcon icon={props.icon} />
        </button>
    );
}