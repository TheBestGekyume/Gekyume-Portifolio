import "./Header.scss";
import React from "react";
import Particulas from "../Particulas/Particulas";

export function Header({ children }) {
  return (
    <section id="header" className="d-flex justify-content-center align-items-center h-100 text-white">
      <Particulas id="particulas"/>
      <div className="div-content py-5 px-3">
        <h2>Boa-Vindas ao Meu Portifólio!</h2>

        <h3>
          <span>Desenvolvedor Front-End</span>
        </h3>

        <p>
          Olá! Meu nome é<span> Gekyume</span>, sou estudante de
          <span> Análise e Desenvolvimento de Sistemas </span>e utilizo
          principalmente<span> React.js </span> e <span> Angular </span>para 
          estruturar os meus projetos Front-end.
          Tenho conhecimento sólido e experiencia em
          <span> Lógica de Programação</span>, <span>C</span>,<span> HTML5</span>
          ,<span> CSS3</span> e <span>JavaScript</span>.
        </p>

        <div className="text-center mx-auto svg-content">{children}</div>
      </div>
      
    </section>
  );
}
