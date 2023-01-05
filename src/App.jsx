import Navbar from "./sections/navbar/Navbar";
import About from "./sections/about/About";
import Header from "./sections/header/Header";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
};
export default App;
