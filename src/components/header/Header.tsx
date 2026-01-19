import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/img/logo.svg" alt=""/>
        MiLogo
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="/finances">Finances</a></li>
          <li><a href="/population">Population</a></li>
          <li><a href="/weather">Weather</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;