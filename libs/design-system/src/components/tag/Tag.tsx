import "./tag.css";

type TagProps = {
    label: string
}
export function Tag(props: TagProps) {
    const {label} = props;

    return <div className="tag">{label}</div>
}
