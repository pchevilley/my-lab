import { Button, SkillCard } from "@chevpa/design-system";
import "./skills.css";

export function Skills() {
    return <section className="skills">
        <div className="skills__content">
            <div className="skills__cards">
                <SkillCard className="skills__cards__main" name="Ecmascript" img="/ecmascript.png" value={98} />
                <SkillCard name="Typescript" img="/typescript.png" value={92} imgBorder />
                <SkillCard name="React" img="/react.png" value={98} imgBorder/>
                <SkillCard name="Azure Devops" img="/azure.png" value={82} imgBorder/>
                <SkillCard name="Figma" img="/figma.jpeg" value={75} imgBorder/>
                <SkillCard name="Bundlers" img="/webpack.png" value={85} imgBorder/>
                <SkillCard name="Unit tests" img="/vitest.svg" value={72} imgBorder/>
            </div>
            <div className="skills__text">
                <h2><i className="ri-bar-chart-2-fill"></i> My skills</h2>
                <p>
                    In my recent role at Cyncly, I led the design and implementation of scalable frontend architectures, enhancing performance and user experience. My leadership in managing teams and mentoring developers has been pivotal in delivering successful projects.
                </p>

                <a href="#contact">
                <Button secondary large>
                    get in touch
                </Button>
                </a>
            </div>
        </div>
    </section>
}
