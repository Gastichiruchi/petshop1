import CardWidget from './CardWidget/CardWidget.js';
import Logo from  './CardWidget/Assets/Logo.svg';

const Navbar = () => {
  return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="./public/index.html">
            <img src={Logo} alt="Logo Gatito" width="30" height="30" class="d-inline-block align-text-top"/>
            Petshop
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link" href="./public/index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./public/index.html">Shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./public/index.html">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./public/index.html">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./public/index.html">Contact</a>
              </li>
            </ul>
            <a class="navbar-brand" href="./public/index.html">
              <CardWidget/>
            </a>
          </div>
        </div>  
      </nav>
  );
}

export default Navbar;