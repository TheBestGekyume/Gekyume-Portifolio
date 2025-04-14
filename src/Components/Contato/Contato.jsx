import "./Contato.scss";
import curriculoPDF from "../../../Assets/Curriculo-Gekyume-Serna.pdf"
export function Contato() {
    return (
        <footer id="contato" className="text-center py-4 border-top">
            <h4 className="pb-1 fw-semibold">Contate-me!</h4>
            <div className="container d-flex justify-content-evenly flex-wrap gap-4 py-3">

                <a
                    href="mailto:contatogekyume@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="icon">
                        <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.2l-10 6.25L2 5.2V4zm0 3.8v12.2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7.8l-10 6.25L2 7.8z" />
                    </svg>
                    Email
                </a>

                <a
                    href="https://www.linkedin.com/in/gekyumeserna/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="icon">
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.75v2.65h.07c.66-1.24 2.28-2.65 4.68-2.65C22.5 8 24 11.1 24 15.36V24h-5V16.22c0-1.85-.03-4.22-2.57-4.22-2.58 0-2.98 2-2.98 4.08V24h-5V8z" />
                    </svg>
                    LinkedIn
                </a>

                <a
                    href="https://github.com/TheBestGekyume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="icon">
                        <path d="M12 .5C5.65.5.5 5.64.5 12a11.5 11.5 0 0 0 7.84 10.94c.57.1.78-.25.78-.55v-1.96c-3.18.69-3.85-1.53-3.85-1.53-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.25.72-1.54-2.54-.29-5.21-1.27-5.21-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.17a11 11 0 0 1 5.77 0C17.14 4.52 18.1 4.83 18.1 4.83c.62 1.58.23 2.75.11 3.04.74.8 1.17 1.82 1.17 3.07 0 4.39-2.68 5.36-5.23 5.64.42.36.77 1.07.77 2.16v3.21c0 .3.2.65.79.54A11.5 11.5 0 0 0 23.5 12C23.5 5.64 18.35.5 12 .5z" />
                    </svg>
                    GitHub
                </a>

                <a
                    href={curriculoPDF}
                    download={curriculoPDF}
                    className="contact-link"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="icon">
                        <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm8 4H4v-2h16v2z" />
                    </svg>
                    Currículo
                </a>

            </div>

            <h5 className="pt-2">© {new Date().getFullYear()} Gekyume Serna. Todos os direitos reservados.</h5>
        </footer>
    );
}
