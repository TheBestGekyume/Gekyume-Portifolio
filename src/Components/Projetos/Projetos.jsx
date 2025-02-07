import React, { useState } from "react";
import "./Projetos.scss";
import { Projeto } from "../Projeto/Projeto";

export function Projetos({ projetos }) {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [isSingleView, setIsSingleView] = useState(false);

  const handleToggle = (index) => {
    if (isSingleView && selectedProjectIndex === index) {
      handleReset();
    } else {
      setSelectedProjectIndex(index);
      setIsSingleView(true); // Ativa o modo de visualização única
    }
  };

  const handleReset = () => {
    setSelectedProjectIndex(null);
    setIsSingleView(false);
  };

  return (
    <section id="projetos">

      <div className="divAnimada">
        <h3 className="text-white fs-2 fw-bolder">Meus Projetos</h3>
      </div>

      <div className="container">
        {isSingleView && (
          <button className="btn mb-3" onClick={handleReset}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" className="bi bi-arrow-left-circle-fill arrow-back" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg>
          </button>
        )}
        <div className={` ${isSingleView ? 'px-1 px-lg-5 mx-auto mx-lg-5' : 'list'}`}>
          {projetos.map((projeto, index) => {
            const isSelected = selectedProjectIndex === index;

            if (isSingleView && !isSelected) {
              return null;
            }

            return (
              <Projeto
                key={index}
                imageSrc={projeto.imageSrc}
                title={projeto.title}
                linkRepo={projeto.linkRepo}
                linkSite={projeto.linkSite}
                description={projeto.description}
                isSelected={isSelected} 
                onToggle={() => handleToggle(index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}


