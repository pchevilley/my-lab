import { ICompany, IExperience, IRole } from "./Career";
import "./summary.css";

type SummaryProps = {
    onExperienceSelected: (company: ICompany, role: IRole) => void
    currentRole: IRole
    experiences: IExperience[]
};

export function Summary(props: SummaryProps) {
    const { experiences, onExperienceSelected, currentRole} = props; 
    return <div className="summary">
        {experiences.map(experience => (
            <div key={experience.company.name} className="summary__experience">
                <div className="summary__experience__company">
                    <img className="summary__experience__company-img" src={experience.company.img} />
                    {experience.company.name}
                </div>
                <div className="summary__experience__roles">
                    {experience.roles.map(role => (
                        <a 
                            href="#career__content"
                            key={role.name}
                            className={`summary__experiences__role ${currentRole === role ? "summary__experiences__role--selected" : ""}`}
                            onClick={() => onExperienceSelected(experience.company, role)}>
                            <h4 className="summary__experience__role-title">{role.name}</h4>
                            <div className="summary__experience__role-date">
                                {getDisplayDate(role.startDate)} - {getDisplayDate(role.endDate)}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        ))}
    </div>
}

function getDisplayDate(dateStr: string) {
    const [year, month] = dateStr.split('-');
    const date = new Date(Number(year), Number(month) - 1);
    const intl = new Intl.DateTimeFormat('en-US', {year: "numeric", month: "long"});

    return intl.format(date);
}
