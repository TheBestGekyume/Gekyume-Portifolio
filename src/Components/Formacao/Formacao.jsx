import "./Formacao.scss";
import ImgSenacWebDev from "../../../Assets/Images/SenacWebDev.jpg";
import ImgAdaWebDev from "../../../Assets/Images/AdaWebDev.jpg";
import ImgCCNAv7 from "../../../Assets/Images/CCNAv7.jpg";
import ImgJCACP from "../../../Assets/Images/JCACP.jpg";
import ImgCCST from "../../../Assets/Images/CCST.jpg";

const formacoes = [
  { img: ImgSenacWebDev, title: "Qualificação Profissional em Web Full Stack" },
  { img: ImgAdaWebDev, title: "Santander Coders 2024 (Trilha Front-End)" },
  { img: ImgCCNAv7, title: "CCNAv7 - Introdução às redes" },
  { img: ImgJCACP, title: "Junior Cybersecurity Analyst Career Path" },
  { img: ImgCCST, title: "CCST - Cybersecurity" },
];

export function Formacao() {
  return (
    <section id="formacao" className="container-flex py-5">
      <h2 className="text-white text-center fw-bolder">Certificados</h2>

      <div id="carousel" className="carousel slide container text-white" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {formacoes.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to={index}
              className={`rounded-circle ${index === 0 ? "active" : ""}`}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner pb-2">
          {formacoes.map((item, index) => (
            <div key={index} className={`carousel-item p-5 ${index === 0 ? "active" : ""}`}>
              <div className="carroItem">
                <div className="border rounded-3">
                  <img src={item.img} className="rounded-top-3" alt={item.title} />
                  <h2 className="my-3">{item.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
