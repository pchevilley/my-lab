import { Button, Tag } from "@chevpa/design-system";
import "./aboutMe.css";
import Image from "next/image";
import { Skills } from "./Skills";

export function AboutMe() {
    return <section className="about-me">
        <div className="hero">
            <div className="hero__text">
                <h1>Hi!<br/>My name is <b>Paul</b></h1>
                <h3>I am a professional Web developer with more than 10 years of experience</h3>
            </div>
            <Button className="hero__btn" large accent>
                <i className="ri-download-line"></i>
                Download CV
            </Button>
            <div className="hero__tags">
                <Tag label="javascript" />
                <Tag label="typescript" />
                <Tag label="react" />
                <Tag label="leadership" />
            </div>
            <Image 
                src="/profile.jpg"
                alt="A photo of Paul"
                width={300}
                height={300}
                className="hero__image" />
        </div>
        <Skills />
    </section>
}
