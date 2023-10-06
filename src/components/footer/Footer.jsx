import "./Footer.css";

function Footer() {
  return (
    <footer>
      <article className="footer-flex">
        <img className="footer-logo" src="./images/logo.svg" alt="logo" />
        <div>
          <div className="Features">
            <p className="footer-title">Features</p>
            <ul className="footer-list">
              <li className="list-item">Link Shortening</li>
              <li className="list-item">Branded Links</li>
              <li className="list-item">Analytics</li>
            </ul>
          </div>
          <div className="Resources">
            <p className="footer-title">Resources</p>
            <ul className="footer-list">
              <li className="list-item">Blog</li>
              <li className="list-item">Developers</li>
              <li className="list-item">Support</li>
            </ul>
          </div>
          <div className="Company">
            <p className="footer-title">Company</p>
            <ul className="footer-list">
              <li className="list-item">About</li>
              <li className="list-item">Our Team</li>
              <li className="list-item">Careers</li>
              <li className="list-item">Contact</li>
            </ul>
          </div>
        </div>
      </article>
      <ul className="footer-list social-media-list">
        <li className="social-media-item">
          <img src="./images/icon-facebook.svg" alt="logo" />
        </li>
        <li className="social-media-item">
          <img src="./images/icon-instagram.svg" alt="logo" />
        </li>
        <li className="social-media-item">
          <img src="./images/icon-pinterest.svg" alt="logo" />
        </li>
        <li className="social-media-item">
          <img src="./images/icon-twitter.svg" alt="logo" />
        </li>
      </ul>
      <p className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Mohammed Omar Helal</a>.
      </p>
    </footer>
  );
}

export default Footer;
