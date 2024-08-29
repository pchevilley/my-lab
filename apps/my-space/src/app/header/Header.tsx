import { NavButton } from "@chevpa/design-system";

import "./header.css";

export function Header() {
    return <div className="header">
        <div className="header__nav">
            <NavButton label="About me" url="#" selected/>
            <NavButton label="Career" url="#career"/>
            <NavButton label="Contact" url="#contact"/>
        </div>
        <div className="header__links"></div>
    </div>
}
