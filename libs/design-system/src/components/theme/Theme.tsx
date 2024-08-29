import { PropsWithChildren } from "react";
import "./theme.css";

type ThemeProps = PropsWithChildren<{
    dark?: boolean
}>;
export function Theme(props: ThemeProps) {
    const {children} = props;
    return (
        <section className="chevpa-theme">{children}</section>
    );
}
