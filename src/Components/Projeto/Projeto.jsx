import { motion } from "framer-motion";
import "./Projeto.scss";

export const Projeto = (({ imageSrc, title, description, linkRepo, linkSite, isSelected, onToggle }, ref) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2}}
      transition={{ duration: 1 }}
      ref={ref}
    >
      {!isSelected ? (
        <div
          className="card pt-2 pt-md-0 text-bg-dark text-decoration-none"
          onClick={onToggle}
        >
          <h5 className="card-title d-block d-md-none text-center fw-bold">
            {title}
          </h5>
          <img src={imageSrc} className="card-img" alt={title} />

          <div className="d-flex align-items-baseline overlay">
            <div className="overlay-content d-none d-md-inline p-3 mx-auto">
              <h5 className="card-title text-center m-0 fw-bold">
                {title}
              </h5>
            </div>
          </div>
        </div>
      ) : (
        <div className="selected mt-2 py-4 mb-5 px-4 border border-3 border-white rounded-4 mx-auto">
          <h5 className="text-center fw-bold mb-3 fs-3">{title}</h5>
          <p className="text-white text-center p-0 fs-6">{description}</p>

          <div className="d-grid gap-2 col-11 col-lg-4 gap-3 mx-auto mt-5">
            <button
              className="btn-custom"
              type="button"
              onClick={() => window.open(linkRepo, "_blank", "noopener noreferrer")}
            >
              Repositório
            </button>

            {linkSite ? (
              <button
                className="btn-custom"
                type="button"
                onClick={() => window.open(linkSite, "_blank", "noopener noreferrer")}
              >
                Site
              </button>
            ) : (
              <button className="btn-custom" type="button" disabled>
                Site Indisponível
              </button>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
});
