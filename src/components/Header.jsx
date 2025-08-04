import React from 'react'
import '../style/Header.css';
import SearchBar from './SearchBar';



const Header = ({onSearch}) => {
  return (
    <header>
      <nav className="navbar">
        {/* <div className="logo">
          <img src={logo} alt="Logo" />
        </div> */}

        <ul className="nav-links">
          <li className="dropdown">
            <a href="#">Principais</a>
            <ul className="dropdown-menu">
              <li><a href="#">Solana</a></li>
              <li><a href="#">Ethereum</a></li>
              <li><a href="#">BNB</a></li>
            </ul>
          </li>
          <li><a href="#">Em Alta</a></li>
          <li><a href="/documentacao-projeto.pdf" download>Documentação Projeto</a></li>
        </ul>

        <SearchBar onSearchChange={onSearch}/>
        
      </nav>
     
    </header>
  );
};

export default Header;
