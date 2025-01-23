import "./Projeto.scss";

export function Projeto({ imageSrc, title, description, isSelected, onToggle, linkRepo, linkSite }) {
  return (
    <div
      className="card pt-2 pt-md-0 text-bg-dark text-decoration-none"
      onClick={onToggle}
    >
      <h5 className="card-title d-block d-md-none text-center fw-bold">
        {title}
      </h5>
      <img src={imageSrc} className="card-img" alt={title} />
      <div className="overlay d-flex align-items-baseline">
        {isSelected && (
          <div className="overlay-content py-4 px-4 w-100 border">
            <h5 className="d-none d-md-block card-title text-center fw-bold mb-3">
              {title}
            </h5>
            <p className="card-text text-break p-0">{description}</p>

            <div className="d-grid gap-2 col-6 mx-auto mt-4">
              <button className="btn btn-lg btn-custom" type="button">
                <a href={linkRepo} target="_blank" rel="noopener noreferrer">
                  Repositório
                </a>
              </button>

              <button className="btn btn-lg btn-custom" type="button">
                <a href={linkSite} target="_blank" rel="noopener noreferrer">
                  Site
                </a>
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}



