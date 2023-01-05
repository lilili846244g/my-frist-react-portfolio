import "./footer.css";
import data from "./data";

const Footer = () => {
  return (
    <footer className="footer__container">
      <ul className="nav__menu ">
        {data.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
