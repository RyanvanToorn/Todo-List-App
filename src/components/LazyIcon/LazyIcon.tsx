import { useState, useEffect } from "react";
import type { ComponentType } from "react";
import type { SvgIconProps } from "@mui/material";
import type { Icon } from "../../types/Icons";
import * as Styles from "./LazyIcon.styles.tsx";

interface LazyIconProps extends SvgIconProps {
    icon: Icon;
}

const iconImports: Record<string, () => Promise<{ default: ComponentType<SvgIconProps> }>> = {
    Add: () => import("@mui/icons-material/Add"),
    Close: () => import("@mui/icons-material/Close"),
    Delete: () => import("@mui/icons-material/Delete"),
    UnfoldLess: () => import("@mui/icons-material/UnfoldLess"),
    UnfoldMore: () => import("@mui/icons-material/UnfoldMore"),
};

export function LazyIcon({ icon, ...props }: LazyIconProps) {
    const [IconComponent, setIconComponent] = useState<ComponentType<SvgIconProps> | null>(null);

    useEffect(() => {
        iconImports[icon]?.().then((module) => {
            setIconComponent(() => module.default);
        });
    }, [icon]);

    if (!IconComponent) return null;

    return <IconComponent {...props} style={Styles.root} />;
}

