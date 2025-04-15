import { motion } from "framer-motion";
import { ItemSvg } from "../ItemSvg/ItemSvg";
import "./Projeto.scss";
import { h5 } from "framer-motion/client";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay progressivo nos filhos
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 0, x: 60 },
  visible: { opacity: 1, y: 0, x: 0, transition: { type: "spring", stiffness: 80 } },
};

export const Projeto = ({
  imageSrc,
  title,
  description,
  linkRepo,
  linkSite,
  isSelected,
  onToggle,
  icons,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 0.5 }}
    >
      {!isSelected ? (
        <div className="card pt-2 pt-md-0 text-bg-dark text-decoration-none" onClick={onToggle}>
          <h5 className="card-title d-block d-md-none text-center fw-bold">{title}</h5>
          <img src={imageSrc} className="card-img" alt={title} />
          <div className="d-flex align-items-baseline overlay">
            <div className="overlay-content d-none d-md-inline p-3 mx-auto">
              <h5 className="card-title text-center m-0 fw-bold">{title}</h5>
            </div>
          </div>
        </div>
      ) : (
        <div className="selected mt-2 py-4 mb-5 px-4 border border-3 border-white rounded-4 mx-auto">
          <div>
            <h5 className="text-center fw-bold mb-3 fs-3">{title}</h5>
            <p className="text-white text-center mb-4 fs-6">{description}</p>
          </div>

          <hr />
          
          {icons && (
            <>
              <h5 className="text-center fw-bold ">TECNOLOGIAS</h5>
              <motion.div
                className="d-flex justify-content-center flex-wrap mt-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {icons.map((icon, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <ItemSvg
                      title={icon.title}
                      color={icon.color}
                      link={icon.link}
                      path={icon.path}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}

          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3 mt-5">
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
};
