import "./Navbar.scss";

export function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-style">
      <div className="container-fluid">

        <h1 className="navbar-brand" href="#">
          <a href="https://github.com/TheBestGekyume" rel="noopener noreferrer" target="_blank">Gekyume Serna</a> 
        </h1>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 mt-3 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#header">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projetos">
                Meus Projetos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#sobreMim">
                Sobre mim
              </a>
            </li>
          </ul>
          
        </div>

      </div>
    </nav>
  
  );
}
