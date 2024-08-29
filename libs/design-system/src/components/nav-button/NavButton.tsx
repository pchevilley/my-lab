import "./navButton.css";

type NavButtonProps = {
    url: string;
    label: string;
    selected?: boolean;
};
export function NavButton(props: NavButtonProps) {
    const { url, label, selected } = props;
    return <a href={url} className={`nav-button ${selected ? "nav-button--selected" : ""}`}>
        {label}
    </a>
}
