import "./Projeto.scss";

export function Projeto({ imageSrc, title, link, description}) {
  return (
    <a href={link} target="_blank">
        <div className="card pt-2 pt-md-0 text-bg-dark text-decoration-none">
        <h5 className="card-title d-block d-md-none text-center fw-bold">{title}</h5>

          <img src={imageSrc} className="card-img" alt="..." />

          <div className="overlay">
            <h5 className="d-none d-md-block card-title text-center fw-bold">{title}</h5>
            <p className="card-text text-break p-0">{description}</p>
          </div>
      </div>
    </a>
  );
}
