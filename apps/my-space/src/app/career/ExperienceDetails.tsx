'use client' 

import { ICompany, IRole } from "./Career"

import "./experienceDetails.css";

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
    </section>
}
