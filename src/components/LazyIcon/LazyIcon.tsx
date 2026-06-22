import { useState, useEffect } from "react";
import type { ComponentType } from "react";
import type { SvgIconProps } from "@mui/material";
import type { Icon } from "../../types/Icons";

interface LazyIconProps extends SvgIconProps {
    icon: Icon;
}

export function LazyIcon({ icon, ...props }: LazyIconProps) {
    const [IconComponent, setIconComponent] = useState<ComponentType<SvgIconProps> | null>(null);

    useEffect(() => {
        import(`@mui/icons-material/${icon}`).then((module) => {
            setIconComponent(() => module.default);
        });
    }, [icon]);

    if (!IconComponent) return null;

    return <IconComponent {...props} />;
}

