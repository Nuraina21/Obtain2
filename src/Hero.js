import './obtain-care.css';

function Hero() {
    return(
        <section
          className="hero"
        >
          <div
            className="container"
          >
            <h1
              className="section-heading"
            >
              FIND SPECIALISTS WHO WILL <b>TAKE CARE</b> OF YOU
            </h1>
            <form
              className="search hero__search"
            >
              <input
                className="search__input"
                type="search"
                placeholder="Enter a speciality, doctor name, type care"
              >
              </input>
              <button
                className="search__btn"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </section>
    );
}

export default Hero;