import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        MiLogo
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="#pagina1">Página 1</a></li>
          <li><a href="#pagina2">Página 2</a></li>
          <li><a href="#pagina3">Página 3</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;