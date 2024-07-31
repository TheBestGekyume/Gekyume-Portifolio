import "./Projeto.css";

export function Projeto({ imageSrc, bgColor, link, description }) {
  return (
    <>
      <div className="carousel-item active">
        <a href={link} target="_blank">
          <img
            src={imageSrc}
            className="d-block w-100"
            alt={description}
            style={{ backgroundColor: bgColor }}
          />
        </a>
      </div>
    </>
  );
}
