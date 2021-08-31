import logo from './logo.svg';
import './obtain-care.css';

function Header() {
    return (
        <header className="header">
        <div
          className="header__container"
        >
          <img src={logo} className="header__logo logo" alt="logo" />
          <div
            className="header__right"
          >
            <select
            className="header__select"
            >
              <option>
                Север Чикаго
              </option>
            </select>
            <select
            className="header__select"
            >
            <option>
              en
            </option>
            <option>
              ru
            </option>
            </select>
            <a
              className="header__link link--login"
              href=""
              target="_blank"
            >
              Log in
            </a>
            <a className="header__link link--sign" href="" target="_blank">
              Sign in
            </a>
          </div>
        </div>
      </header>
    );
}

export default Header;