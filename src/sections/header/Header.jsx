import "./header.css";
import HeaderImage from "../../assets/webdesign.jpg";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__left">
          <h1>Lily Li </h1>
          <h4> I'm Lily Li and Web Developer</h4>
          <p>
            I'm a Web / UI / UX Designer and UI Developer from Hong Kong I have
            much experience in Responsive Web / UI Design, HTML, CSS and a
            little bit of jQuery and javascript.
          </p>
          <div className="header__cta">
            <a href="#contact" className="btn primary">
              Let's Talk
            </a>
            <a href="#portfolio" className="btn light">
              My Work
            </a>
          </div>
        </div>

        <div className="header__profile header__right">
          <img src={HeaderImage} alt="web desgin" />
        </div>
      </div>
    </header>
  );
};

export default Header;
