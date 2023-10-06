import Nav from "./nav/Nav.jsx";

function Header() {
  return (
    <header>
      <Nav />
      <div className="header-flex">
        <div className="title">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="button">Get Started</button>
        </div>
        <img
          src="./images/illustration-working.svg"
          alt=""
          className="landing-image"
        />
      </div>
    </header>
  );
}

export default Header;
