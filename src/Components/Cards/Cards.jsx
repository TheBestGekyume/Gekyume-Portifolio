import "./Cards.css";

export function Cards({ imageSrc, bgColor, link, description }) {
  return (
    <>
      <div class="carousel-item active">
        <a href={link} target="_blank">
          <img
            src={imageSrc}
            class="d-block w-100"
            alt={description}
            style={{ backgroundColor: bgColor }}
          />
        </a>
      </div>
    </>
  );
}
