import React from 'react';
import '../style/Header.css';
import SearchBar from './SearchBar'; // Importa o SearchBar





const Header = ({ onSearch }) => { // Recebe a prop onSearch
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="dropdown">
            <a href="#">Principais</a>
            <ul className="dropdown-menu">
              <li><a href="#">Tipo 1</a></li>
              <li><a href="#">Tipo 2</a></li>
              <li><a href="#">Tipo 3</a></li>
            </ul>
          </li>
          <li><a href="#">Em Alta</a></li>
          <li><a href="/documentacao-projeto.pdf" download>Documentação Projeto</a></li>
        </ul>
        
        {/* Renderiza o SearchBar, passando a função onSearchChange */}
        <SearchBar onSearchChange={onSearch} />
      </nav>
    </header>
  );
};

export default Header;


