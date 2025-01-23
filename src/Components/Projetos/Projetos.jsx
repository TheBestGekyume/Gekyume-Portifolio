import React, { useState } from "react";
import "./Projetos.scss";
import { Projeto } from "../Projeto/Projeto";

export function Projetos({ projetos }) {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [isSingleView, setIsSingleView] = useState(false);

  const handleToggle = (index) => {
    if (isSingleView && selectedProjectIndex === index) {
      handleReset(); // Caso o projeto selecionado seja clicado novamente, voltar ao modo de exibição total
    } else {
      setSelectedProjectIndex(index);
      setIsSingleView(true); // Ativa o modo de visualização única
    }
  };

  const handleReset = () => {
    setSelectedProjectIndex(null);
    setIsSingleView(false); // Restaura a exibição de todos os projetos
  };

  return (
    <section id="projetos">

      <div className="divAnimada">
        <h3 className="text-white">Meus Projetos</h3>
      </div>

      <div className="container-fluid">
        {isSingleView && (
          <button className="btn mb-3" onClick={handleReset}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg>
          </button>
        )}
        <div className={` ${isSingleView ? ' w-75 mx-auto' : 'list'}`}>
          {projetos.map((projeto, index) => {
            const isSelected = selectedProjectIndex === index;

            if (isSingleView && !isSelected) {
              return null; // Não renderiza os projetos não selecionados quando em "exibição única"
            }

            return (
              <Projeto
                key={index}
                imageSrc={projeto.imageSrc}
                title={projeto.title}
                link={projeto.link}
                description={projeto.description}
                isSelected={isSelected} // Passa a condição de seleção para cada projeto
                onToggle={() => handleToggle(index)} // Passa o índice para o toggle
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}


