import React, { useState, useRef, useLayoutEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Projeto } from "../Projeto/Projeto";
import "./Projetos.scss";

export function Projetos({ projetos }) {

  const divAnimadaRef = useRef(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [isSingleView, setIsSingleView] = useState(false);

  useLayoutEffect(() => {
    if (isSingleView && divAnimadaRef.current) {
      const yOffset = 45;
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

            <div className="px-1 px-lg-5 mx-auto mx-lg-5">
              <AnimatePresence mode="wait">
                <Projeto
                  key={`single-${selectedProjectIndex}`}
                  imageSrc={projetos[selectedProjectIndex].imageSrc}
                  title={projetos[selectedProjectIndex].title}
                  linkRepo={projetos[selectedProjectIndex].linkRepo}
                  linkSite={projetos[selectedProjectIndex].linkSite}
                  description={projetos[selectedProjectIndex].description}
                  icons={projetos[selectedProjectIndex].icons}
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