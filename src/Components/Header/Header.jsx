import "./Header.css";
import React from "react";
// import { ItemSvg } from "../ItemSvg/ItemSvg";

export function Header({ children }) {
  return (
    <section id="header">
      <div className="div-content">
        <h1>Boa-Vindas ao Meu Portifólio!</h1>

        <h3>
          <span>Desenvolvedor Front-End</span>
        </h3>

        <p>
          Olá! Meu nome é <span>Gekyume</span>, sou estudante de{" "}
          <span> Análise e Desenvolvimento de Sistemas </span>e utilizo
          principalmente <span> React.js </span>para estruturar os meus projetos
          Front-end.
          Tenho conhecimento sólido e experiencia em{" "}
          <span>Lógica de Programação</span>, <span>C</span>,<span> HTML5</span>
          ,<span> CSS3</span> e <span>JavaScript</span>.
        </p>

        <div className="svg-group">{children}</div>
      </div>
    </section>
  );
}
