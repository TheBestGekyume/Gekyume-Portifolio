import "./App.css";
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import { Cards } from "./Components/Cards/Cards";

export function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />

      {/*  FAZER OS CARD COM BACKGROUND IMAGEM COM OPACIDADE BAIXA E AO CLICAR APARECER MODAL */}

      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="carousel-inner">
          <Cards 
            imageSrc="https://thebestgekyume.github.io/Rainy-Night/img/headerImg.png"
           bgColor="#000" 
           link="https://thebestgekyume.github.io/Rainy-Night/" 
           description="tomi" />
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
