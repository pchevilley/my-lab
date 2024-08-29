import { PropsWithChildren } from "react";

import "./button.css";
import classNames from "classnames";

type ButtonProps = PropsWithChildren<{
    accent?: boolean   
    className?: string
    large?: boolean
    secondary?: boolean
}>;
export function Button(props: ButtonProps) {
    const { accent, children, className, large, secondary} = props;
    const classes = classNames(
        'chevpa-button',
        className,
        {
            "chevpa-button--accent": accent,
            "chevpa-button--large": large,
            "chevpa-button--secondary": secondary
        }
    );

    return <button className={classes}>
        {children}
    </button>
}
