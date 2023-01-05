import "./portfolio.css";
import Card from "../../components/Card";
import data from "./data";

const Testimonials = () => {
  return (
    <section id="portfolio" className=" projects__container">
      <h2>Recent Projects</h2>
      <div className="projects__details container">
        {data.map((item) => (
          <Card key={item.id}>
            <img src={item.image} alt="website" className="projects__image" />

            <h4>{item.title}</h4>
            <p>{item.desc}</p>
            <a
              href={item.link}
              className="btn primary"
              target="_blank "
              rel="nooperner noreferrer"
            >
              Demo
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
