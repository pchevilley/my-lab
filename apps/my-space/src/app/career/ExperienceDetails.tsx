'use client' 

import Markdown from "react-markdown";
import { ICompany, IRole } from "./Career"

import "./experienceDetails.css";
import { Tag } from "@chevpa/design-system";

type ExperienceDetailsProps = {
    company: ICompany;
    role: IRole;
}
export function ExperienceDetails(props: ExperienceDetailsProps) {
    const { company, role } = props;

    return <section className="experience-details">
        <h2 className="experience-details__company">
            {company.name}
        </h2>
        <p className="experience-details__company-description">{company.description}</p>
        <div className="experience-details__role">
            <h2 className="experience-details__role-name">{role.name}</h2>
            <div className="experience-details__skills">
                {role.skills?.map(skill => (<Tag label={skill} key={skill}/>))}
            </div>
            <Markdown>
                {role.description}
            </Markdown>
        </div>
    </section>
}
