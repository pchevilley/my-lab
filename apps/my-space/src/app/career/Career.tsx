'use client'

import { useState } from "react";
import "./career.css";
import { Summary } from "./Summary";
import { experiences } from "./experiences";

export interface ICompany {
    img: string;
    name: string;
};
export interface IRole {
    name: string,
    startDate: string,
    endDate: string,
    description?: string,
    skills?: string[]
}
export interface IExperience {
    company: ICompany,
    roles: IRole[]
};

export function Career() {
    const [currentCompany, setCurrentCompany] = useState<ICompany>(experiences[0].company);
    const [currentRole, setCurrentRole] = useState<IRole>(experiences[0].roles[0]);

    return <section id="career" className="career">
        <div className="career__menu">
            <h1>Curriculum<br/> Vitae</h1>
            <Summary currentRole={currentRole} onExperienceSelected={(company, role) => {
                setCurrentCompany(company);
                setCurrentRole(role);
            }} experiences={experiences}/>
        </div>
        <div className="career__content"></div>
    </section>
}
