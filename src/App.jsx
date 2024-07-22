import './App.css';
import { Header } from './Components/Header/Header';
import { Navbar } from './Components/Navbar/Navbar';
import { Cards } from './Components/Cards/Cards';

export function App() {
  return (
    <div className="App">
      
    <Navbar/>

    <Header/>

    {/*  FAZER OS CARD COM BACKGROUND IMAGEM COM OPACIDADE BAIXA E AO CLICAR APARECER MODAL */}

    <Cards/>
    
    </div>
  );
}

