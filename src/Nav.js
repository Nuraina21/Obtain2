import './obtain-care.css';

function Nav() {
  return(
    <nav
      className="nav"
    >
      <div
        className="container nav__container"
      >
        <ul
          className="nav__list"
        >
          <li
            className="nav__item"
          >
            Healtcare
          </li>
          <li
            className="nav__item"
          >
            Auto
          </li>
          <li
            className="nav__item"
          >
            Pet
          </li>
          <li
            className="nav__item"
          >
            Dental
          </li>
          <li
            className="nav__item"
          >
            Child
          </li>
          <li
            className="nav__item"
          >
            Eldarly
          </li>
          <li
            className="nav__item"
          >
            Physical Reabilitation Care
          </li>
          <li
            className="nav__item"
          >
            Fitness
          </li>
          <li
            className="nav__item"
          >
            Substance Reabilitation
          </li>
          <li
            className="nav__item"
          >
            <select
              className="nav__select"
            >
              <option>
                More
              </option>
            </select>
          </li>
        </ul> 
      </div>
    </nav>
  );
}

export default Nav;