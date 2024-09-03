'use client'

import { NavButton } from "@chevpa/design-system";

import "./header.css";
import { useEffect, useState } from "react";

export function Header() {
    const [currentId, setCurrentId] = useState("");

    useEffect(() => {
        const matches = window.location.href.match(/#(\w+)/);
        if(matches) {
            setCurrentId(matches[1]);
        }
    }, []);

    return <div className="header">
        <div className="header__nav">
            <NavButton label="About me" url="#" onClick={() => setCurrentId("")} selected={currentId === ""}/>
            <NavButton label="Career" url="#career" onClick={() => setCurrentId("career")} selected={currentId.startsWith("career")}/>
            <NavButton label="Contact" url="#contact"onClick={() => setCurrentId("contact")} selected={currentId === "contact"}/>
        </div>
        <div className="header__links">
            <a target="_blank" href="https://github.com/pchevilley" title="Go to my Github page"><i className="ri-github-fill" /></a>
            <a target="_blank" href="https://linkedin.com/in/paulchevilley" title="Go to my Linkedin profile"><i className="ri-linkedin-box-fill" /></a>
        </div>
    </div>
}
