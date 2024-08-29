import { PropsWithChildren } from "react";

import "./button.css";
import classNames from "classnames";

type ButtonProps = PropsWithChildren<{
    accent?: boolean   
    className?: string
    large?:boolean
}>;
export function Button(props: ButtonProps) {
    const { accent, children, className, large} = props;
    const classes = classNames(
        'chevpa-button',
        className,
        {
            "chevpa-button--accent": accent,
            "chevpa-button--large": large
        }
    );

    return <button className={classes}>
        {children}
    </button>
}
