import { Button } from "@chevpa/design-system";
import "./footer.css";

export function Footer() {
    return <section className="footer" id="contact">
    <h1>Contact me</h1>
    <a href="mailto:paul.chevilley@gmail.com">
        <Button accent large>
            <i className="ri-mail-line" /> Send me an email
        </Button>
    </a>
    <div className="footer__links">
        <a target="_blank" href="https://github.com/pchevilley" title="Go to my Github page"><i className="ri-github-fill" /></a>
        <a target="_blank" href="https://linkedin.com/in/paulchevilley" title="Go to my Linkedin profile"><i className="ri-linkedin-box-fill" /></a>
    </div>
    </section>
}
