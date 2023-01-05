import "./about.css";
import AboutImage from "../../assets/me.png";
import data from "./data";
import items from "./items";
import CV from "../../assets/LILI's Resume.pdf";
import Card from "../../components/Card";
import { FcDownload } from "react-icons/fc";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container about__container">
          <div className="about__left">
            <div className="about__portrait">
              <img src={AboutImage} alt="portrait" />
            </div>
          </div>
          <div className="about__right">
            <h2>
              About Me <br />
              My Approach
            </h2>

            <div className="about__cards">
              {items.map((item) => (
                <Card key={item.id} className="about__card">
                  <span className="about__card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))}
            </div>

            <ul className="about__p">
              {data.map((item) => (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.p}</p>
                </li>
              ))}
            </ul>
            <a href={CV} download className="btn primary">
              Download CV <FcDownload className="btn-icon-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
