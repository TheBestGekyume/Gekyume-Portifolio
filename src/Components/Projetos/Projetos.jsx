import React from "react";
import "./Projetos.scss";

export function Projetos({ children }) {
  return (
    <section id="projetos">
      <div className="divAnimada">
        {/* REFAZER A DIV ANIAMDA COM TRANSPARENTE EM VEZ DE PRETO */}
        <h3>Meus Projetos</h3>
      </div>
      <div className="container-fluid ">
        {/* <div className="row row-cols-1 row-cols-md-2 g-4 m-2">{children}</div> */}
        <div className="list">{children}</div>
      </div>
    </section>
  );
}
