import "./skillCard.css";
import classNames from "classnames";

type SkillCardProps = {
    name: string,
    img: string,
    value: number
    imgBorder?:boolean
    className?:string
};
export function SkillCard(props: SkillCardProps) {
    const {name, img, value, imgBorder, className} = props;
    
    const skillClasses = classNames("skill-card", className);
    const imgClasses = classNames("skill-card__img", { 
        "skill-card__img--border": imgBorder
    });

    return (
        <div className={skillClasses}>
           <img className={imgClasses} width="32" height="32" src={img} alt={name}  />
           <div className="skill-card__name">{name}</div>
           <div className="skill-card__value">{value}%</div>
           <div className="skill-card__slider">
                <div className="skill-card__slider__rail" style={
                    {width: `${value}%`}
                }></div>
           </div> 
        </div>
    );
}
