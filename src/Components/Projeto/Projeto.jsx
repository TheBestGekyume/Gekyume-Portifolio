import "./Projeto.css";

export function Projeto({ imageSrc, title, link, description, bgColor }) {
  return (
    <a href={link} target="_blank">
      <div className="col">
        <div className="card text-bg-dark text-decoration-none">
        <h5 className="card-title d-block d-md-none text-center fw-bold">{title}</h5>

          <img src={imageSrc} className="card-img" alt="..." />

          <div className="overlay">
            <h5 className="d-none d-md-block card-title text-center fw-bold">{title}</h5>
            <p className="card-text text-break p-1">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
