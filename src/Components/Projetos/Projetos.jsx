import React, { useState, useRef, useLayoutEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "./Projetos.scss";
import { Projeto } from "../Projeto/Projeto";

export function Projetos({ projetos }) {
  const divAnimadaRef = useRef(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [isSingleView, setIsSingleView] = useState(false);

  useLayoutEffect(() => {
    if (isSingleView && divAnimadaRef.current) {
      const yOffset = 30;
      const y = divAnimadaRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [isSingleView]);

  const handleProjectSelect = (index) => {
    setSelectedProjectIndex(index);
    setIsSingleView(true);
  };

  const handleReturnToList = () => {
    setIsSingleView(false);
    setSelectedProjectIndex(null);
  };

  return (
    <section id="projetos" className="pb-5">
      <div className="divAnimada" ref={divAnimadaRef}>
        <h3 className="text-white fs-2 fw-bolder">Meus Projetos</h3>
      </div>

      <div className="container">
        {/* VIEW DE PROJETO ÚNICO */}
        {isSingleView && (
          <div className="single-view-wrapper">
            <button
              className="btn mb-3 back-button"
              onClick={handleReturnToList}
              aria-label="Voltar para lista de projetos"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="white"
                className="bi bi-arrow-left-circle-fill arrow-back"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
              </svg>
            </button>

            <div className="px-1 px-lg-5 mx-auto mx-lg-5">
              <AnimatePresence mode="wait">
                <Projeto
                  key={`single-${selectedProjectIndex}`}
                  imageSrc={projetos[selectedProjectIndex].imageSrc}
                  title={projetos[selectedProjectIndex].title}
                  linkRepo={projetos[selectedProjectIndex].linkRepo}
                  linkSite={projetos[selectedProjectIndex].linkSite}
                  description={projetos[selectedProjectIndex].description}
                  isSelected={true}
                  onToggle={() => handleReturnToList()}
                />
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* VIEW DE LISTA DE PROJETOS */}
        {!isSingleView && (
          <div className="list-view-wrapper">
            <div className="list">
              <AnimatePresence>
                {projetos.map((projeto, index) => (
                  <Projeto
                    key={`list-${index}`}
                    imageSrc={projeto.imageSrc}
                    title={projeto.title}
                    linkRepo={projeto.linkRepo}
                    linkSite={projeto.linkSite}
                    description={projeto.description}
                    isSelected={false}
                    onToggle={() => handleProjectSelect(index)}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}