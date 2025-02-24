// import Faq from "./components/Faq";
import Temoignages from "./components/Temoignages";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Vision from "./components/Vision";
import Links from "./components/Links";
import Services from "./components/Services";
import Values from "./components/Values";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import Top from "./components/Top";

function App() {
  return (
    <>
      <Top />
      <Links />
      <Navbar />
      <section className="px-2 max-w-md:px-16 lg:px-32">
        <Hero />

        <Vision />
        <Values />
        <About />

        <Services />
        <Temoignages />
        <Teams />
        <div id="contact" className="text-9xl font-extrabold">Contact</div>
        <Footer />
        <section>
          <footer></footer>
        </section>
      </section>
    </>
  );
}

export default App;
