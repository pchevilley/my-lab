import "./navButton.css";

type NavButtonProps = {
    url: string;
    label: string;
    selected?: boolean;
    onClick?: () => void
};
export function NavButton(props: NavButtonProps) {
    const { url, label, selected, onClick } = props;
    return <a href={url} onClick={onClick} className={`nav-button ${selected ? "nav-button--selected" : ""}`}>
        {label}
    </a>
}
