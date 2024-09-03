'use client'

import { NavButton } from "@chevpa/design-system";

import "./header.css";
import { useState } from "react";

export function Header() {
    const matches = window.location.href.match(/#(\w+)/);
    const [currentId, setCurrentId] = useState(matches && matches[1] || "");

    return <div className="header">
        <div className="header__nav">
            <NavButton label="About me" url="#" onClick={() => setCurrentId("")} selected={currentId === ""}/>
            <NavButton label="Career" url="#career" onClick={() => setCurrentId("career")} selected={currentId.startsWith("career")}/>
            <NavButton label="Contact" url="#contact"onClick={() => setCurrentId("contact")} selected={currentId === "contact"}/>
        </div>
        <div className="header__links">
            <a href="https://github.com/pchevilley" title="Go to my Github page"><i className="ri-github-fill" /></a>
            <a href="www.linkedin.com/in/paulchevilley" title="Go to my Linkedin profile"><i className="ri-linkedin-box-fill" /></a>
        </div>
    </div>
}
